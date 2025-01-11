module.exports.config = {
	name: "sauce",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "Search photo information through photos (anime and hentai only",
	commandCategory: "media",
	cooldowns: 5,
	dependencies: {
		"sagiri": "",
		"axios": ""
	},
	envConfig: {
		"SAUCENAO_API": "a2430f4a078a4782540142bfad2551f3384bd20f"
	}
};

module.exports.languages = {
	"en": {
		"missingReply": "Please reply the picture that you want to find!",
		"donthave": "Don't have",
		"dontknow": "Unknown",
		"returnResult": "This is result \n-------------------------\n- Similar percentage: %1%\n- Material: %2\n- Characters: %3\n- Author: %4\n- Release web: %5 - %6",
		"returnNull": "There is no result match your picture :'("
	}
}

module.exports.run = async ({ api, event, getText }) => {
	const sagiri = global.nodemodule["sagiri"], search = sagiri(global.configModule[this.config.name].SAUCENAO_API);
	const { threadID, messageID, type, messageReply } = event;
	if (type != "message_reply") return api.sendMessage(getText("missingReply"), threadID, messageID);
	if (messageReply.attachments.length > 1) return api.sendMessage(getText("missingReply"), threadID, messageID);
	if (messageReply.attachments[0].type == 'photo') {
		return search(messageReply.attachments[0].url).then(response => {
			const data = response[0],
				results = {
					similarity: data.similarity,
					material: data.raw.data.material || getText("donthave"),
					characters: data.raw.data.characters || 'Original',
					creator: data.raw.data.creator || getText("dontknow"),
					site: data.site,
					url: data.url
				},
				minSimilarity = 50;
			if (minSimilarity <= ~~results.similarity) return api.sendMessage(getText("returnResult", results.similarity, results.material, results.characters, results.creator, results.site, results.url), threadID, messageID);
			else return api.sendMessage(getText("returnNull"), threadID, messageID);
		});
	}
}