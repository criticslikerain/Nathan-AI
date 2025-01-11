module.exports = function ({ Users, Threads, Currencies }) {
    const logger =require("../../utils/log.js");
    return async function ({ event }) {
        const { allUserID, allCurrenciesID, allThreadID, userName, threadInfo } = global.data; 
        const { autoCreateDB } = global.config;
        if (autoCreateDB == ![]) return;
        var { senderID, threadID } = event;
        senderID = String(senderID);
        var threadID = String(threadID);
        try {
            if (!allThreadID.includes(threadID) && event.isGroup == !![]) {
                const threadIn4 = await Threads.getInfo(threadID);
                const setting = {};
                setting.threadName = threadIn4.threadName
                setting.adminIDs = threadIn4.adminIDs
                setting.nicknames = threadIn4.nicknames;
                const dataThread = setting;
                allThreadID.push(threadID)
                threadInfo.set(threadID, dataThread);
                var job = ["FF9900","FFFF33","33FFFF","FF99FF","FF3366","FFFF66","FF00FF","66FF99","00CCFF","FF0099","FF0066","008E97","F58220","38B6FF","7ED957","97FFFF","00BFFF","76EEC6","4EEE94","98F5FF","AFD788","00B2BF","9F79EE","00FA9A"];
                const chalk = require('chalk');
                var random = job[Math.floor(Math.random() * job.length)]      
        var random1 = job[Math.floor(Math.random() * job.length)]
        var random2 = job[Math.floor(Math.random() * job.length)]
                const setting2 = {};
                setting2.threadInfo = dataThread
                setting2.data = {}
                await Threads.setData(threadID, setting2);
                for (singleData of threadIn4.userInfo) {
                    userName.set(String(singleData.id), singleData.name);
                    try {
                        global.data.allUserID.includes(String(singleData.id)) ? (await Users.setData(String(singleData.id), 
                        {
                            'name': singleData.name
                        }), 
                        global.data.allUserID.push(singleData.id)) : (await Users.createData(singleData.id, 
                        {
                            'name': singleData.name,
                            'data': {}
                        }), 
                        global.data.allUserID.push(String(singleData.id)), 
                        global.data.allUserID.push(String(singleData.name)), 
                        logger(global.getText('handleCreateDatabase', 'newUser', chalk.hex("#" + random)(`New user:  `) + chalk.hex("#" + random1)(`${singleData.name}`) + "  ||  " + chalk.hex("#" + random2)(`${singleData.id}`)), '[ USER ]'));
                    } catch(e) { console.log(e) };
                }
                logger(global.getText('handleCreateDatabase', 'newThread',chalk.hex("#" + random)(`New group: `) + chalk.hex("#" + random1)(`${threadID}`) + "  ||  " + chalk.hex("#" + random2)(`${threadIn4.threadName}`)), '[ THREAD ]');
            }
            if (!allUserID.includes(senderID) || !userName.has(senderID)) {
                const infoUsers = await Users.getInfo(senderID),
                    setting3 = {};
                setting3.name = infoUsers.name
                await Users.createData(senderID, setting3)
                allUserID.push(senderID) 
                userName.set(senderID, infoUsers.name)
                logger(global.getText('handleCreateDatabase', 'newUser', chalk.hex("#" + random)(`New users: `) + chalk.hex("#" + random1)(`${singleData.name}`) + " || " + chalk.hex("#" + random2)(`${senderID}`)), '[ 𝚉𝚒𝚊 𝚁𝚎𝚒𝚗 ]');
            }
            if (!allCurrenciesID.includes(senderID)) {
                const setting4 = {};
                setting4.data = {}
                await Currencies.createData(senderID, setting4) 
                allCurrenciesID.push(senderID);
            }
            return;
        } catch (err) {
            return console.log(err);
        }
    };
}