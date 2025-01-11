module.exports.config = {
	name:"snauzk",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Binee",
	description: "Random video tiktok channel snauzk",
	commandCategory: "media",
	cooldowns: 3
};
module.exports.run = async ({ api, event,}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apivideo.nebin.repl.co/snauzk/?apikey=binee1805').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: `Quality ♥`,
						attachment: fs.createReadStream(__dirname + `/cache/snauzk.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/snauzk.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/snauzk.${ext}`)).on("close", callback);
			})
}