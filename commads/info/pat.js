const { MessageEmbed } = require('discord.js');
const patt = require('../../JSON/pat.json');

module.exports = {
    config: {
        name: "pat",
        category: "fun",
        noalias: [''],
        description: "Hug someone",
        usage: "[username | nickname | mention | ID]",
        accesableby: "everyone"
    },
    run: async (bot, message, args) => {

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
        
        let patted = member || args[1];

        let pat = patt.pats[Math.floor((Math.random() * patt.pats.length))];

        if(!args[0]) {
            const sembed = new MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setColor("GREEN")
                .setDescription()
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
            message.channel.send("You do not want to pat someone? Lmao, See this single, ewk dont do this command again");
        }
        else if (args[0]) {
            const embed = new MessageEmbed()
                .setColor("#04f1c2")
                .setImage(`${pat}`)
            message.channel.send(`<@${message.member.id}> pats ${patted}`,{
              embed: embed,
              }
              );
        }
    }
}