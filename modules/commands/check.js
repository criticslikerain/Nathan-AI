module.exports.config = {
    name: "check",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Nathaniel",
    description: "check rank",
    commandCategory: "rank",
    usages: `number of messages\n\nHow to use?\n${global.config.PREFIX}check <all or blank>\n\nExample:\n${global.config.PREFIX}check all\n${global.config.PREFIX}check <send msg>\n`,
    cooldowns: 5
};
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const pathA = require('path');
    const path = pathA.join(__dirname, 'cache', 'checktt.json');
  const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    if (!existsSync(path)) {
        const obj = []
        writeFileSync(path, JSON.stringify(obj, null, 4));
    }
}
module.exports.handleEvent = async({ event, Users }) => {
    const { threadID, senderID, body } = event;
    const fs = require("fs");
    const pathA = require('path');
    const thread = require('./cache/checktt.json');
    const path = pathA.join(__dirname, 'cache', 'checktt.json');
    if(event.isGroup == false) return;
    if (thread.some(i => i.threadID == threadID) == false) {
        const data = [];
        for (let user of event.participantIDs) {
            var name = (await Users.getData(user)).name;
            var id = user;
            var exp = 0;
            if(name !== undefined && name != 'Facebook user') {
                data.push({ name, id , exp })
            }
        }
        thread.push({ threadID, data: data });
        fs.writeFileSync(path, JSON.stringify(thread, null, 2));
    }
    else {
        var threadData = thread.find(i => i.threadID == threadID && i.threadID !== undefined)
        if (threadData.data.some(i => i.id == senderID) == false) {
            var name = (await Users.getData(senderID)).name;
            var id = senderID;
            var exp = 0;
            threadData.data.push({ name, id, exp });
            fs.writeFileSync(path, JSON.stringify(thread, null, 2));
        }
        else {
            var userData = threadData.data.find(i => i.id == senderID);
            userData.exp = userData.exp + 1;
            fs.writeFileSync(path, JSON.stringify(thread, null, 2));
        }
    }
}
module.exports.run = async function ({ args, api, event }) {
  const t = Date.parse("February 1, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
  const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    const { threadID, senderID, messageID, type, mentions } = event;
    var mention = Object.keys(mentions);
    const thread = require('./cache/checktt.json');
    const data = thread.find(i => i.threadID == threadID)
    if (args[0] == "all") {
        var msg = "", exp = [], i = 1, count = 0
        for(const user of data.data) {
            exp.push({ name: user.name, exp: user.exp, id: user.id });
        }
        exp.sort(function (a, b) { return b.exp - a.exp });
        var limit = args[2] || 20;
        var page = 1;
            page = parseInt(args[1]) || 1;
            page < -1 ? page = 1 : "";
            var msg = "Ranking list:\n\n";
            var numPage = Math.ceil(exp.length/limit);
            for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
                if(i >= exp.length) break;
                let dataInfo = exp[i];
                msg += `${i+1}: ${dataInfo.name}: ${dataInfo.exp} messages\n`
            }       
            msg += `\nPage: ${page}/${numPage}`
            return api.sendMessage(msg, threadID, messageID);
    }
    else 
        if(type == "message_reply") { mention[0] = event.messageReply.senderID }
        if (mention[0]) {
            var exp = [], count = 0
            for(const user of data.data) {
                count += user.exp
                exp.push({ name: user.name, exp: user.exp, id: user.id });
            }
            exp.sort(function (a, b) { return b.exp - a.exp });
            const rank = exp.findIndex(i => i.id == mention[0]);
          const ZiaRein1 = (`Name: ${exp[rank].name}\nRank: ${rank + 1}\nNumber of messages: ${exp[rank].exp}\nInteraction rate: ${(exp[rank].exp/count*100).toFixed(0)}%`);
          var link = [
"https://i.imgur.com/H8Hzv9Q.jpg",
"https://i.imgur.com/GFq107h.jpg",
"https://i.imgur.com/C5HUDm3.jpg",
"https://i.imgur.com/2gVIhe4.jpg",
"https://i.imgur.com/ifDgTOV.jpg",
"https://i.imgur.com/dpvjG2x.jpg",
      ];
          var callback = () => api.sendMessage({ body: ZiaRein1, attachment: fs.createReadStream(__dirname + "/cache/ZiaReinC.jpg")}, threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaReinC.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaReinC.jpg")).on("close", () => callback());
        }
    else {
        var exp = [], count = 0
        for(const user of data.data) {
            count += user.exp
            exp.push({ name: user.name, exp: user.exp, id: user.id });
        }
        exp.sort(function (a, b) { return b.exp - a.exp });
        const rank = exp.findIndex(i => i.id == senderID);
      const ZiaRein2 = (`Name: ${exp[rank].name}\nRank: ${rank + 1}\nNumber of messages: ${exp[rank].exp}\nInteraction rate: ${(exp[rank].exp/count*100).toFixed(0)}%`);
      var link = [   "https://i.imgur.com/H8Hzv9Q.jpg",
"https://i.imgur.com/GFq107h.jpg",
"https://i.imgur.com/C5HUDm3.jpg",
"https://i.imgur.com/2gVIhe4.jpg",
"https://i.imgur.com/ifDgTOV.jpg",
"https://i.imgur.com/dpvjG2x.jpg",
      ];
      var callback = () => api.sendMessage({ body: ZiaRein2, attachment: fs.createReadStream(__dirname + "/cache/ZiaReinC.jpg")}, threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaReinC.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaReinC.jpg")).on("close", () => callback());
    }
        }