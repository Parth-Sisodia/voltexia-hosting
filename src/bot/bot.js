const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[Bot] MongoDB connected'))
  .catch(err => console.error('[Bot] MongoDB connection error', err));

const User = require('../src/database/models/User');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.once('ready', () => {
  console.log(`[Bot] Logged in as ${client.user.tag}`);
});

async function addMemberToGuild(guildId, userId, accessToken) {
  try {
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);
    await rest.put(Routes.guildMember(guildId, userId), { body: { access_token: accessToken } });
    console.log(`[Bot] Added ${userId} to guild ${guildId}`);
  } catch (err) {
    console.error('[Bot] addMemberToGuild error', err);
  }
}

if (typeof process !== 'undefined' && process.on) {
  process.on('message', async (msg) => {
    if (msg && msg.type === 'addMember') {
      const { guildId, userId, accessToken } = msg;
      await addMemberToGuild(guildId, userId, accessToken);
    }
  });
}

client.on('guildCreate', guild => console.log(`[Bot] Joined guild ${guild.id}`));

client.login(process.env.DISCORD_BOT_TOKEN).catch(err => console.error('[Bot] login error', err));

module.exports = { client, addMemberToGuild };
