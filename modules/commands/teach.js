module.exports.config = {
	name: "teach",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "teach simsimi",
  usages: "[hi => hello]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let text = args.join(" ");
  const text1 = text.substr(0, text.indexOf(' => ')); 
  const length = parseInt(text1.length)
  const text2 = text.split(" => ").pop()
  const length_2 = parseInt(text2.length)
const res = await axios.get(`https://api.phamvandien.xyz/sim?type=teach&ask=${text1}&ans=${text2}`);
var ask = res.data.data.ask;
var ans = res.data.data.ans;
return api.sendMessage(`Your ask: ${ask}\nSim respond: ${ans}`, event.threadID, event.messageID)
}