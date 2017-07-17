const commando = require('discord.js-commando');

class MemeCommand extends commando.Command{
    constructor(client) {
        super(client, {
            name: "meme",
            group: "random",
            memberName: "meme",
            description: "gets a meme",
            args:[
                {
                    key: 'meme',
                    prompt: 'What kind of meme would you like?',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, args){
        const { meme } = args;

        if (meme == "dank") {
            console.log("dank meme");
            return message.channel.send("http://img.ifcdn.com/images/de5168c952b31658eab725d09d6fd3395b1f4fa7bc2fa9ece34a91152551fea8_1.jpg");
        }else if (meme == "spicy") {
            console.log("spicy meme");
            return message.channel.send("http://i0.kym-cdn.com/photos/images/original/001/227/573/20d.jpg");
        }else{
            console.log("no meme");
            return message.channel.send("I don't know that meme type yet");
        }
    }
}

module.exports = MemeCommand;
