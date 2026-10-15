const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const User = require('../database/models/User');

const scopes = ['identify', 'email', 'guilds.join'];

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).lean();
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(new DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: process.env.DISCORD_CALLBACK_URL,
  scope: scopes
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const avatarUrl = profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : null;

    const updates = {
      discordId: profile.id,
      username: `${profile.username}#${profile.discriminator}`,
      email: profile.email,
      avatar: avatarUrl,
      accessToken,
      refreshToken
    };

    const user = await User.findOneAndUpdate({ discordId: profile.id }, updates, { new: true, upsert: true });

    // After creating/updating user, attempt to add to guilds by sending a process message to bot if available
    if (process.send) {
      const guilds = (process.env.GUILD_IDS || '').split(',').map(s => s.trim()).filter(Boolean);
      for (const g of guilds) {
        process.send({ type: 'addMember', guildId: g, userId: profile.id, accessToken });
      }
    }

    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));
