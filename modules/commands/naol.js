const fs = require("fs");
module.exports.config = {
	name: "naol",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Nathaniel", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "naol",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("naol")==0 || event.body.indexOf("Naol")==0 || event.body.indexOf("sanaol")==0 || event.body.indexOf("Sanaol")==0 || event.body.indexOf("san aol")==0 || event.body.indexOf("Sana ol")==0 || event.body.indexOf("sana all")==0 || event.body.indexOf("Sana all")==0 || event.body.indexOf("sanaall")==0 || event.body.indexOf("Sanaall")==0 || event.body.indexOf("sabaok")==0 || event.body.indexOf("Sabaok")==0) {
		var msg = {
				body: "(2)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }