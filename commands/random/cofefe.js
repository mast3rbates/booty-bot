const commando = require('discord.js-commando');
const covfefeTranslate = require('covfefe');

class CovfefeCommand extends commando.Command{
    constructor(client) {
        super(client, {
            name: "covfefe",
            group: "random",
            memberName: "covfefe",
            description: "Translates phrases into covfefe.",
            args:[
                {
                    key: 'covfefe',
                    prompt: 'What would you like me to translate for you?',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, args){
        const { covfefe } = args;

        var translation = "";
        translation = covfefeTranslate.translate(covfefe);

        return message.channel.send(translation);
    }
}

module.exports = CovfefeCommand;
