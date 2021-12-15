const { MessageEmbed } = require('discord.js');
const hugg = require('../../JSON/hug.json');

module.exports = {
    config: {
        name: "hug",
        category: "fun",
        noalias: [''],
        description: "Hug someone",
        usage: "[username | nickname | mention | ID]",
        accesableby: "everyone"
    },
    run: async (bot, message, args) => {

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
        
        let hugged = member || args[1];

        let hug = hugg.hugs[Math.floor((Math.random() * hugg.hugs.length))];

        if(!args[0]) {
            const sembed = new MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setColor("GREEN")
                .setDescription()
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
            message.channel.send("Are you single? Sorry this command is not for you.");
        }
        else if (args[0]) {
            const embed = new MessageEmbed()
                .setColor("#04f1c2")
                .setImage(`${hug}`)
            message.channel.send(`<@${message.member.id}> Hugged ${hugged}`,{
              embed: embed,
              }
              );
        }
    }
}