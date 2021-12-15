const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "update",
        category: "cc",
        aliases: ['newupdate'],
        description: "",
        usage: "",
        accessableby: "Mods"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete()

let tig = args.join(' ') || " ";

        message.channel.send(`Hey ${tig},\nWe do not have a specific news, information and release date regarding upcoming updates. Please follow <#903582158684319774> to stay-up-to-date.`)
      } catch (e) {
          throw e;
      };
  }
};