const Discord = require('discord.js');

module.exports = {
    "name": "ping",
    "description": "Ping-pong!",

    execute(message, args, client) {

        message.channel.send("pong!");

    }

};