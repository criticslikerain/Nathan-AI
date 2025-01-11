  
module.exports.config = {
  name: "morse",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Encrypt your text to become Morse code",
  commandCategory: "other",
  usages: "morse [encode or decode] [Text ASCII to encrypt]",
  cooldowns: 5,
  dependencies: {
    "morse-decoder": ""
  }
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  const morsify = global.nodemodule['morse-decoder'];
  var content = args.join(" ");
  if (event.type == "message_reply")(content.indexOf('en') == 0) ? api.sendMessage(morsify.encode(event.messageReply.body), event.threadID, event.messageID) : (content.indexOf('de') == 0) ? api.sendMessage(morsify.decode(event.messageReply.body), event.threadID, event.messageID) : api.sendMessage(`Wrong syntax, please find out more at ${prefix}help ${'morse'}`, event.threadID, event.messageID);
  else(content.indexOf('en') == 0) ? api.sendMessage(morsify.encode(content.slice(3, content.length)), event.threadID, event.messageID) : (content.indexOf('de') == 0) ? api.sendMessage(morsify.decode(content.slice(3, content.length)), event.threadID, event.messageID) : api.sendMessage(`Wrong syntax, please find out more at ${prefix}help ${'morse'}`, event.threadID, event.messageID);
}