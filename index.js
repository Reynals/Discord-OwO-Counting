const { Client, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
client.discord = require('./settings/config.json');
client.commands = new Collection();
client.createEmbed = () => new MessageEmbed().setColor(client.discord.colors);

const { Counting } = require('owo-counting');
client.counting = new Counting({
    cooldowns: {
        owo: 10000,
        hunt: 15000,
        battle: 15000,
    }
});
client.counting.db = new Map(); // custom database, but this optional (not permanents). you can make custom with others database (permanents) thats you know
client.counting.on('ready', () => console.log(`Counting is Ready! now ${client.counting.readyAt}`));

client.counting.on('countCreate', (count, i = 0) => {
    client.counting.db.set(count.type+'.'+count.user.id, i++); // owo.0123456789
    console.log(`I see, that ${count.user.tag} has typing ${count.type} to ${(client.counting.db.get(count.type+'.'+count.user.id) || 0)+ 1}x`);
});

for (file of ['commands','events']) {
    require(`./handlers/${file}`)(client);
}

client.login(process.env['TOKEN']); // bot login

process.on('unhandledRejection', (Error) => {
    console.error('[Unhandled: Promise Rejection]', Error);
});