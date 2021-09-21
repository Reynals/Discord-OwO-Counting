const { Client, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
client.discord = require('./settings/config.json');
client.commands = new Collection();
client.createEmbed = () => new MessageEmbed().setColor(client.discord.colors);

const { Counting } = require('owo-counting');
client.counting = new Counting(client, {
    custom_prefix: 'w',
    messageReminder: true,
});
client.counting.db = new Map(); // custom database, but this optional (not permanents). you can make custom with others database (permanents) thats you know;

for (file of ['commands', 'events']) {
    require(`./handlers/${file}`)(client);
}

client.login(process.env['TOKEN']); // bot login

process.on('unhandledRejection', (Error) => {
    console.error('[Unhandled: Promise Rejection]', Error);
});