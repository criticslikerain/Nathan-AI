module.exports.config = {
	name: "search",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "web search",
  usages: `Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}search <text>\n\nExample:\n${global.config.PREFIX}search magnetic reversal\n`,
	commandCategory: "google",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const google = require('googlethis');
let ZiaRein = args.join(" ");
  if (!ZiaRein) return api.sendMessage(`Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}search <text>\n\nExample:\n${global.config.PREFIX}search magnetic reversal`, event.threadID, event.messageID);
const ZiaReinn = await google.search(`${ZiaRein}`, {
  page: 0, 
  safe: false,
  parse_ads: false,
  additional_params: { 
    hl: 'en' 
  }
});
  console.log(ZiaReinn);
  var ZiaRein1 = ZiaReinn.results[0];
  var ZiaRein2 = ZiaRein1.description;
api.sendMessage(ZiaRein2, event.threadID, event.messageID);
  }