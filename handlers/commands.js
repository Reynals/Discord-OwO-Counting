const { readdirSync } = require('fs');

module.exports = function(client){
    const arrayCommand = readdirSync('./commands');
    
    for (name of arrayCommand) {
        const commands = require(`../commands/${name}`);
        commands.name = name.split('.')[0];
        client.commands.set(name.split('.')[0],commands);
    }
}