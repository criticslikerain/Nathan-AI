module.exports.config = {
	name: "osu",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "ZiaRein",
	description: "get osu info",
	commandCategory: "Edit-img",
	usages: `Missing username\n\nHow to use?\n${global.config.PREFIX}osu <username>\n\nExample:\n${global.config.PREFIX}osu izumi\n`,
	cooldowns: 5,
    dependencies: {
		"request": "",
		"fs-extra": ""
	}
};

module.exports.languages = {
    "en": {
        "missingUsername": `Missing username\n\nHow to use?\n${global.config.PREFIX}osu <username>\n\nExample:\n${global.config.PREFIX}osu`
    }
}

module.exports.run = ({ event, api, args, getText }) => {
    if (args.length == 0) return api.sendMessage(getText("missingUsername"), event.threadID, event.messageID);
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    request(`http://lemmmy.pw/osusig/sig.php?colour=hex8866ee&uname=${args.join(" ")}&pp=1&countryrank&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`).pipe(fs.createWriteStream(__dirname + `/cache/${event.senderID}-osu.png`)).on("close", () => api.sendMessage({ attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}-osu.png`) }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}-osu.png`), event.messageID));}