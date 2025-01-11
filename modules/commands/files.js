module.exports.config = {
    name: "file",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "Nathaniel",
    description: "Delete the file or folder in the commands folder",
    commandCategory: "Admin",
    usages: "\ncommands start <text>\ncommands ext <text>\ncommands <text>\ncommands [leave blank]\ncommands help\nNOTE: <text> is the character you want to enter",
    cooldowns: 5
};

module.exports.handleReply = ({ api, event, args, handleReply }) => {
    if(event.senderID != handleReply.author) return; 
    const fs = require("fs-extra");
  var arrnum = event.body.split(" ");
  var msg = "";
  var nums = arrnum.map(n => parseInt(n));

  for(let num of nums) {
    var target = handleReply.files[num-1];
    var fileOrdir = fs.statSync(__dirname+'/'+target);
        if(fileOrdir.isDirectory() == true) {
          var typef = "[Folder🗂️]";
          fs.rmdirSync(__dirname+'/'+target, {recursive: true});
        }
        else if(fileOrdir.isFile() == true) {
          var typef = "[File📄]";
          fs.unlinkSync(__dirname+"/"+target);
        }
        msg += typef+' '+handleReply.files[num-1]+"\n";
  }
  api.sendMessage("⚡️Deleted the following files in the commands folder:\n\n"+msg, event.threadID, event.messageID);
}


module.exports.run = async function({ api, event, args, Threads }) {
  
  const fs = require("fs-extra");
  var files = fs.readdirSync(__dirname+"/") || [];
  var msg = "", i = 1;
  
//

  if(args[0] == 'help') {
    var msg = `
How to use the command:
•Key: start <text>
•Effect: Filter out files to be deleted with an optional starting character
•Example: commands rank
•Key: ext <text>
•Effect: Filter out files to be deleted with optional extension
•Effect: filter out files in the name with custom text
•Example: commands a
•Key: leave blank
•Effect: filter out all files in the cache
•Example: commands
•Key: help
•Effect: see how to use the command
•Example: commands help`;
    
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
  else if(args[0] == "start" && args[1]) {
    var word = args.slice(1).join(" ");
    var files = files.filter(file => file.startsWith(word));
    
    if(files.length == 0) return api.sendMessage(`⚡️There are no files in the cache that begin with: ${word}`, event.threadID ,event. messageID);
    var key = `⚡️Có ${files.length} The file has a character that starts with .: ${word}`;
  }
  
  //đuôi file là..... 
  else if(args[0] == "ext" && args[1]) {
    var ext = args[1];
    var files = files.filter(file => file.endsWith(ext));
    
    if(files.length == 0) return api.sendMessage(`⚡️There are no files in commands that end with: ${ext}`, event.threadID ,event. messageID);
    var key = `⚡️Có ${files.length} file có đuôi là: ${ext}`;
  }
  //all file
  else if (!args[0]) {
  if(files.length == 0) return api.sendMessage("⚡️Your commands have no files or folders", event.threadID ,event. messageID);
  var key = "⚡️All files in commands folder:";
  }
  //trong tên có ký tự.....
  else {
    var word = args.slice(0).join(" ");
    var files = files.filter(file => file.includes(word));
    if(files.length == 0) return api.sendMessage(`⚡️There are no files in the name with the character: ${word}`, event.threadID ,event. messageID);
    var key = `⚡️Có ${files.length} file in the name has the character: ${word}`;
  }
  
    files.forEach(file => {
        var fileOrdir = fs.statSync(__dirname+'/'+file);
        if(fileOrdir.isDirectory() == true) var typef = "[Folder🗂️]";
        if(fileOrdir.isFile() == true) var typef = "[File📄]";
        msg += (i++)+'. '+typef+' '+file+'\n';
    });
    
     api.sendMessage(`⚡️Reply message by number to delete the corresponding file, can rep multiple numbers, separated by space.\n${key}\n\n`+msg, event.threadID, (e, info) => global.client.handleReply.push({
    name: this.config.name,
    messageID: info.messageID,
    author: event.senderID,
    files
  }))
 
  }