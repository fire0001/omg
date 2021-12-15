const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "invite",
        category: "cc",
        aliases: ['inv'],
        description: "Says your input via the bot",
        usage: "[text]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete({ timeout: 100 })

let tig = args.join(' ') || " ";

        message.channel.send(`Greetings ${tig}!\nYou can use this invite url to invite your friends.\n\n<:NewState:910497804756078632> - https://discord.gg/YdabAFB48g`)
      } catch (e) {
          throw e;
      };
  }
};