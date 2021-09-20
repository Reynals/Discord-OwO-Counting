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
                
                const embed = client.createEmbed()
                        .setTitle(`${message.author.username}'s OwO Stats`)
                        .setDescription(`Hi there! here's my OwO count data...`)
                        .addField('Total Count', `owo: ${data.owo}\nhunt: ${data.hunt}\nbattle: ${data.battle}`);
              
                message.channel.send({ embeds: [embed] });
        },
};