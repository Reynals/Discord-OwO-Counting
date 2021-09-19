const { Client, Collection, MessageEmbed } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGE'] });
client.discord = require('./settings/config.json');
client.commands = new Collection();
clienr.createEmbed = new MessageEmbed().setColor(client.discord.colors);

const { Counting } = require('owo-counting');
client.counting = new Counting({
    cooldowns: {
        owo: 10000,
        hunt: 15000,
        battle: 15000,
    }
});
client.counting.db = new Map(); // custom database, but this optional (not permanents). you can make custom with others database (permanents) thats you know

for (file of ['commands','events']) {
    require(`./handlers/${file}`)(client);
}

client.counting.on('ready', () => console.log(`Counting is Ready! now ${client.counting.readyAt}`));

client.counting.on('counting', (count) => {
    client.db.set(count.type+'.'+count.user.id); // owo.0123456789
    console.log(`I see, that ${count.user.tag} has typing ${count.type} to ${(client.db.get(count.type+'.'+count.user.id) || 0)+ 1}x`);
});

client.login(process.env['TOKEN']); // bot login

process.on('unhandledRejection', (Error) => {
    console.error('[Unhandled: Promise Rejection]', Error);
});