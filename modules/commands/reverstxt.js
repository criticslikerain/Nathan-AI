module.exports.config = {
	name: "reverse",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "reverse text",
  usages: "[text]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api-toxic-devil.herokuapp.com/api/reverse-text?text=${juswa}`);
var plaintext = res.data.result.reversedText;
return api.sendMessage(`${plaintext}`, event.threadID, event.messageID)
}