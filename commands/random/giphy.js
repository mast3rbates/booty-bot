const commando = require('discord.js-commando');

class GiphyCommand extends commando.Command{
    constructor(client) {
        super(client, {
            name: "giphy",
            group: "random",
            memberName: "giphy",
            description: "Gets a giphy from users search terms.",
            args:[
                {
                    key: 'query',
                    prompt: 'What would you like me to search for you?',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, args){
        const { query } = args;

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

module.exports = GiphyCommand;
