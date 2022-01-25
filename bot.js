require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Klara đã dậy rồi thưa onii-chan!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) {
        return;
    }

	const { commandName } = interaction;

	if (commandName === 'hello') {
		await interaction.reply('Em chào onii-chan uwu!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.login(process.env.TOKEN);

