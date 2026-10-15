# Voltexia Hosting

This project contains:
- Express web app with EJS views
- Discord OAuth2 via passport-discord
- Discord bot (discord.js v14) in src/bot
- MongoDB (Mongoose) models

Quick start:
1. Copy .env.example to .env and set values in your environment (or set as system environment variables).
2. npm install
3. npm run dev (starts web server; bot also loads if env provided)
4. or run bot separately: npm run bot

Notes:
- The repo contains tos.html and privacy-policy.html in public/ — do not delete.
- The bot will try to add members to guilds provided in GUILD_IDS when a user logs in (requires 'guilds.join' scope).
