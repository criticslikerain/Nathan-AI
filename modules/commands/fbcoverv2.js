module.exports.config = {
	name: "fbcoverv2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "banner",
	commandCategory: "Image",
	usages: "",
	cooldowns: 5
  };
  
  module.exports.run = async function({ api, args, event }) {
  
	const { threadID, messageID, senderID, body } = event;
	
	const request = require("request");
	const axios = require("axios");
	const fs = require("fs-extra");
	
	if(args[0] == "list") {
  
		const res = await axios.get("https://api.nguyenmanh.name.vn/taoanhdep/list");
		
		var trang = 1;
		trang = parseInt(args[1]) || 1;
		trang < -1 ? trang = 1 : "";
		var limit = 11;
		var danhsach = res.data.listAnime.length;
		var soTrang = Math.ceil(danhsach / limit);
		var msg = [];
  
		for (var i = limit * (trang - 1); i < limit * (trang - 1) + limit; i++) {
			if (i >= danhsach) break;
			var nv = res.data.listAnime[i].name;
			msg += `${i + 0}. ${nv}\n`
		}
  
		msg += `» All ${danhsach} character\n» Number of pages (${trang}/${soTrang})\n» Use ${global.config.PREFIX}fbcover list <number of pages> to be able to see the next page`;
	  return api.sendMessage(`●─●Emilia●──●\n` + msg + `\n●──●End●──●`, threadID, messageID);
	  } else if(args[0] == "find"){
	 var char = args[1];
	  
	  const res = await axios.get(`https://api.nguyenmanh.name.vn/taoanhdep/search?key=${encodeURIComponent(char)}`);
  
	  
	  var id = res.data.ID;
	   
	   return api.sendMessage(`ID của ${char} là: ${id - 1}`, threadID, messageID);
	   
	 } 
	  
	 else if(args[0] == "color") {
  
		const mautienganh = "https://4.bp.blogspot.com/-_nVsmtO-a8o/VYfZIUJXydI/AAAAAAAACBQ/FHfioHYszpk/w1200-h630-p-k-no-nu/cac-mau-trong-tieng-anh.jpg";
		var callback = () => {
			api.sendMessage({
				body: "[ English color list ]",
				attachment: fs.createReadStream(__dirname + `/cache/mautienganh.jpg`)
			}, threadID, () => fs.unlinkSync(__dirname + `/cache/mautienganh.jpg`))
		};
  
		request(encodeURI(mautienganh)).pipe(fs.createWriteStream(__dirname + `/cache/mautienganh.jpg`)).on("close", callback);
  
	} else {
		return api.sendMessage(`» Reply to the message with the character ID you want to choose`, threadID, (error, info) => {
			return global.client.handleReply.push ({
				type: "characters",
				name: this.config.name,
				author: senderID,
				messageID: info.messageID
			})
		}, event.messageID);
	}
  }
  
  module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
	const axios = require("axios");
	const fs = require("fs-extra");
	const request = require("request");
	
	if (handleReply.author != event.senderID) return api.sendMessage('You do not have permission to reply to this message', event.threaID);
	const {
	  threadID,
	  messageID,
	  senderID
	} = event;
  
	switch (handleReply.type) {
	  case "characters": {
		const id = parseInt(event.body);
		  
		const res = await axios.get(`https://api.nguyenmanh.name.vn/taoanhdep/search/id?id=${id + 1}`);
  
		var name = res.data.name
		
		api.unsendMessage(handleReply.messageID);
		return api.sendMessage(`» You have selected character ID as ${name}\n» Reply to this message and enter your name`, threadID, (error, info) => {
		  return global.client.handleReply.push({
			type: 'subname',
			name: this.config.name,
			author: senderID,
			characters: event.body,
			messageID: info.messageID
		  })
		}, messageID);
	  }
	  case "subname": {
		api.unsendMessage(handleReply.messageID);
		return api.sendMessage(`» Reply to this message to enter your secondary name`, threadID, (error, info) => {
		  return global.client.handleReply.push({
			type: 'color',
			name: this.config.name,
			author: senderID,
			characters: handleReply.characters,
			name_s: event.body,
			messageID: info.messageID
		  })
		}, messageID);
	  }
  
	  case "color": {
		api.unsendMessage(handleReply.messageID);
		return api.sendMessage(`» Reply to this message to enter background color \n» You can press "${global.config.PREFIX}fbcover color" to see color list`, threadID, (error, info) => {
		  return global.client.handleReply.push({
			type: 'create',
			name: this.config.name,
			author: senderID,
			characters: handleReply.characters,
			subname: event.body,
			name_s: handleReply.name_s,
			messageID: info.messageID
		  })
		}, messageID)
	  }
	  
	  case "create": {
		var idchar = handleReply.characters;
		var name_ = handleReply.name_s;
		var subname_ = handleReply.subname;
		var color_ = event.body;
		api.unsendMessage(handleReply.messageID);
		return api.sendMessage(`Making a photo ...`, event.threadID, async (error, info) => {
		  await new Promise(resolve => setTimeout(resolve, 3 * 1000));
		  var imag = (await axios.get(`https://api.nguyenmanh.name.vn/fbcover/v2?name=${encodeURIComponent(name_)}&id=${idchar}&subname=${encodeURIComponent(subname_)}&color=${encodeURIComponent(color_)}&apikey=KeyTest`, {
			responseType: "stream"
		  })).data;
		  var msg = {
			body: `This is your cover photo`,
			attachment: imag
		  }
		  return api.sendMessage(msg, event.threadID, event.messageID)
		}, event.messageID)
	  }
	}
  }
  