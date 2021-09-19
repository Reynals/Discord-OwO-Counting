module.exports = function(client){
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Tracks yours OwO!', { type: 'LISTENING' });
}