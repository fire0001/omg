const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "say",
        category: "fun",
        noalias: [''],
        description: "Says your input via the bot",
        usage: "[text]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => { 
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete()
        

        message.channel.send(args.join(" "))
      } catch (e) {
          throw e;
      };
  }
};
