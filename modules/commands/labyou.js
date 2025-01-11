// imo lolo kopya //


/* 

kopyaha lang mga lods

*/

const fs = require("fs");

module.exports.config = {
	name: "labyou",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "nathan",
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "labyou",
	cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (
		event.body.indexOf("labyou") === 0 ||
		event.body.indexOf("lab u") === 0 ||
		event.body.indexOf("iloveyou") === 0 ||
		event.body.indexOf("i love you") === 0 ||
		event.body.indexOf("labu") === 0 ||
		event.body.indexOf("luv u") === 0 ||
		event.body.indexOf("luv") === 0
	) {
		var msg = {
			body: "Love kadin ng mama mo :)",
		};
		api.sendMessage(msg, threadID, messageID);
	} else if (event.body.indexOf("haha") === 0) {
		var msg = {
			body: "plastikag katawa nato uy",
		};
		api.sendMessage(msg, threadID, messageID);
	}
};

module.exports.run = function({ api, event, client, __GLOBAL }) {
	// Your code for the run function, if any
};
