// const Discord = require('discord.js');
const commando = require('discord.js-commando');
const client = new commando.Client();

client.registry.registerGroup('random', 'Random');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

//login bot using token
client.login('MzM1MjY2MzQ1NDg5MDA2NTky.DEnQzg.q6cxlMa_1bdaerOQzHbzTbN00sQ');

//ready message when bot starts
client.on('ready', () => {
  console.log('I am ready!');
});


//reply to user when user types poopy
client.on('message', (message) => {
    if(message.content == 'poopy'){
        message.reply('pants');
    }
});
