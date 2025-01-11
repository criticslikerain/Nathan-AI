module.exports.config = {
  name: "emotopng",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "Gaming Logo maker",
  commandCategory: "Utilities",
  usages: "[text]",
  cooldowns: 5
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var tip = args.join(" ");
  if (!tip) return api.sendMessage(`add text lmao`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://leyscoders-api.herokuapp.com/api/emoji-pngv2?emoji=${tip}&apikey=MIMINGANZ`).then(res =>
    {
      var url = res.data.result.facebook;
      let callback = function ()
      {
        api.sendMessage(
        {attachment: fs.createReadStream(__dirname + `/cache/banner.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/banner.png`), event.messageID);
      };
      request(encodeURI(url)).pipe(fs.createWriteStream(__dirname + `/cache/banner.png`)).on("close", callback);
    })
  }
}