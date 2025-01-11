module.exports.config = {
	name: "newbox",	
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Create a new chat group with the tag", 
  commandCategory: "Box Chat",
	usages: '"$newbox [tag] | [New group name] or "$newbox me [tag] | [New group name]"',
	cooldowns: 5, 
	dependencies: "",
};

module.exports.run = async function({ api, Users, args, event }) {
 if (args[0] == "me")
  var id = [event.senderID]
  else id = [];
  var main = event.body; 
  var groupTitle = main.slice(main.indexOf("|") +2)
  for (var i = 0; i < Object.keys(event.mentions).length; i++)
id.push(Object.keys(event.mentions)[i]);
  api.createNewGroup(id, groupTitle,() => {api.sendMessage(`Has created a group ${groupTitle} success`, event.threadID)})
}