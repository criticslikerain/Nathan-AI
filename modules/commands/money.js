module.exports.config = {
    name: "money",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "ZiaRein",
    description: "check bank",
    commandCategory: "economy",
    usages: "tag or none",
    cooldowns: 5
};

module.exports.languages = {
    "en": {
        "sotienbanthan": "Your current balance: %1$",
        "sotiennguoikhac": "%1's current balance: %2$."
    }
}

module.exports.run = async function({ api, event, args, Currencies, getText }) {
    const { threadID, messageID, senderID, mentions } = event;
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    if (!args[0]) {
        const money = (await Currencies.getData(senderID)).money;
        return api.sendMessage({body: getText("sotienbanthan", money), attachment: await image()}, threadID);
    }

    else if (Object.keys(event.mentions).length == 1) {
        var mention = Object.keys(mentions)[0];
        var money = (await Currencies.getData(mention)).money;
        if (!money) money = 0;
        return api.sendMessage({
            body: getText("sotiennguoikhac", mentions[mention].replace(/\@/g, ""), money),
            mentions: [{
                tag: mentions[mention].replace(/\@/g, ""),
                id: mention
            }],
            attachment: await image()
        }, threadID, messageID);
    }

    else return global.utils.throwError(this.config.name, threadID, messageID);
    async function image() {
        var images = [];
        var link = [`https://i.imgur.com/00qVExR.jpg`,`https://i.imgur.com/YS09RLF.png`,`https://i.imgur.com/ky4qDKX.png`,`https://i.imgur.com/T4xn0yf.png`,`https://i.imgur.com/RvE8xij.png`,`https://i.imgur.com/HKwctpT.png`];
        let download = (await axios.get(link[Math.floor(Math.random() * link.length)], { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/cache/coins.png`, Buffer.from(download, "utf-8"));
        images.push(fs.createReadStream(__dirname + `/cache/coins.png`));
        return images
    }
      }