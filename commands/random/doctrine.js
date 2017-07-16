
const commando = require('discord.js-commando');

class RepoCommand extends commando.Command{
    constructor(client) {
        super(client, {
            name: "doctrine",
            group: "random",
            memberName: "doctrine",
            description: "Doctrine helper"
        });
    }

    async run(message, args){

        //send a message of the repo
        message.channel.send("Arma Doctrine: https://docs.google.com/document/d/1qN4IT0PFERkmqT7tE1yd027WrBFdCXpWIdMRN2r4B9E/edit");
    }
}

module.exports = DoctrineCommand;
