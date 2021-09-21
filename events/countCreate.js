module.exports = (client, count) => {
    const usercount = client.counting.db.get(count.type + '.' + count.user.id) || 0;
    const daily = client.counting.db.get('daily.'+count.type + '.' + count.user.id) || 0;
    client.counting.db.set(count.type + '.' + count.user.id, usercount + 1); // owo.0123456789
    client.counting.db.set('daily.'+count.type+'.'+count.user.id, daily + 1);
    console.log(`I see, that ${count.user.tag} has typing ${count.type} to ${usercount + 1}x`);
};