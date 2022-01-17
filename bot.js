require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client( {
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});

client.once('ready', () => {
    console.log('Klara is waking');
});

client.on('messageCreate', message => {
    if (message.content.startsWith('>')) {
        if (message.content.substring(1) === 'hello') {
            message.reply('Xin chao');
        }
    }
});

client.login(process.env.TOKEN);

