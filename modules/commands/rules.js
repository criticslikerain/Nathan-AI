module.exports.config = {
    name: "rules",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Nathaniel",
    description: "important notes",
    commandCategory: "random-img",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var ZiaRein3 = (`𝗕𝗢𝗧 𝗥𝗨𝗟𝗘𝗦\nplease read till the end\n\n『 • 』  𝗱𝗼𝗻'𝘁 resend the 𝗯𝗼𝘁 𝗺𝗲𝘀𝘀𝗮𝗴𝗲\n『 • 』  𝗱𝗼𝗻'𝘁 abuse like spamming a 𝗶𝗺𝗮𝗴𝗲 𝗿𝗲𝗾𝘂𝗲𝘀𝘁 you can request multiple but 𝗱𝗼𝗻'𝘁 spam it\n\nthe 𝗿𝘂𝗹𝗲𝘀 is very simple just 𝗱𝗼𝗻'𝘁 try to copy and resend the 𝗯𝗼𝘁 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 if you get 𝗯𝗮𝗻 by my 𝘀𝗲𝗿𝘃𝗲𝗿 i will 𝗻𝗼𝘁 going to 𝘂𝗻𝗯𝗮𝗻 𝘆𝗼𝘂\n\nif you have a problem you can 𝗰𝗼𝗻𝘁𝗮𝗰𝘁 𝘁𝗵𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿\nhttps://www.facebook.com/`);
   var ZiaRein = [
"https://i.imgur.com/huumLca.jpg",
"https://i.imgur.com/EcryTGh.jpg",
"https://i.imgur.com/tu12HrQ.jpg",
"https://i.imgur.com/Vx25FHG.jpg",
"https://i.imgur.com/NcbC8Pn.jpg",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
