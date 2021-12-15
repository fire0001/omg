const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "bt",
        category: "cc",
        aliases: ['bugtemp', 'bugtemplete'],
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
  .setTitle(`BUG REPORT FORMAT`)
  .setDescription(`\n<:NewState:910497804756078632> **Device** - [Example: Redmi 11t Ultra]\n<:NewState:910497804756078632> **OS and/or Version** - [Example : Miui 13.0.1 Stable]\n<:NewState:910497804756078632> **Game Version** - [Example: 1.0.0.187]\n<:NewState:910497804756078632> **Region & Server** - [Example: South Korea, Asia]\n\n**Describe the issue** [Example: I am facing some issue.\nBug video: youtube.com/watch/...]\n\nNote: Adding the video/screenshot will help developer team to solve the issue/bug faster.`)
        message.channel.send(`Hello ${tig} :wave:\nPlease use this format to report a bug.` , {
          embed: emb,
          })
      } catch (e) {
          throw e;
      };
  }
};