module.exports = function(client, message){
    if (message.author.bot) return;
    
    client.counting.create(message, {
        reminder: {
            owo:true,
            hunt:true,
            battle:true
        }
    }); // creating counting owo!
    
    const prfMention = new RegExp(`^<@!?${client.user.id}> `);
    const contentRaw = message.content.toLowerCase();
    client.discord.prefix = contentRaw.match(prfMention) ?
        contentRaw.match(prfMention)[0] :
        client.discord.prefix;
    const prefix = client.discord.prefix.toLowerCase();
    
    if (contentRaw.indexOf(prefix) !== 0) return;
    
    client.args = message.content.slice(prefix.length).trim().split(/ +/g);
    
    const commandx = client.args.shift().toLowerCase();
    const commands = client.commands.get(commandx) || client.commands.find((x) => x.aliases && x.aliases.includes(commandx));
   
    if (commands) {
        commands.run(client, message);
    } else {
        return message.reply('❌ Cannot execute that commands! :<').then(m=>setTimeout(()=>m.delete(),5000));
    }
}