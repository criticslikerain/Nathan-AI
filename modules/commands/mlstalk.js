module.exports.config = {
	name: "mlstalk",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "morse code to text",
  usages: "[id | server]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let text = args.join(" ")
  const text1 = text.substr(0, text.indexOf(' | ')); 
  const length = parseInt(text1.length)
  const text2 = text.split(" | ").pop()
  const length_2 = parseInt(text2.length)
const res = await axios.get(`https://betabotz-api.herokuapp.com/api/stalk/ml?id=${text1}&server=${text2}&apikey=BetaBotz`);
var plaintext = res.data.result.userName;
return api.sendMessage(`${plaintext}`, event.threadID, event.messageID)
}