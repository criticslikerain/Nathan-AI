
module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rein Zia",
  description: "guide",
  commandCategory: "Noprefix",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};

  var arr = ["pre","Prefix","prefix", "dấu lệnh", "prefix của bot là gì","PREFIX"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
		const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`bot prefix: ${global.config.PREFIX}\n\nplease use 【 ${global.config.PREFIX}𝗵𝗲𝗹𝗽 】 for commands category`)
      }
      else return out(`bot prefix: ${global.config.PREFIX}\n\nplease use 【 ${global.config.PREFIX}𝗵𝗲𝗹𝗽 】 for commands category`)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            give me your brain and put it in your head\ndo you know if it's the noprefix command?", event.threadID)
}
