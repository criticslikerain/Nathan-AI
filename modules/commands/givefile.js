module.exports.config = {
	name: 'givefile',
	version: '1.0.0',
	hasPermssion: 2,
	credits: 'Nathaniel',
	description: '',
	commandCategory: 'admin',
	usages: 'givefile',
	cooldowns: 5,
	dependencies: {"fs-extra":""}
};

module.exports.run = async ({ args, api, event }) => {
	const fs = require("fs-extra"); 
  const permission = ["100075291052694", ""];
  	if (!permission.includes(event.senderID)) return api.sendMessage("You don't have permission to use this command. Only LaFhanGa ", event.threadID, event.messageID);
	var path = [],
		pathrn = [],
		pathrntxt = [];
	var msg = '';
	var notfound = "";
	for(let file of args) {
	 if(!fs.existsSync(__dirname+"/"+file)) {
	   notfound += 'File not found: '+file;
	   continue;
	 };
		if (file.endsWith('.js')) {
			fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
			pathrn.push(
				fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
			);
			pathrntxt.push(file.replace('.js', '.txt'));
		} else {
			path.push(fs.createReadStream(__dirname + '/' + file));
		}
	}

	var mainpath = [...path, ...pathrn];
	if (pathrn.length != 0)
		msg +=
			'Because fb forbids sending .js files, we changed the files with the .js extension to the .txt extension.';
	api.sendMessage({ body: msg+"\n"+notfound, attachment: mainpath }, event.threadID);
	pathrntxt.forEach(file => {
		fs.unlinkSync(__dirname + '/' + file);
	});
};