const { MessageEmbed } = require("discord.js");
const { greenlight } = require("../../JSON/colours.json")

module.exports = {
    config: {
        name: "gver",
        category: "cc",
        noalias: [''],
        description: "Says your input via the bot",
        usage: "[text]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete({ timeout: 100 })

let tig = args.join(' ') || " ";

        message.channel.send(`Greetings ${tig}!\nWe provide community support only for the global version of PUBG:NEW STATE`)
      } catch (e) {
          throw e;
      };
  }
};