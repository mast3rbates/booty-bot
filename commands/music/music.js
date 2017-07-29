const commando = require('discord.js-commando');

class MusicCommand extends commando.Command{
    constructor(client) {
        super(client, {
            name: "music",
            group: "music",
            memberName: "music",
            description: "Play some music from url.",
            args:[
                {
                    key: 'music',
                    prompt: 'Please enter the url of your music.',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, args){
        const { music } = args;

        

    }
}

module.exports = MusicCommand;
