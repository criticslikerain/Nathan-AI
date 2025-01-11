module.exports.config = {
	name: "baucuaca",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "Games",
	commandCategory: "games",
	usages: "baucuaca 500",
	cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Currencies }) {
            let { threadID, messageID, senderID } = event;
            const slotItems = ["Vote","Crab","Fish"];
			let money = (await Currencies.getData(event.senderID)).money;
			var coin = args.join(" ");
			if (!coin) return api.sendMessage(`You have not entered the bet amount!`, threadID, messageID);
			let win = false;
			if (isNaN(coin)|| coin.indexOf("-") !== -1) return api.sendMessage(`Your bet amount is not a number, please review usage at ${prefix}help baucuaca`, threadID, messageID);
			if (!coin) return api.sendMessage("The bet amount has not been entered!", threadID, messageID);
			if (coin > money) return api.sendMessage(`Your amount is not enough`, threadID, messageID);
			if (coin < 50) return api.sendMessage(`Your bet is too small, the minimum is 50$!`, threadID, messageID);
			let number = [];
			for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
			if (number[0] == number[1] && number[1] == number[2]) {
				money *= 9;
				win = true;
			}
				else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
					money *= 2;
					win = true;
				}
				(win) ? api.sendMessage(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\nYou have won\nReceive ${coin} dollar.`, threadID, () => Currencies.increaseMoney(senderID, parseInt(coin)), messageID) : api.sendMessage(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\nYou have loss\nThe amount you bet belongs to the house`, threadID, () => Currencies.decreaseMoney(senderID, parseInt(coin)), messageID);
}
