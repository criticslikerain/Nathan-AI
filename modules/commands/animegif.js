module.exports.config = {
  name: "gifanime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nathaniel",
  description: "random gif anime",
  commandCategory: "anime",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://saikiapi-production.up.railway.app/x/anime?apikey=saiki827').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
 // let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `🌸Number of photos available: 30 Photos`,
            attachment: fs.createReadStream(__dirname + `/cache/violet.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/violet.${ext}`), event.messageID);
    api.setMessageReaction("✅", event.messageID, (err) => {}, true);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/violet.${ext}`)).on("close", callback);
      })
    .catch(err => {
                     api.sendMessage("there's something problem while generating photo, please try again!", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}