const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "cs",
        category: "cc",
        noalias: [''],
        description: "",
        usage: "",
        accessableby: "Mods"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete({ timeout: 100 })

let tig = args.join(' ') || " ";

        message.channel.send(`Hello ${tig},\nWe are unable to assist you if the issue is related to in-game purchase, refund, account login failure etc\n\nContact the in-game customer service or` + " pubgnewstate_support@krafton.com " + `for further assistance.`)
      } catch (e) {
          throw e;
      };
  }
};