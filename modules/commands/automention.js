module.exports.config = {
	name: "automention",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "automent [mentioned]",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`@[${event.senderID}:0]`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: @[${Object.keys(event.mentions)[i]}:0]`, event.threadID);
		return;
	}
}