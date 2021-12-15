const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "official",
        category: "cc",
        aliases: ['ofcl'],
        description: "",
        usage: "",
        accessableby: "Mods"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete()

let tig = args.join(' ') || " ";

        message.channel.send(`Hello ${tig},\nThis is a community-run discord server.`)
      } catch (e) {
          throw e;
      };
  }
};