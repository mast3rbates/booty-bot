// const Discord = require('discord.js');
const commando = require('discord.js-commando');
const client = new commando.Client({
	commandPrefix: '~'
});
const music = require('discord.js-music-v11');
music(client, {
	prefix: '-',        // Prefix of '-'.
    anyoneCanSkip: true,
});

client.registry.registerGroup('random', 'Random stuff');
client.registry.registerGroup('music', 'A basic music manager.');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

//login bot using token
client.login('MzM1MjY2MzQ1NDg5MDA2NTky.DEnQzg.q6cxlMa_1bdaerOQzHbzTbN00sQ');

//ready message when bot starts
client.on('ready', () => {
    console.log('I am ready!');
	// client.channels.get('335862488195137537').sendMessage('elax102 is my waifu');
});

var regexMeme = /memes|meme/ig;
var regexUplay = /uplay/ig;
var regexOrigin = /origin /ig;
var regexTestbot = /testbot/ig;
var regexBootybot = /bootybot|booty-bot/ig;
var regexSmiter = /@TDU/ig;

var uplayReplies = ["Uplay is shit.",
                    "Uplay couldn't follow through making a good game even with divine intervention.",
                    "Uplay is a bottom feeding piece of shit",
                    "https://i.redditmedia.com/0uaia3fh5l3OqZ-OmzWd6UO5ZgJ-s1BtGT904qxbiwY.jpg?w=778&s=67f1fce2921045739bb2e331bbefe522",
                    "[ACTION COMPLETED]",
                    "You are not connected to the Ubisoft servers right now, would you like to reconnect to continue discussing Uplay?",
                    "https://imgflip.com/i/1slctd",
                    "https://pics.me.me/steam-origin-origin-steam-origin-uplay-13583183.png",
                    "Uplay? More like U-DONT-Play-to-the-polls #fellowkids",
		    "https://i.imgur.com/4vkqpYf.jpg"
                    ]

var originReplies = ["http://s2.quickmeme.com/img/72/72560c82cc79ac0bf47f182405cbd4b3babef2676b3b8ee3d2e2b263738e039d.jpg",
					"http://i3.kym-cdn.com/photos/images/original/000/705/206/d37.png"]

var TesbotToBootybotReplies = ["Notice me test-bot senpai! \n ＼(*^▽^*)/",
    				"It's not like I wanted you to notice me, test-bot senpai. B-Baka! \n （╯°□°）╯",
                    "Test-bot senpai is soo dreamy. \n (●´ω｀●)"]

//when a message is posted
client.on('message', (message) => {

    //test ping
    if(message.content == 'poopy'){
        console.log(message.author.id);
        message.channel.send('pants');
    }

    //notify smiter for TDU
    if (regexSmiter.test(message.content)) {
        var smiter = client.users.get("109457206126071808");
        if (smiter.presence.status == "offline") {
            message.channel.send("smiter is offline, you can mention him anyways with @ smiter if it's important");
        }else if(smiter.presence.status == "online") {
            message.channel.send("<@109457206126071808> someone wishes to discuss TDU");
        }
    }

    //Tesbot senpai
    var randomT2Breply = Math.floor(Math.random()*TesbotToBootybotReplies.length);
    if(regexBootybot.test(message.content) && message.author.id == "76628027752054784"){
        message.channel.send(TesbotToBootybotReplies[randomT2Breply]);
    }

    //notify osiris
    // if(message.content == '@TMM'){
    //     message.channel.send('<@151840868079370241>');
    // }

    //link to mission template download
    if(message.content == '#missiontemplate'){
        message.channel.send('https://github.com/CookieDefender/TEST-Mission-Template/releases/');
    }

    //when uplay is mentioned pick a random response from array
    var randomUreply = Math.floor(Math.random()*uplayReplies.length);
    if(regexUplay.test(message.content)){
        message.channel.send(uplayReplies[randomUreply]);
    }

    //when origin is mentioned pick a random response from array
    var randomOreply = Math.floor(Math.random()*originReplies.length);
    if(regexOrigin.test(message.content)){
        message.channel.send(originReplies[randomOreply]);
    }

    //get status of testbot
    if (regexTestbot.test(message.content)) {
        var testbot = client.users.get("76628027752054784");
        if (testbot.presence.status == "offline") {
            message.channel.send("test-bot is offline, but I'm here for you!");
        }else if(testbot.presence.status == "online") {
            message.channel.send("<@76628027752054784>'s status is " + testbot.presence.status);
        }
    }
});
