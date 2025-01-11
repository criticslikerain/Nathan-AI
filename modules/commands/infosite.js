//https://list.ly/api/v4/meta?url=
//var a = res.data.name;
//var b = res.data.description;
//var c = res.data.image;
﻿module.exports.config = {
  name: "siteinf",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "View site info",
  commandCategory: "info",
  usages: "[site]",
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
  var juswa = args.join(" ");
  if (!juswa) return api.sendMessage(`add url site`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://list.ly/api/v4/meta?url=${encodeURIComponent(juswa)}`).then(res =>
    {
      let a = res.data.name,
        b = res.data.description,
        d = res.data.url
      var c = res.data.image;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `Name: ${a}\n\nDescription: ${b}\n\nRelease Date: ${date}\n\nUrl: ${d}`,
          attachment: fs.createReadStream(__dirname + `/cache/juswa.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/juswa.png`), event.messageID);
      };
      request(encodeURI(c)).pipe(fs.createWriteStream(__dirname + `/cache/juswa.png`)).on("close", callback);
    })
  }
}