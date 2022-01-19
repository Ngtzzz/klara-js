require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client( {
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});

client.once('ready', () => {
    console.log('Klara đã dậy rồi thưa onii-chan!');
});

client.on('messageCreate', message => {
    if (message.content.startsWith('>')) {
        if (message.content.substring(1) === 'hello') {
            message.reply('Klara chào onii-chan ạ!');
        }
    }
});

client.login(process.env.TOKEN);

