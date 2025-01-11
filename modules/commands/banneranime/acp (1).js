module.exports.config = {
  name: "acp",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "BLACK",
  description: "Kết bạn qua id Facebook",
  commandCategory: "admin",
  usages: "uid",
  cooldowns: 0
};  


module.exports.handleReply = async ({ handleReply, event, api }) => {
  const { author, listRequest } = handleReply;
  if (author != event.senderID) return;
  const args = event.body.replace(/ +/g, " ").toLowerCase().split(" ");
  
  const form = {
    av: api.getCurrentUserID(),
		fb_api_caller_class: "RelayModern",
		variables: {
      input: {
        source: "friends_tab",
        actor_id: api.getCurrentUserID(),
        client_mutation_id: Math.round(Math.random() * 19).toString()
      },
      scale: 3,
      refresh_num: 0
		}
  };
  
  const success = [];
  const failed = [];
  
  if (args[0] == "add") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestConfirmMutation";
    form.doc_id = "3147613905362928";
  }
  else if (args[0] == "del") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestDeleteMutation";
    form.doc_id = "4108254489275063";
  }
  else return api.sendMessage("𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐜𝐡𝐨̣𝐧 <𝐚𝐝𝐝 | 𝐝𝐞𝐥 > <𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ | 𝐡𝐨𝐚̣̆𝐜 \"𝐚𝐥𝐥\">", event.threadID, event.messageID);
  let targetIDs = args.slice(1);
  
  if (args[1] == "all") {
    targetIDs = [];
    const lengthList = listRequest.length;
    for (let i = 1; i <= lengthList; i++) targetIDs.push(i);
  }
  
  const newTargetIDs = [];
  const promiseFriends = [];
  
  for (const stt of targetIDs) {
    const u = listRequest[parseInt(stt) - 1];
    if (!u) {
      failed.push(`𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐢̀𝐦 𝐭𝐡𝐚̂́𝐲 𝐬𝐭𝐭 ${stt} 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡`);
      continue;
    }
    form.variables.input.friend_requester_id = u.node.id;
    form.variables = JSON.stringify(form.variables);
    newTargetIDs.push(u);
    promiseFriends.push(api.httpPost("https://www.facebook.com/api/graphql/", form));
		form.variables = JSON.parse(form.variables);
  }
  
  const lengthTarget = newTargetIDs.length;
  for (let i = 0; i < lengthTarget; i++) {
    try {
      const friendRequest = await promiseFriends[i];
      if (JSON.parse(friendRequest).errors) failed.push(newTargetIDs[i].node.name);
      else success.push(newTargetIDs[i].node.name);
    }
    catch(e) {
      failed.push(newTargetIDs[i].node.name);
    }
  }
  
  api.sendMessage(`» Đã ${args[0] == 'add' ? 'chấp nhận' : 'xóa'}𝐥𝐨̛̀𝐢 𝐦𝐨̛̀𝐢 𝐤𝐞̂́𝐭 𝐛𝐚̣𝐧 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐮̉𝐚 ${success.length} 𝐧𝐠𝐮̛𝐨̛̀𝐢:\n${success.join("\n")}${failed.length > 0 ? `\n» 𝐓𝐡𝐚̂́𝐭 𝐛𝐚̣𝐢 𝐯𝐨̛́𝐢 ${failed.length} 𝐧𝐠𝐮̛𝐨̛̀𝐢: ${failed.join("\n")}` : ""}`, event.threadID, event.messageID);
};


module.exports.run = async ({ event, api }) => {
  const moment = require("moment-timezone");
  const form = {
    av: api.getCurrentUserID(),
  	fb_api_req_friendly_name: "FriendingCometFriendRequestsRootQueryRelayPreloader",
  	fb_api_caller_class: "RelayModern",
  	doc_id: "4499164963466303",
  	variables: JSON.stringify({input: {scale: 3}})
  };
  const listRequest = JSON.parse(await api.httpPost("https://www.facebook.com/api/graphql/", form)).data.viewer.friending_possibilities.edges;
  let msg = "";
  let i = 0;
  for (const user of listRequest) {
    i++;
    msg += (`\n${i}. 𝐍𝐚𝐦𝐞: ${user.node.name}`
         + `\n𝐈𝐃: ${user.node.id}`
         + `\n𝐔𝐫𝐥: ${user.node.url.replace("www.facebook", "fb")}`
         + `\n𝐓𝐢𝐦𝐞: ${moment(user.time*1009).tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY HH:mm:ss")}\n`);
  }
  api.sendMessage(`${msg}\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐨̛́𝐢 𝐧𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: <𝐚𝐝𝐝 | 𝐝𝐞𝐥> <𝐬𝐨̂́ 𝐭𝐡𝐮̛́ 𝐭𝐮̛̣ | 𝐡𝐨𝐚̣̆𝐜 \"𝐚𝐥𝐥\"> đ𝐞̂̉ 𝐭𝐡𝐮̛̣𝐜 𝐡𝐢𝐞̣̂𝐧 𝐡𝐚̀𝐧𝐡 đ𝐨̣̂𝐧𝐠`, event.threadID, (e, info) => {
      global.client.handleReply.push({
        name: this. config. name,
        messageID: info.messageID,
        listRequest,
        author: event.senderID
      });
    }, event.messageID);
};