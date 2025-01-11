module.exports.config = {
    name: "speedtest",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Nathaniel",
    description: "My server speed",
    commandCategory: "system",
    cooldowns: 15,
    dependencies: {
		"fast-speedtest-api": ""
	}
};

module.exports.run = async function({ api, event }) {

	try {
		const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
		const resault = await speedTest.getSpeed();
		return api.sendMessage(
			"" + 
			"Speed: " + resault + " Mbps",
			event.threadID, event.messageID
		);
	}
	catch {
		return api.sendMessage("Can't speedtest right now please try again later", event.threadID, event.messageID);
	}
      }