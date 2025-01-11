  module.exports.config = {
  name: "count",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Nathaniel", 
  description: "count all", 
  commandCategory: "group", 
  usages: `Please enter some category\n\nHow to use?\n${global.config.PREFIX}count <category>\n\nCategory's available:\n\nmessage, admin, member, male, female, gei, allgroup, alluser, boxdata, boxleave\n`,
  cooldowns: 5,  
  envConfig: {
  }
};

module.exports.run = async function ({ api, Threads, Users, event, args, client, __GLOBAL }) {
  const { threadID, messageID, participantIDs } = event;
  var input = args.join();
  var nameMen = [];
  var gendernam = [];
  var gendernu = [];
  var nope = [];
  let threadInfo = await api.getThreadInfo(threadID);
  for (let z in threadInfo.userInfo) {
    var gioitinhone = threadInfo.userInfo[z].gender;
    if (gioitinhone == "MALE") {
      gendernam.push(gioitinhone)
    } else {
      if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else { nope.push(gioitinhone) }
    }
  }
  ///////////////////////
      var threadList = [];
      var inbox = await api.getThreadList(150, null, ['INBOX']);
      let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

      for (var groupInfo of list) {
          threadList.push({
              id: groupInfo
          });
      } 
  ///////////////////////

  ///////////////////////
      var listLeave = [];
      var inbox = await api.getThreadList(100, null, ['ARCHIVED']);

      for (var groupInfo of inbox) {
          listLeave.push({
              id: groupInfo
          });
      } 
  ///////////////////////

  var threadData = (await Threads.getData(threadID)).threadInfo;
  var out = (msg) => api.sendMessage(msg, threadID, messageID);
  var boxget = await Threads.getAll(['threadID']);
  var userget = await Users.getAll(['userID']);
  if (input == "") { out(`Please enter some category\n\nHow to use?\n${global.config.PREFIX}count <category>\n\nCategory's available:\n\nmessage, admin, member, male, female, gei, allgroup, alluser, boxdata, boxleave`) }
  if (input == "message") { out(`This Group Has ${threadInfo.messageCount} message`) }
  if (input == "admin") { out(`The Group You Have ${threadData.adminIDs.length} Administrator`) }
  if (input == "member") { out(`This Group Has ${participantIDs.length} Member`) }
  if (input == "male") { out(`This Group Has ${gendernam.length} Member Is Male`) }
  if (input == "female") { out(`This Group Has ${gendernu.length} Member Is Female`) }
  if (input == "gei") { out(`This Group Has ${nope.length} Member Is Gei`) }
  if (input == "allgroup") { out(`Total: ${threadList.length} Group Chat Using Bots`) }
  if (input == "alluser") { out(`Total: ${userget.length} Users Using Bots `) }
  if (input == "boxdata") { out(`Total Yes ${boxget.length} Group Chat[data] Use Bots`) }
  if (input == "boxleave") { out(`Total: ${listLeave.length} The Has Left`) }
  }