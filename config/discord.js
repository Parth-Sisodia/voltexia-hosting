require('dotenv').config();

module.exports = {
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: process.env.DISCORD_CALLBACK_URL,
  botToken: process.env.DISCORD_BOT_TOKEN,
  guildIds: (process.env.GUILD_IDS || '').split(',').map(s => s.trim()).filter(Boolean)
};
