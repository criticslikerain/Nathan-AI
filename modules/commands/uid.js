module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "user facebookID",
	commandCategory: "system",
	cooldowns: 0
   };
   
   module.exports.run = async function({ api, event, args }) {
	   const axios = global.nodemodule['axios']; 
	   if(event.type == "message_reply") { 
	uid = event.messageReply.senderID
	return api.sendMessage(`${uid}`, event.threadID, event.messageID) }
	   if (!args[0]) {return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);}
	   else {
	if (args[0].indexOf(".com/")!==-1) {
	   const res_ID = await axios.get(`https://api.leanhtruong.net/uid.php?api_key=LEANHTRUONG=ENYP8ER5U1pBpfib0yxXdjjU3JhC2w2JTCFUH4mo3ojst9BnoYVtSmlhI4aexzxPVMuyRVXKIirBt2gQSBMnKm3yMoblevmGB9hd=APIKEY=PLANFREE&url=${args[0]}`);  
	   return api.sendMessage(`${res_ID.data.uid}`, event.threadID, event.messageID) }
	else {
	 for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
	 return;
	}
   }
   }
   