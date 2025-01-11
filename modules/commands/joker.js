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
	if (event.body.indexOf("jk")==0 || event.body.indexOf("HAHAHAHA jk")==0 || event.body.indexOf("j.k")==0 || event.body.indexOf("joke")==0 || event.body.indexOf("juk")==0 || event.body.indexOf("jowk")==0 || event.body.indexOf("juked")==0) {
		var msg = {
				body: "nice joke🤡 joker!",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}

module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
