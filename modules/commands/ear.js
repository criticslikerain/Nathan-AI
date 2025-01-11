module.exports.config = {
	name: "ear",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "Animal Ear Waifu",
	commandCategory: "other",
	usages: "ear",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://RandomLinkAPI-1.ekekevan.repl.co/getlink4').then(res => {
//	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Anime Girl w/Animal Ear`,
						attachment: fs.createReadStream(__dirname + `/cache/anear.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anear.pmg`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/anear.png`)).on("close", callback);
			})
}
