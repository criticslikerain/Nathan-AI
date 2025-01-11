module.exports.config = {
	name: "delthread",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Nathaniel",
	description: "Send a message to the group!",
	commandCategory: "System",
	usages: "sendnoti [Text]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "The text you want to send to everyone",
			type: 'Document',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.deleteThread(item.threadID) : '');
		api.sendMessage(' Deleted the message of all groups.', event.threadID);
	});
    }