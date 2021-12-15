const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "nokrafton",
        category: "cc",
        aliases: ['nk'],
        description: "",
        usage: "",
        accessableby: "Mods"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete()

let tig = args.join(' ') || " ";

        message.channel.send(`Hello ${tig}\nModeration Team here has no connection with KRAFTON, INC. nor DEVELOPERS .They can not give you any support or information related to the Company support. Please contact ask@krafton.com for perfect assistance.`)
      } catch (e) {
          throw e;
      };
  }
};