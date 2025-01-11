module.exports.config = {
  name: "covid",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nathaniel",
  description: "update for covid",
  commandCategory: "news",
  usages: `Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}covid <country>\n\nExample:\n${global.config.PREFIX}covid japan\n`,
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
  if (!tip) return api.sendMessage(`Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}covid <country>\n\nExample:\n${global.config.PREFIX}covid japan\n\n`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://disease.sh/v3/covid-19/countries/${encodeURIComponent(tip)}`).then(res =>
    {
      let nhiem = res.data.cases,
        chet = res.data.deaths,
        dieutri = res.data.recovered,
        danso = res.data.population,
        chauluc = res.data.continent,
        quocgia = res.data.country
      var flag = res.data.countryInfo.flag;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `𝗖𝗼𝘂𝗻𝘁𝗿𝘆: ${quocgia}\n\n𝗜𝗻𝗳𝗲𝗰𝘁𝗶𝗼𝗻: ${nhiem}\n𝗗𝗲𝗮𝘁𝗵: ${chet} \n𝗧𝗿𝗲𝗮𝘁𝗺𝗲𝗻𝘁: ${dieutri}\n𝗣𝗼𝗽𝘂𝗹𝗮𝘁𝗶𝗼𝗻: ${danso}\n𝗖𝗼𝗻𝘁𝗶𝗻𝗲𝗻𝘁: ${chauluc}`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(flag)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}