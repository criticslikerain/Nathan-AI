module.exports.config = {
  name: "fancytext",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nathaniel",
  usages: "[text]",
  description: "fancy text font",
  commandCategory: "Other",
    cooldowns: 2,
};
module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api-toxic-devil.herokuapp.com/api/fancy-text?text=${juswa}`);
var re = res.data.result;
return api.sendMessage(`${re}`, event.threadID, event.messageID)
  }