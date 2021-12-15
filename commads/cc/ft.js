const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "ft",
        category: "cc",
        aliases: ['feedbacktemp'],
        description: "",
        usage: "",
        accessableby: "Mods"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete()

let tig = args.join(' ') || " ";
  let emb = new MessageEmbed()
  .setColor("#04f1c2")
  .setTitle(`FEEDBACK FORMAT`)
  .setDescription(`\n:black_square_button: IGN - [Example: codePUBGNS]\n:black_square_button: Region & Server - [Example: Japan, Asia]\n\n**Your valuable feedback**`)

        message.channel.send(`Hello ${tig}\nPlease use this format to give developers a suggestion.`,
        {
          embed: emb,
        }
        )
      } catch (e) {
          throw e;
      };
  }
};