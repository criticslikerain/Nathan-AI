module.exports.config = {
	name: "checktt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "interactive check",
	commandCategory: "Utilities",
	usages: "checktt",
	cooldowns: 5,
	dependencies: {
		"fs-extra": ""
	}
}

const path = __dirname + '/count-by-thread/';

module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
}

module.exports.handleEvent = function ({ event }) {
    const { messageID, threadID, senderID } = event;
    if (!global.data.allThreadID.some(tid => tid == threadID)) return;
    const fs = global.nodemodule['fs'];
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 0;
    }
    getThreadJSON[senderID]++;
    fs.writeFileSync(threadPath, JSON.stringify(getThreadJSON, null, 4));
}


 const getRankName = count => {
    return count > 50000 ? 'War Generals'
    :count > 9000 ? 'Master'
        : count > 8000 ? 'Elite V'
            : count > 6100 ? 'Elite IV'
                : count > 5900? 'Elite III'
                    : count > 5700 ? 'Elite II'
                        : count > 5200 ? 'Elite I'
                            : count > 5000 ? 'Diamond V'
                                : count > 4800 ? 'Diamond IV'
                                    : count > 4500 ? 'Diamond III'
                                        : count > 4000 ? 'Diamond II'
                                            : count > 3800 ? 'Diamond I'
                                                : count > 3500 ? 'Platinum IV'
                                                    : count > 3200 ? 'Platinum III'
                                                        : count > 3000 ? 'Platinum II'
                                                            : count > 2900 ? 'Platinum I'
                                                                : count > 2500 ? 'Gold IV'
                                                                    : count > 2300 ? 'Gold III'
                                                                        : count > 2000 ? 'Gold II'
                                                                            : count > 1500 ? 'Gold I'
                                                                                : count > 1200 ? 'Silver III'
                                                                                    : count > 1000 ? 'Silver II'
                                                                                        : count > 900 ? 'Silver I'
                                                                                            : count > 500 ? 'Copper III'
                                                                                                : count > 100 ? 'Copper II'
                                                                                                    : 'Copper I'
}



module.exports.run = async function ({ api, event, args, Users }) {
    const fs = global.nodemodule['fs'];
    const { messageID, threadID, senderID, mentions } = event;
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const query = args[0] ? args[0].toLowerCase() : '';
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 1;
    }
    var storage = [],
        msg = '';
    if (query == 'all') {
        const allThread = await api.getThreadInfo(threadID) || { participantIDs: [] };
        for (id of allThread.participantIDs) {
            if (!getThreadJSON.hasOwnProperty(id)) {
                getThreadJSON[id] = 0;
            }
        }
    }
    for (const id in getThreadJSON) {
        const name = await Users.getNameUser(id);
        storage.push({ id, name, count: getThreadJSON[id] });
    }
    storage.sort((a, b) => {
        if (a.count > b.count) return -1;
        else if (a.count < b.count) return 1;
        else return a.name.localeCompare(b.name);
    });
    if (query == 'all') {
        let count = 1;
        msg += '===CHECKTT===';
        for (const user of storage) {
            msg += `\n${count++}. ${user.name} - ${user.count}`;
        }
    } else if (query == 'rank') {
        msg += 'Copper 1 (10msgs)\nCopper 2 (100msgs)\nCopper 3 (500msgs)\nSilver 1 (900 msgs)\nSilver 2 (1000 msgs)\nSilver 3 (1200 msgs)\nGold 1 (1500 msgs)\nGold2 (2000 msgs)\nGold3 (2300 msgs)\nGold 4 (2500 msgs)\nPlatinum 1 (2900 msgs)\nPlatinum  2 (3000 msgs)\nPlatinum 3 (3200 msgs)\nPlatinum 4 (3500 msgs)\nDiamond 1(3800 msgs)\nDiamond 2 (4000 msgs)\nDiamond 3 (4500 msgs)\nDiamond 4(4800 msgs)\nDiamond 5 (5000 msgs)\nElite 1 (5200 msgs)\nElite 2 (5700 msgs)\nElite 3 (5900 msgs)\nElite 4 (6100 msgs)\nElite 5 (8000 msgs)\nMaster (9000 msgs)\nWar Generals (50000 msgs)'
    } else if (!query) {
        let userID = senderID;
        if (Object.keys(mentions).length > 0) {
            userID = mentions[0];
        }
        const rankUser = storage.findIndex(e => e.id == userID);
        msg += `${userID == senderID ? '💠Friend' : storage[rankUser].name} ranked ${rankUser + 1}\n💌Number of messages: ${storage[rankUser].count}\n🔰Rank ${getRankName(storage[rankUser].count)}`;
    }
    api.sendMessage(msg, threadID);
    return;
}
