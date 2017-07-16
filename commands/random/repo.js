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
        message.channel.send("Repo Installation Instructions: https://docs.google.com/document/d/1sn1Zkgn-_fRUi6frMdqOPABcL1KDhtc9EG-aliOHRjY/edit?usp=sharing");
    }
}

module.exports = RepoCommand;
