const { readdirSync } = require('fs');

module.exports = function(client){
    const arrayEvent = readdirSync('./events');
    
    for (name of arrayEvent) {
        const events = require(`../events/${name}`);
        client.on(name.split('.')[0], events.bind(null, client));
    }
}
