module.exports.config = {
    name: "tile", //tỉ lệ hợp nhau
    version: "1.0.1",
    hasPermssion: 0,
    credits: "⚡️D-Jukie",
    description: "See the match ratio between 2 people",
    commandCategory: "Game",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Need to tag 1 friend you want to see the matching ratio", event.threadID);
    var name = (await Users.getData(mention)).name
    var namee = (await Users.getData(event.senderID)).name
    var tle = Math.floor(Math.random() * 101);

    var arraytag = [];
        arraytag.push({id: mention, tag: name});
        arraytag.push({id: event.senderID, tag: namee});
    var mentions = Object.keys(event.mentions)

        let Avatar = (await axios.get( `https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );        


       var imglove = [];
              
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
        var msg = {body: `⚡️The love ratio between ${namee} and ${name} is ${tle}% 🥰`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
      }