module.exports.config = {
    name: "noitu",
    version: "2.0.7",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Play from with BOT or team members",
    commandCategory: "Entertainment",
    usages: "",
    cooldowns: 5
};
module.exports.onLoad = function () {
    if (typeof global.moduleData == "undefined") global.moduleData = new Object();
    if (typeof global.moduleData.noitu == "undefined") global.moduleData.noitu = new Map();
}
module.exports.handleEvent = async function({ api, event }) {
    if (typeof global.moduleData.noitu == "undefined") return;
    if(event.senderID == api.getCurrentUserID()) return
    const axios = global.nodemodule["axios"];
    const { body: word, threadID, messageID } = event;
    if (global.moduleData.noitu.has(threadID)) {
        if (word && word.split(" ").length != 2) return
            var data = (await axios.get("https://hoangdogianguyenofficial.herokuapp.com/linkword?word=" + encodeURIComponent(word))).data;
            if (data.data.win == true) {
                global.moduleData.noitu.delete(threadID);
                return api.sendMessage(`You won`, threadID, messageID);
            }
            if(data.data.success == false) {
                global.moduleData.noitu.delete(threadID);
                return api.sendMessage(`You lose`, threadID, messageID);
            }
    }
}
module.exports.run = function({ api, event }) {
    const { threadID, messageID } = event;
    if (!global.moduleData.noitu.has(threadID)) {
        global.moduleData.noitu.set(threadID);
        return api.sendMessage("Have turned from", threadID, messageID);
    } else {
        global.moduleData.noitu.delete(threadID);
        return api.sendMessage("Has turned off from", threadID, messageID);
    }
}