const Discord = require("discord.js");
const MessageEmbed = require("discord.js");

module.exports = {
config: {
name: 'register',
category: "moderation",
aliases: ['r','regi'],
usage: "",
accessableby: "everyone",
description: 'Register Squad in Tournament'},
run: async (bot, message, args) => {

let EmbedChannel = message.guild.channels.cache.get('779825868927139921');


  const cmd = args.join(' ').split(' | ') 

  let emb = new Discord.MessageEmbed()
  .setTitle(`Warrior eSports Presents - **T3 Scrims**`)
  .setColor('GREEN')
  .setDescription(`\n**Team Name** - ` + cmd[0] + `\n\n**Country - **` + cmd[1] + `\n\n**PLAYER DETAILS**`)
  .addField(`\n\nPlayer 1 `,`\nIGN - ${cmd[2]} \nIGC - ${cmd[3]}`,false)
  .addField(`\n\nPlayer 2 `,`\nIGN - ${cmd[4]} \nIGC - ${cmd[5]}`,false)
  .addField(`\n\nPlayer 3 `,`\nIGN - ${cmd[6]} \nIGC - ${cmd[7]}`,false)
  .addField(`\n\nPlayer 4 `,`\nIGN - ${cmd[8]} \nIGC - ${cmd[9]}`,false)
  .addField(`\n\nSubstitue `,`\nIGN - ${cmd[10] || "No Substitue"} \nIGC - ${cmd[11] || "No substitue"}`,false)
  .setFooter(`Submitted By ` +message.author )
  .setTimestamp();
if (EmbedChannel) {
return EmbedChannel.send (emb);} 


  message.delete(); 
} 
}