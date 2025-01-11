module.exports.config = {
	name: "chords",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "search chords(english song only.)",
  usages: "[Title]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://st4rz.herokuapp.com/api/chord?q=${juswa}`);
var plaintext = res.data.result;
return api.sendMessage(`${plaintext}`, event.threadID, event.messageID)
}