module.exports.config = {
	name: "advice",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Cindy jimenez",
	description: "advice but tagalog",
	commandCategory: "game",
	usages: "advice",
	cooldowns: 0,
	dependencies: {"srod-v2": "","request": ""}
};

module.exports.run = async ({ event, api, args }) => {
  
  const request = global.nodemodule["request"];
  const srod = global.nodemodule["srod-v2"];
  const Data = (await srod.GetAdvice()).embed.description;
  
  return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=tl&dt=t&q=${Data}`), (err, response, body) => {
		if (err) return api.sendMessage("Error", event.threadID, event.messageID);
		var retrieve = JSON.parse(body);
		var text = '';
		retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
    api.sendMessage(text, event.threadID, event.messageID)
  });
}