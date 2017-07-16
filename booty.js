// const Discord = require('discord.js');
const commando = require('discord.js-commando');
const client = new commando.Client();

client.registry.registerGroup('random', 'Random stuff');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

//login bot using token
client.login('MzM1MjY2MzQ1NDg5MDA2NTky.DEnQzg.q6cxlMa_1bdaerOQzHbzTbN00sQ');

//ready message when bot starts
client.on('ready', () => {
  console.log('I am ready!');
});

var regexMeme = /memes|meme/ig;
var regexUplay = /uplay/ig;

var uplayReplies = ["Uplay is shit.",
                    "Uplay couldn't follow through making a good game even with divine intervention.",
                    "Uplay is a bottom feeding piece of shit",
                    "https://i.redditmedia.com/0uaia3fh5l3OqZ-OmzWd6UO5ZgJ-s1BtGT904qxbiwY.jpg?w=778&s=67f1fce2921045739bb2e331bbefe522",
                    "[ACTION COMPLETED]",
                    "\"honhonhonhonhon\" -Uplay probably",
                    "You are not connected to the Ubisoft servers right now, would you like to reconnect to continue discussing Uplay?"]

client.on('message', (message) => {

    if(message.content == 'poopy'){
        message.channel.send('pants');
    }

    if(regexMeme.test(message.content)){
        message.channel.send('Oh, I love memes!');
    }

    var randomUreply = Math.floor(Math.random()*uplayReplies.length);
    if(regexUplay.test(message.content)){
        message.channel.send(uplayReplies[randomUreply]);
    }

});
