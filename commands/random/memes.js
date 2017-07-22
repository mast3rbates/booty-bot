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

        var query = meme + "-meme"

        //using api key from elax102
        var giphy = require('giphy-api')('2374dd8e7330409bb6af85eb4b8514cf');

        //get a random giphy within the search query
        giphy.random({
            tag: query,
            fmt: 'json'
        }, function (err, res) {
            //send the image url
            return message.channel.send(res.data.url);
        });
    }
}

module.exports = MemeCommand;
