module.exports.config = {
	name: "work",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "If you work, you can eat!",
	commandCategory: "Earn money",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};

module.exports.languages = {
    "en": {
        "cooldown": "You have worked today, to avoid exhaustion please come back after: %1 minute(s) %2 second(s).",
        "rewarded": "You did the job: %1 and received: %2$.",
        "job1": "sell lottery tickets",
        "job2": "repair car",
        "job3": "programming",
        "job4": "hack Facebook",
        "job5": "chef",
        "job6": "mason",
        "job7": "fake taxi",
        "job8": "gangbang someone",
        "job9": "plumber ( ͡° ͜ʖ ͡°)",
        "job10": "streamer",
        "job11": "online seller",
        "job12": "housewife",
        "job13": 'sell "flower"',
        "job14": "find jav/hentai code for SpermLord",
        "job15": "play Yasuo and carry your team"
    }
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0);
        
		return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {
        const job = [
            getText("job1"),
            getText("job2"),
            getText("job3"),
            getText("job4"),
            getText("job5"),
            getText("job6"),
            getText("job7"),
            getText("job8"),
            getText("job9"),
            getText("job10"),
            getText("job11"),
            getText("job12"),
            getText("job13"),
            getText("job14"),
            getText("job15")
        ];
        const amount = Math.floor(Math.random() * 600);
        return api.sendMessage(getText("rewarded", job[Math.floor(Math.random() * job.length)], amount), threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
}