const commando = require('discord.js-commando');

class RepoCommand extends commando.Command{
    constructor(client) {
        super(client, {
            name: "repo",
            group: "random",
            memberName: "repo",
            description: "Repo helper"
        });
    }

    async run(message, args){

        //send a message of the repo
        message.channel.send("repo stuff here");
    }
}

module.exports = RepoCommand;
