const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

// Web server to keep the bot from sleeping
app.get('/', (req, res) => res.send('Bot is online!'));
app.listen(3000, () => console.log('Web server running.'));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

// Uses an environment variable for security
client.login(process.env.TOKEN);