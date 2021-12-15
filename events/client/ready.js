const { Discord, Client } = require('discord.js');
const bot = new Client()

const { PREFIX } = require('../../config');

module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
      bot.user.setActivity(
        {
          status: 'dnd',
        },
        {
          name: 'PUBG: NEW STATE',
          type: "STREAMING",
          url: "https://www.twitch.tv/pubgnewstate"
        }
      )
    
};

    // let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
    // var activities = [ `version 0.9.18.129`,`gstar.krafton.com` ], i = 0;
       // setInterval(() => bot.user.setActivity("PUBG NEW STATE",{
      // `${activities[i++ % activities.length]}`, 
      //  type: "STREAMING",   url:"https://www.youtube.com/watch?v=cz1bg-GQMvc"}
     // )
      //,3000
     // )