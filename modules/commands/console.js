module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "Nathaniel",
    description: "",
    commandCategory: "System",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var time= moment.tz("Asia/Manila").format("LLLL");   
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Name does not exist";
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"Photos, videos or special characters";
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
  var random3 = job[Math.floor(Math.random() * job.length)]
    console.log(chalk.hex("#" + random)(`Group name: ${nameBox}`) + " | " + chalk.hex("#" + random1)(`User name: ${nameUser}`) + " | " + chalk.hex("#" + random2)(`Content: ${msg}`) + `\n` + chalk.hex("#" + random3)(`[ ${time} ]`) + `\n` + chalk.white(`◆━━━━━━━◆━━━━━━━◆CaNDY◆━━━━━━◆━━━━━━◆`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
}