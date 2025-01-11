module.exports.config = {
    name: "ban",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Nathaniel",
    description: "restriction",
    commandCategory: "group",
    usages: `ban user\n\nHow to use?\n${global.config.PREFIX}ban <UID @tag>\n\nExample:\n${global.config.PREFIX}ban (uid)\n${global.config.PREFIX}ban @name\n`,
    cooldowns: 5
};

module.exports.languages = {
    "en": {
        "reason": "Reason",
        "at": "At",
        "allCommand": "All commands",
        "commandList": "Commands",
        "banSuccess": "[ Ban User ] Banned user: %1",
        "banCommandSuccess": "[ banCommand User ] Banned command with user: %1",
        "errorReponse": "%1 Can't do what you request",
        "IDNotFound": "%1 ID you import doesn't exist in database",
        "existBan": "[ Ban User ] User %1 has been banned before %2 %3",
        "missingCommandInput": "%1 You have to import the command you want to ban!",
        "returnBan": "[ Ban User ] You are requesting to ban user:\n- User ID and name who you want to ban: %1%2\n\n❮ Reaction this message to complete ❯",
        "returnBanCommand": "[ banCommand User ] You are requesting to ban command with user:\n - User ID and name who you want to ban: %1\n- Commands: %2\n\n❮ Reaction this message to complete ❯",
        "returnResult": "This is your result: \n",
        "returnNull": "There is no result with your input!",
        "returnList": "[ User List ]\There are %1 banned user, here are %2 user\n\n%3",
        "returnInfo": "[ Info User ] Here is some information about the user who you want to find:\n- User ID and name: %1n- Banned?: %2 %3 %4\n- Command banned?: %5"
    }
}

module.exports.handleReaction = async({ event, api, Users, handleReaction, getText }) => {
    if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
    const moment = require("moment-timezone");
    const { threadID } = event;
    const { messageID, type, targetID, reason, nameTarget } = handleReaction;

    const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
    global.client.handleReaction.splice(global.client.handleReaction.findIndex(item => item.messageID == messageID), 1);

    switch (type) {
        case "ban":
            {
                try {
                    let data = (await Users.getData(targetID)).data || {};
                    data.banned = true;
                    data.reason = reason || null;
                    data.dateAdded = time;
                    await Users.setData(targetID, { data });
                    global.data.userBanned.set(targetID, { reason: data.reason, dateAdded: data.dateAdded });
                    return api.sendMessage(getText("banSuccess", `${targetID} - ${nameTarget}`), threadID, () => {
                        return api.unsendMessage(messageID);
                    });
                } catch { return api.sendMessage(getText("errorReponse", "[ Ban User ]"), threadID) };
            }
    }
}

module.exports.run = async({ event, api, args, Users, getText }) => {
    const { threadID, messageID } = event;
    var targetID = String(args[0]);
    var reason = (args.slice(2, args.length)).join(" ") || null;

    if (isNaN(targetID)) {
        const mention = Object.keys(event.mentions);
        args = args.join(" ");
        targetID = String(mention[0]);
        reason = (args.slice(args.indexOf(event.mentions[mention[0]]) + (event.mentions[mention[0]] || "").length + 1, args.length)) || null;
    }

    if (!global.data.allUserID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Ban User ]"), threadID, messageID);
    if (global.data.userBanned.has(targetID)) {
        const { reason, dateAdded } = global.data.userBanned.get(targetID) || {};
        return api.sendMessage(getText("existBan", targetID, ((reason) ? `${getText("reason")}: "${reason}"` : ""), ((dateAdded) ? `${getText("at")} ${dateAdded}` : "")), threadID, messageID);
    }
    const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
    return api.sendMessage(getText("returnBan", `${targetID} - ${nameTarget}`, ((reason) ? `\n- ${getText("reason")}: ${reason}` : "")), threadID, (error, info) => {
        global.client.handleReaction.push({
            type: "ban",
            targetID,
            reason,
            nameTarget,
            name: this.config.name,
            messageID: info.messageID,
            author: event.senderID,

        });
    }, messageID);
                                                                          }