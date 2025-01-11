module.exports.config = {
	name: "steal",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ZiaRein",
	description: "thief",
	commandCategory: "economy",
	usages: "send message",
	cooldowns: 5
};

module.exports.run = async function({ api, event, Users, Currencies }) {
	var alluser = global.data.allUserID
    let victim = alluser[Math.floor(Math.random() * alluser.length)];
    let nameVictim = (await Users.getData(victim)).name
    if (victim == api.getCurrentUserID() && event.senderID == victim) return api.sendMessage('Sorry, you cannot steal from this person. Please try again.', event.threadID, event.messageID);
    var route = Math.floor(Math.random() * 2);
    if (route > 1 || route == 0) {
    const moneydb = (await Currencies.getData(victim)).money;
       var money = Math.floor(Math.random() * 1000) + 1;
        if (moneydb <= 0 || moneydb == undefined) return api.sendMessage(`You just stole ${nameVictim} is a poor person. So you have nothing`, event.threadID, event.messageID);
        else if (moneydb >= money) return api.sendMessage(`You just stole ${money}$ ${nameVictim} in this group`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+money))
            await Currencies.increaseMoney(event.senderID, parseInt(money))
        }, event.messageID);
        else if (moneydb < money) return api.sendMessage(`You just stole it all ${moneydb} balance of ${nameVictim} in this group`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+money))
            await Currencies.increaseMoney(event.senderID, parseInt(money))
        }, event.messageID);
    }
    else if (route == 1) {
        var name = (await Users.getData(event.senderID)).name
        var moneyuser = (await Currencies.getData(event.senderID)).money
            if (moneyuser <= 0) return api.sendMessage("You don't have money, WORK TO GET SOME MONEY..", event.threadID, event.messageID);
            else if (moneyuser > 0) return api.sendMessage(`You have been captured and lost ${moneyuser}$.`, event.threadID, () => api.sendMessage({ body: `Congratulations  ${nameVictim}! You caught ${name} and got ${Math.floor(moneyuser / 2)}$ as a reward!`, mentions: [{ tag: nameVictim, id: victim }, { tag: name, id: event.senderID }] }, event.threadID, async () => {
                await Currencies.increaseMoney(event.senderID, parseInt("-"+ moneyuser))
                await Currencies.increaseMoney(victim, parseInt(Math.floor(moneyuser / 2))) 
            }), event.messageID);
        
    }
          }