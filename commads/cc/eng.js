const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "eng",
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

        message.channel.send(`Please only use English here, ${tig}.\nFor other languages, head over to <#903748632312938506> channel and select your language to get access to the respective language channels!`)
      } catch (e) {
          throw e;
      };
  }
};