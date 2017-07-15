const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    constructor(client) {
        super(client, {
            name: "roll",
            group: "random",
            memberName: "roll",
            description: "Rolls a die"
        });
    }

    async run(message, args){

        //get a number from 1 - 6
        var roll = Math.floor(Math.random() * 6) + 1;

        //send a message of the roll result
        message.channel.send("You rolled a " + roll);
    }
}

module.exports = DiceRollCommand;
