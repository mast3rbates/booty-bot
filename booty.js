const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('settings.json');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'poopy') {
    message.reply('pants');
  }
});

client.login('settings.token');
