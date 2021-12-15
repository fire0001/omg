const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "pin",
        category: "cs",
        noalias: [''],
        description: "Custom Commands",
        usage: "Tag Users",
        accessableby: "MOderators"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete()

let tig = args.join(' ') || "Survivors";

        message.channel.send(`Please refer to this channel's pinned messages for further information, ${tig} .\n\n▪︎ PC: Click on the pin icon located in the top-right of the channel.︎\n▪︎ Mobile: Click on the channel name and select Pins located at the top.`)
      } catch (e) {
          throw e;
      };
  }
};