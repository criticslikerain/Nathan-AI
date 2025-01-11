module.exports.config = {
	name: "google",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "web search",
  usages: `Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}google <text>\n\nExample:\n${global.config.PREFIX}google animepahe\n`,
	commandCategory: "google",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const google = require('googlethis');
let ZiaRein = args.join(" ");
  if (!ZiaRein) return api.sendMessage(`Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}google <text>\n\nExample:\n${global.config.PREFIX}google animepage`, event.threadID, event.messageID);
const ZiaReinn = await google.search(`${ZiaRein}`, {
  page: 0, 
  safe: false,
  parse_ads: false,
  additional_params: { 
    hl: 'en' 
  }
});
  console.log(ZiaReinn);
  var ZiaRein = ZiaReinn.results[0];
  var ZiaRein 2 = ZiaRein1.description;
  var ZiaRein3 = ZiaRein1.url;
  var ZiaRein4 = (`${ZiaRein2}\n\nsource:\n${ZiaRein3}`);
api.sendMessage(ZiaRein4, event.threadID, event.messageID);
  }