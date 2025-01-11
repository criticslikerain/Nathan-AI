module.exports.config = {
	name: "outbox",
	version: "1.0.6",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Automatic Outbox after the time period has requested!",
	commandCategory: "system",
    dependencies: {
        "moment-timezone": ""
    },
	cooldowns: 5
};

module.exports.convertTime = (timestamp, separator) => {
    var pad = function(input) {return input < 10 ? "0" + input : input;};
    var date = timestamp ? new Date(timestamp * 1000) : new Date();
    return [
        pad(date.getHours()),
        pad(date.getMinutes()),
        pad(date.getSeconds())
    ].join(typeof separator !== 'undefined' ?  separator : ':' );
}

module.exports.handleSchedule = async ({ api, schedule }) => {
    try {
        await api.removeUserFromGroup(api.getCurrentUserID(), schedule.target);
        return api.sendMessage(`[Outbox] has left the group ID ${schedule.target}`, __GLOBAL.settings.ADMINBOT[0], (error, info) => {
            if (error) return require(process.cwd() + "/utils/log")(`Has left the group ID ${schedule.target}`, "[ OUTBOX ]");
        });
    }
    catch {
        return api.sendMessage(`Could not leave the group ID ${schedule.target}!`, __GLOBAL.settings.ADMINBOT[0], (error, info) => {
            if (error) return require(process.cwd() + "/utils/log")(`Could not leave the group ID ${schedule.target}!`, "error");
        });
    }
} 

module.exports.handleReply = ({ event, api, handleReply }) => {
    const moment = global.nodemodule["moment-timezone"];
    
    if (handleReply.author != event.senderID) return;

    switch (handleReply.type) {
        case "inputThreadID": {
            if (isNaN(event.body)) return api.sendMessage("[Outbox] ThreadID you enter inappropriate format!", event.threadID, event.messageID);
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`[Outbox] The time you need a timer (note must be in the format: HH:mm):`, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "inputTime",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    target: event.body
                })
            })
        }

        case "inputTime": {
            const time = moment().tz("Asia/Ho_Chi_minh");
            const regex = /([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9])$/;

            if (!regex.test(event.body)) return api.sendMessage(`[Outbox] Format time incorrectly!`, event.threadID, event.messageID);
            const timeSplited = event.body.split(":"),
                    hour = timeSplited[0],
                    minute = timeSplited[1];
                
            if (hour > time.hours()) time.add(1, "days");

            time.set({ hour, minute });

            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`[Outbox] Enter the reason automatically removed:`, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    type: "inputReason",
                    name: this.config.name,
                    author: event.senderID,
                    messageID: info.messageID,
                    target: handleReply.target,
                    timeTarget: time.unix()
                })
            })
        }

        case "inputReason": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(
                "=== OutBox ===" +
                "\n\n» Thread need to leave: " + handleReply.target +
                "\n» Loose time: " + this.convertTime(handleReply.timeTarget) +
                "\n» Reasons: " + event.body,
                event.threadID, (error, info) => {
                    return api.sendMessage(`[Outbox] received the command to leave this group at the time ${this.convertTime(handleReply.timeTarget)} with the reason ${event.body}`, handleReply.target, (error, info) => {
                        if (error) return api.sendMessage(`[Outbox] Thread need a ban with ID does not exist, may have been kicked before!`, event.threadID, event.messaegID);
                        else return global.client.handleSchedule.push({
                            commandName: this.config.name, 
                            timestamp: handleReply.timeTarget, 
                            target: handleReply.target, 
                            reason: event.body,
                            event
                        })
                    })
                }
            )
        }
    }
}

module.exports.run = ({  event, api }) => {
    return api.sendMessage(`[Outbox] Thread ID You need a loose automatic timer:`, event.threadID, (error, info) => {
        global.client.handleReply.push({
            type: "inputThreadID",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        })
    })
}