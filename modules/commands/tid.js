module.exports.config = {
	name: "tid",	
  version: "1.0.0", 
	hasPermssion: 0,
	credits: "ZiaRein",
	description: "group id", 
	commandCategory: "box",
	usages: "tid",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage(` ` +event.threadID, event.threadID, event.messageID);
};