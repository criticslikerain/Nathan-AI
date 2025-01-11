module.exports.config = {
	name: "reminder",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "Zia_Rein",
	description: "notification",
	commandCategory: "Countdown",
	usages: "[Time] [Text] ",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, Users }) {
  
	const time = args[0];
	const text = args.join(" ").replace(time, "");
	if (isNaN(time)) return api.sendMessage(`How to use?\n${global.config.PREFIX}reminder <time> <txt>\n\nExample:\n${global.config.PREFIX}reminder 60 assignment make a powerful backend using NodeJs\n\nTake note:\n59 is equal to second\n60 is equal to minute to make a minute remind please use long numbers\n\nExample for minutes:\n${global.config.PREFIX}reminder 99999 <txt>\n99999 is equal to 16 minutes`, event.threadID, event.messageID);
	const display = time > 59 ? `${time / 60} minute` : `${time} second`;
	api.sendMessage(`i will remind you later\n ${display}`, event.threadID, event.messageID);
	await new Promise(resolve => setTimeout(resolve, time * 1000));
	var value = await api.getThreadInfo(event.threadID);
	if (!(value.nicknames)[event.userID]) value = (await Users.getInfo(event.senderID)).name;
	else value = (value.nicknames)[event.senderID];
	return api.sendMessage({
	body: `${(text) ? value + ", \n\n𝗿𝗲𝗺𝗶𝗻𝗱𝗲𝗿:\n" + text : value + ", i think you asked me to remind you to do something, right?"}`,
		mentions: [{
			tag: value,
			id: event.senderID
		}]
	}, event.threadID, event.messageID);
}