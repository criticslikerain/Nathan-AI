module.exports.config = {
	name: "github",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "stalk github",
	commandCategory: "info",
	depndencies: {"fetch": "","node-fetch": "", "moment": ""},
	usages: `Please add some github username\n\nHow to use?\n${global.config.PREFIX}github <username>\n\nExample:\n${global.config.PREFIX}github Anonymous\n`,
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
 if (!args[0]) return api.sendMessage(`Please add some github username\n\nHow to use?\n${global.config.PREFIX}github <username>\n\nExample:\n${global.config.PREFIX}github Anonymous`, event.threadID, event.messageID);
 const moment = require("moment");
 const fetch = require("node-fetch");
 const axios = global.nodemodule["axios"];
 const fs = global.nodemodule["fs-extra"];
 
  fetch(`https://api.github.com/users/${encodeURI(args.join(' '))}`)
    .then(res => res.json())
    .then(async body => {
      if(body.message) return api.sendMessage(`User not found please give me a valid username\n\nHow to use?\n${global.config.PREFIX}github <username>\n\nExample:\n${global.config.PREFIX}github anonymous`, event.threadID, event.messageID);
    let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;
    const info = 
      `𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲: ${login}\n𝗜𝗗: ${id}\nBio: ${bio || "No Bio"}\n𝗥𝗲𝗽𝗼: ${public_repos || "None"}\n𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀: ${followers}\n𝗙𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴: ${following}\n𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻: ${location || "No Location"}\n𝗔𝗰𝗰𝗼𝘂𝗻𝘁 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗮𝘁: ${moment.utc(created_at).format("dddd, MMMM, Do YYYY")}\n𝗔𝘃𝗮𝘁𝗮𝗿:`;
      
    let getimg = (await axios.get(`${avatar_url}`, { responseType: "arraybuffer" })).data;
     fs.writeFileSync(__dirname+"/cache/avatargithub.png", Buffer.from(getimg, "utf-8"));
        
       api.sendMessage({
        attachment: fs.createReadStream(__dirname+"/cache/avatargithub.png"),
        body: info}, event.threadID,() => fs.unlinkSync(__dirname+"/cache/avatargithub.png"), event.messageID);

    });
    
  };