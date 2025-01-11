module.exports.config = {
    name: "sendmsgv2",
    version: "0.0.2",
    hasPermssion: 2,
    credits: "Nathaniel",
    description: "send message to the threads/users using ID",
    commandCategory: "Admin",
    usages: "sendmsgv2 [user/thread] [id] [msg]",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, utils }) {
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Manila").format("HH:mm:ss D/MM/YYYY");
    var msg = args.splice(2).join(" ");
  let userID = event.senderID;
  api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); 
   var mess = {
       body: `Message: ` + msg + "\n\nFrom: " + firstname,
       mentions: [{
                           tag: firstname,
                           id: userID,
                           fromIndex: 0,
                 }], 
}
   // try{
    if (args[0]=='user') {
        return api.sendMessage(mess, args[1]).then(
            api.sendMessage('Message sent to member ' + args[1] + ' success', event.threadID, event.messageID));
    } else {
            if (args[0]=='thread') { return api.sendMessage(mess, args[1]).then(
            api.sendMessage('Sent a message to the group ' + args[1] + ' success', event.threadID, event.messageID))
            }
              else return api.sendMessage("⚠️Error! Please check your command!", event.threadID, event.messageID);
        }
  })
}