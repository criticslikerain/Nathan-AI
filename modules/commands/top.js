module.exports.config = {
  name: "top",
  version: "0.0.5",
  hasPermssion: 0,
  credits: "PetterSever",
  description: "Top Server!",
  commandCategory: "group",
  usages: "[thread/user/money/level]",
  cooldowns: 5
};

module.exports.run = async ({ event, api, args, Currencies, Users }) => {
    const { threadID, messageID } = event;


  ///////////////////////////////////////////
  //===== Check if there is a limit or not =====//
  if (args[1] && isNaN(args[1]) || parseInt(args[1]) <= 0) return api.sendMessage("list length information must be a number and not less than 0", event.threadID, event.messageID);
  var option = parseInt(args[1] || 10);
  var data, msg = "";

  ///////////////////////////////////////
  //===== Check the case =====//
  var fs = require("fs-extra");
  var request = require("request");  // Covernt exp to level
    function expToLevel(point) {
  if (point < 0) return 0;
  return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
    }
    //level 
    if (args[0] == "user") { 
    let all = await Currencies.getAll(['userID', 'exp']);
        all.sort((a, b) => b.exp - a.exp);
        let num = 0;
               let msg = {
          body: 'The 10 People Highest Level On Server!',
          
        }
        for (var i = 0; i < 10; i++) {
           
   
          let level = expToLevel(all[i].exp);
          var name = (await Users.getData(all[i].userID)).name;      
  
          num += 1;
          msg.body += '\n' + num + '. ' + name + ' - level ' + level;}
           console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
    }
  if (args[0] == "thread") {
    var threadList = [];
    
    //////////////////////////////////////////////
    //===== Get the entire group and message number =====//
    try {
          data = await api.getThreadList(option + 10, null, ["INBOX"]);
    }
    catch (e) {
      console.log(e);
    }

    for (const thread of data) {
      if (thread.isGroup == true) threadList.push({ threadName: thread.name, threadID: thread.threadID, messageCount: thread.messageCount });
    }
    
    /////////////////////////////////////////////////////
    //===== Sort from highest to lowest for each group =====//
    threadList.sort((a, b) => {
      if (a.messageCount > b.messageCount) return -1;
            if (a.messageCount < b.messageCount) return 1;
    })

    ///////////////////////////////////////////////////////////////
    //===== Start getting the push list into the return template =====//
    var i = 0;
    for(const dataThread of threadList) {
      if (i == option) break;
      msg += `${i+1}/ ${(dataThread.threadName)||"No name"}\nTID: [${dataThread.threadID}]\nNumber of message: ${dataThread.messageCount} message\n\n`;
      i+=1;
    }
    
    return api.sendMessage(`Top ${threadList.length} Groups Have The Most Number Of Message:\n_____________________________\n${msg}\n_____________________________`, threadID, messageID);
  }
  
 if (args[0] == "money") { 
    let all = await Currencies.getAll(['userID', 'money']);
        all.sort((a, b) => b.money - a.money);
        let num = 0;
               let msg = {
          body: 'The 10 People Richest On Server!',
          
        }
        for (var i = 0; i < 10; i++) {
        
   
          let level = all[i].money;
      
          var name = (await Users.getData(all[i].userID)).name;    
                    
          num += 1;
          msg.body += '\n' + num + '. ' + name + ': ' + level + "💵";}
                    console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
    }

}

