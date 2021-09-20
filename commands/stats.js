const { MetaCommand } = require('owo-counting');

module.exports = new MetaCommand({
        
        description: 'Check users count stats',
        aliases: ['count','c','s'],
        usage: '[user]',
        permissions: {},
        run(client, message){
                const data = {
                        owo: client.counting.db.get('owo.'+message.author.id),
                        hunt: client.counting.db.get('hunt.'+message.author.id),
                        battle: client.counting.db.get('battle.'+message.author.id),
                };
                
                const embed = client.createEmbed()
                        .setTitle(`${message.author.username}'s OWO stats`)
                        .setDescription(`Hi there! here's my OwO count data...`)
                        .addField('Total Count', `owo: ${data.owo}\nhunt: ${data.hunt}\nbattle: ${data.battle}`);
              
                message.channel.send({ embeds: [embed] });
        },
        SlashCommand: {}
})