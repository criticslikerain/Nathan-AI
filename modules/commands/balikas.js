// imo lolo kopya //


/* 

kopyaha lang mga lods

*/

const fs = require("fs");
module.exports.config = {
	name: "balikas",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "nathan", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "balikas",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pisti")==0 || event.body.indexOf("piste ka")==0 || event.body.indexOf("yawa ka")==0 || event.body.indexOf("buang ka")==0 || event.body.indexOf("piste")==0 || event.body.indexOf("atay")==0 || event.body.indexOf("gago ka")==0 || event.body.indexOf("tang ina mo")==0 || event.body.indexOf("Buang")==0 || event.body.indexOf("buang")==0 || event.body.indexOf("Yawa ka")==0 || event.body.indexOf("Gago")==0 || event.body.indexOf("Yawa")==0 || event.body.indexOf("yawa")==0 || event.body.indexOf("giatay")==0 || event.body.indexOf("Giatay")==0 || event.body.indexOf("giatay ka")==0 || event.body.indexOf("Giatay ka")==0 || event.body.indexOf("pisti")==0 || event.body.indexOf("gilamonan")==0 || event.body.indexOf("animal")==0 || event.body.indexOf("lamon")==0 ) {
		var msg = {
				body: "Sig pamalikas, pilpilon konang Ba-ba nimo run!🤬",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }