const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "dmp",
        category: "cc",
        aliases: ['dmpromotion','dmmessage', 'dmissue'],
        description: "",
        usage: "",
        accessableby: "Mods"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete({ timeout: 100 })

let tig = args.join(' ') || " ";

        message.channel.send(`Please consider blocking the user or reporting the content to Discord ${tig}, as we are unfortunately unable to assist with behavior outside of our Discord server.`)
      } catch (e) {
          throw e;
      };
  }
};