const {
	Discord,
	client,
	Client,
	MessageAttachment,
	Collection,
	MessageEmbed
} = require('discord.js');
const { PREFIX, TOKEN, DBL_API_KEY } = require('./config');
const bot = new Client();
const DBL = require('dblapi.js');
const fs = require('fs');
const db = require('quick.db');
const jimp = require('jimp');
const KeepAlive = require('./server');

bot.phone = new Collection();
bot.commands = new Collection();
bot.aliases = new Collection();

['aliases', 'commands'].forEach(x => (bot[x] = new Collection()));
['console', 'command', 'event'].forEach(x => require(`./handler/${x}`)(bot));

bot.categories = fs.readdirSync('./commands/');

['command'].forEach(handler => {
	require(`./handler/${handler}`)(bot);
});

bot.on('message', async message => {
	try {
		const hasText = Boolean(message.content);
		const hasImage = message.attachments.size !== 0;
		const hasEmbed = message.embeds.length !== 0;
		if (message.author.bot || (!hasText && !hasImage && !hasEmbed)) return;
		const origin = bot.phone.find(
			call => call.origin.id === message.channel.id
		);
		const recipient = bot.phone.find(
			call => call.recipient.id === message.channel.id
		);
		if (!origin && !recipient) return;
		const call = origin || recipient;
		if (!call.active) return;
		await call.send(
			origin ? call.recipient : call.origin,
			message,
			hasText,
			hasImage,
			hasEmbed
		);
	} catch {
		return;
	}
});

bot.on(`message`, async message => {
	try {
		if (message.channel.type === 'dm') {
			var argsdm = message.content.split(' ').slice(0);
			var argsdm = argsdm.slice(0).join(' ');
			var BOT_ID = client.user.id;
			var userID = message.author.id;
			if (message.content.startsWith(PREFIX))
				return message.channel.send(
					':x: Please use commands in real server! :x:'
				);
			if (message.author.bot) return;
			message.channel
				.send('This message has been send to the staff! :incoming_envelope:')
				.then(msg => msg.delete({ timeout: 3000 }));
			if (message.content.startsWith(PREFIX)) return;
			if (argsdm.length > 1024)
				return message.reply(
					'Your message contents too many characters (1024 Limit) :/'
				);
			var DMembed = new MessageEmbed()
				.setColor('#0167DD')
				.setAuthor(
					'New Message',
					'https://cdn.discordapp.com/attachments/502649544622735362/520740243133956138/receive.png'
				)
				// .setDescription("**" + argsdm + "**")
				.addField(`Sent by: ${message.author.tag}`, '**' + argsdm + '**')
				// .setTitle("*Message**:")
				// .setURL(message.author.avatarURL())
				.setFooter(
					'This Message Was Sent By: ' + message.author.username + ' ',
					message.author.displayAvatarURL()
				)
				.setTimestamp();
			client.guilds.cache
				.get('903580364348461106')
				.channels.cache.get('909794953750773770')
				.send(DMembed)
				.catch(
					console.log(
						`Message recieved from ${userID}!(${message.author.username})`
					)
				);
			client.guilds.cache
				.get('903580364348461106')
				.channels.cache.get('909794953750773770')
				.send({
					embed: {
						description: `${PREFIX}reply ${message.author.id} <message>`
					}
				});
		} else if (message.content.startsWith(PREFIX + 'reply')) {
			if (
				message.author.id !== '850486435564093471' //&&
				// message.author.id !== customconfig.modID1 &&
				// message.author.id !== customconfig.modID2 &&
				// message.author.id !== customconfig.modID3 &&
				// message.author.id !== customconfig.modID4 &&
				// message.author.id !== customconfig.modID5
			)
				return message.reply('You cannot use that!');
			var argsdm = message.content.split(' ').slice(0);
			var Rargsdm = message.content
				.split(' ')
				.slice(2)
				.join(' ');
			var userID = argsdm[1];
			if (isNaN(argsdm[1]))
				return message.reply(
					"This is not an ID! Make sure to you the user's ID!"
				);

			/* var replyembed = new Discord.MessageEmbed()
            .setColor('#00ff26')
            .setAuthor("New Message", "https://cdn.discordapp.com/attachments/502649544622735362/520740243133956138/receive.png")
            .setDescription(Rargsdm)
            .setTitle("**Message**:")
            .setFooter("This Message Was Sent By: " + message.author.username + " ", message.author.displayAvatarURL())
        */

			client.users.cache
				.get(userID)
				.send(Rargsdm)
				.catch(console.log(`Message was sent to ${userID}!`));
			if (message.author.bot) return;
			message.channel
				.send('Your Message was Sent!')
				.then(msg => msg.delete({ timeout: 3000 }))
				.catch(console.error);
		}
	} catch (e) {}
});

bot.on('guildMemberAdd', async member => {
	let wChan = db.fetch(`welcome_${member.guild.id}`);

	if (wChan == null) return;

	if (!wChan) return;

	let font64 = await jimp.loadFont(jimp.FONT_SANS_64_WHITE);
	let bfont64 = await jimp.loadFont(jimp.FONT_SANS_64_BLACK);
	let mask = await jimp.read('https://i.imgur.com/552kzaW.png');
	let welcome = await jimp.read(
		'https://media.discordapp.net/attachments/904732399890464809/904732988963684382/newstate-hunters-background.jpg'
	);

	jimp.read(member.user.displayAvatarURL({ format: 'png' })).then(avatar => {
		avatar.resize(200, 200);
		mask.resize(200, 200);
		avatar.mask(mask);
		welcome.resize(1000, 300);

		welcome.print(font64, 265, 55, `Welcome ${member.user.username}`);
		welcome.print(bfont64, 265, 125, `To ${member.guild.name}`);
		welcome.print(
			font64,
			265,
			195,
			`There are now ${member.guild.memberCount} users`
		);
		welcome.composite(avatar, 40, 55).write('Welcome2.png');
		try {
			member.guild.channels.cache
				.get(wChan)
				.send(``, { files: ['Welcome2.png'] });
		} catch (e) {}
	});
	//  var r = member.guild.roles.cache.find(r => r.name === '');
	// if (!r) return;
	// member.roles.add(r)
});

bot.on('guildMemberAdd', async member => {
	member.send(
		'📣 Greetings ' +
			member.user.tag +
			'\nWelcome to PUBG: NEW STATE Discord Server. We can not wait to talk to you.'
	);
});

bot.on('guildMemberAdd', async member => {
	const wellogchannel = bot.guild.channels.get('903580364998602805');

	message.wellogchannel.send(
		':green_circle: <@' + member.user.id + '> - ' + message.guid.memberCount
	);
});

KeepAlive();

bot.login(TOKEN);
