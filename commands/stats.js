module.exports = {
        description: 'Check users count stats',
        aliases: ['count','c','s'],
        usage: '[user]',
        run(client, message){
                const data = {
                        owo: client.counting.db.get('owo.'+message.author.id) || 0,
                        hunt: client.counting.db.get('hunt.'+message.author.id) || 0,
                        battle: client.counting.db.get('battle.'+message.author.id) || 0,
                };
                
                const daily = {
                        owo: client.counting.db.get('daily.owo.'+message.author.id) || 0,
                        hunt: client.counting.db.get('daily.hunt.'+message.author.id) || 0,
                        battle: client.counting.db.get('daily.battle.'+message.author.id) || 0,
                };
                
                const embed = client.createEmbed()
                        .setTitle(`${message.author.username}'s OwO Stats`)
                        .setDescription(`Hi there! Don't Give Up, Keep tracks your OwO...`)
                        .addField('Daily Count', `owo: ${daily.owo}\nhunt: ${daily.hunt}\nbattle: ${daily.battle}`)
                        .addField('Total Count', `owo: ${data.owo}\nhunt: ${data.hunt}\nbattle: ${data.battle}`);
              
                message.channel.send({ embeds: [embed] });
        },
};