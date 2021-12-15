const { MessageEmbed } = require('discord.js');
const slapp = require('../../JSON/slap.json');

module.exports = {
    config: {
        name: "slap",
        category: "fun",
        noalias: [''],
        description: "Slap Someone",
        usage: "[username | nickname | mention | ID]",
        accesableby: "everyone"
    },
    run: async (bot, message, args) => {

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
        
        let slapped = member || args[1];

        let slap = slapp.slaps[Math.floor((Math.random() * slapp.slaps.length))];

        if(!args[0]) {
            const sembed = new MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setColor("GREEN")
                .setDescription()
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
            message.channel.send("Uh ? Are you so dumb? You really want to slap yourself?");
        }
        else if (args[0]) {
            const embed = new MessageEmbed()
                .setColor("#04f1c2")
                .setImage(`${slap}`)
            message.channel.send(`<@${message.member.id}> slaps ${slapped}`,{
              embed: embed,
              }
              );
        }
    }
}