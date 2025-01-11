module.exports.config = {
    name: "dhbcv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DVB",
    description: "Chasing catchphrases on your own messenger!!!",
    commandCategory: "Entertainment",
    usages: "",
    cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies}) {
    const axios = global.nodemodule['axios'];
    switch (handleReply.type) {
    case "reply": {
        let { author,  wordcomplete, messageID} = handleReply;
        function formatText(text) {
            return text.normalize("NFD")
                .toLowerCase()
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/đ/g, "d")
                .replace(/Đ/g, "D");
        }(formatText(event.body) == formatText(wordcomplete)) ? api.sendMessage("Congratulations for the correct answer", event.threadID, event.messageID): api.sendMessage(`Wrong, the correct answer is: ${wordcomplete}`, event.threadID, event.messageID),
            api.unsendMessage(handleReply.messageID);
    }
  }
};

module.exports.run = async function ({ api, event, Users }) {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID } = event;
const res = (await axios.get("https://goatbot.tk/api/duoihinhbatchu")).data;
console.log(res);
const dataGame = res.data
let question = (await axios.get(`${dataGame.image1}`, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/cache/dhbc1.png`, Buffer.from(question, "utf-8") );
let answer = (await axios.get(`${dataGame.image2}`, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/cache/dhbc2.png`, Buffer.from(answer, "utf-8") );      
var img_qs = [];
        img_qs.push(fs.createReadStream(__dirname + `/cache/dhbc1.png`));      
        img_qs.push(fs.createReadStream(__dirname + `/cache/dhbc2.png`));
        var msg = {body: `Please reply to this message with the answer!\nSuggestions: ${dataGame.wordcomplete.replace(/\S/g, "█ ")}`, attachment: img_qs}
        return api.sendMessage(msg, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "reply",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            tukhoa: dataGame.wordcomplete,
            dapan: dataGame.wordcomplete,
            wordcomplete: dataGame.wordcomplete
        })
    }) 
}
