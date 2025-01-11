module.exports.config = {
	name: "rnamebox",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Change the nickname of the entire group",
	commandCategory: "System",
	usages: "[Nickname needs to be placed]",
	cooldowns: 20,
};

module.exports.run = async ({ event, api, args, Threads }) => {
    const custom = args.join(" "),
            allThread = await Threads.getAll(["threadID"]);
    var threadError = [],
        count = 0;
    if (custom.length != 0) {
        for (const idThread of allThread) {
            api.setTitle(custom, idThread.threadID, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return api.sendMessage(`Has changed the name successfully ${count} group`, event.threadID, () => {
            if (threadError != 0) return api.sendMessage("[!] Cannot change the name at" + threadError.lenght + " Group",event.threadID, event.messageID)
        }, event.messageID);
    }
}