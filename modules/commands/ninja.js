module.exports.config = {
	name: "ninja",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "change your nicknae to your ninja name",
  usages: "[Name]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${juswa}`);
var morse = res.data.result;
return api.changeNickname(`${morse}`, event.threadID, event.messageID)
}
