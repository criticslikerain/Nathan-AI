const tientrochoi = 1000
module.exports.config = {
  name: "csgo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nathaniel",//fix vài thứ by tdunguwu
  description: "random question about csgo",
  commandCategory: "Trò Chơi",
  usages: "",
  cooldowns: 0
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { senderID ,threadID, messageID } = event;
     
        let balance = (await Currencies.getData(senderID)).money;
    if (balance <= 5000) return api.sendMessage('F to pay respect',threadID,messageID);
     await Currencies.decreaseMoney(event.senderID, parseInt(tientrochoi));
     let res = (await	axios.get(encodeURI(`https://ginxkin-api.herokuapp.com/api/csgo_quiz/random`))).data;
      let pubg = (await axios.get(`${res.link}`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/csgo.png", Buffer.from(pubg, "utf-8"));
    var namePlayer_react = await Users.getData(event.senderID)
     return api.sendMessage({body:`🌸====[𝐂𝐒𝐆𝐎 𝐐𝐔𝐈𝐙]====🌸\n\n${res.body}\n\nF to pay respect (-${tientrochoi}$)`,attachment: fs.createReadStream(__dirname + `/cache/csgo.png`)}, event.threadID, async (err, info) => {
                    client.handleReply.push({
                        type: "random",
                        name: this.config.name,
                        senderID: event.senderID,
                        messageID:  info.messageID,
                        replyID: event.messageID, 
                        threadID: event.threadID,
                        answer_ :res.answer
                    },event.messageID);
        await new Promise(resolve => setTimeout(resolve, 120))
        })    
}  
module.exports.handleReply = async function({ api, event, args, handleReply, client, global, Threads, Users, Currencies }) {
    if (event.senderID == api.getCurrentUserID()) return;

    let { senderID, messageID, threadID } = event;
    let name = (await Users.getData(senderID)).name;
    var money = parseInt(Math.floor(Math.random() * 5000))
    switch (handleReply.type) {
        case "random": {
           
      if(event.body.toUpperCase() == handleReply.answer_) return api.sendMessage({body :`You're ${name} Money ${money}$ 😽`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID) + Currencies.increaseMoney(event.senderID, money));    
      else return api.sendMessage({body :`here  ${handleReply.answer_} enjoy 🍄`}, handleReply.threadID, () => api.unsendMessage(handleReply.messageID));    
      handleReply.splice(0, 1);
    }
    }
};
