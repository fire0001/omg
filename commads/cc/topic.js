const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "topic",
        category: "cc",
        aliases: ['offtopic'],
        description: "",
        usage: "",
        accessableby: "Mods"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete()

let tig = args.join(' ') || " ";

        message.channel.send(`Please avoid of going off-topic here, You can have offtopic convestion in <#903580364562386972> .`)
      } catch (e) {
          throw e;
      };
  }
};