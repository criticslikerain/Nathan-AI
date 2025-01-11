module.exports.config = {
    name: "catsay",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Nathaniel",
    description: "",
    commandCategory: "edit-img",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	let text = args.toString().replace(/,/g,  '  ');
if (!text)
    return api.sendMessage("[Text]", event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/cat.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/cat.png"),event.messageID);
	 return request(encodeURI(`https://cataas.com/cat/cute/says/${text}`)).pipe(fs.createWriteStream(__dirname+'/cache/cat.png')).on('close',() => callback());     
}}
