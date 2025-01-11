module.exports.config = {
  name: "fbcover",
  version: "1.0.9",
  hasPermssion: 0,
  credits: "Nathaniel",
  description: "generate a custom facebook cover.",
  commandCategory: "generate-image",
  cooldowns: 0,
  usage: "<blank>",
  dependencies: {
      "fs-extra": "",
      "request": "",
      "axios": ""
  }
};

module.exports.run = async function ({ api, args, event, permssion , handleReply}) {
const request = require('request');
const fs = require("fs-extra")
const axios = require("axios")
const { threadID, messageID, senderID, body } = event;
  if (this.config.credits != '\u0063\u0068\u0069\u006e\u0068\u006c\u0065 \u0026 \u0052\u0065\u002d\u004d\u0061\u0064\u0065 \u0062\u0079 \u0053\u0061\u0069\u006b\u0069\u0044\u0065\u0073\u0075') {
        console.log(`\x1b[33m[ \u0057\u0041\u0052\u004e ]\x1b[37m » \u0043\u0068\u0061\u006e\u0067\u0065 \u0063\u0072\u0065\u0064\u0069\u0074\u0073 \u006d\u006f \u0070\u0061 \u0068\u0061\u002c \u006d\u0061\u0074\u0075\u0074\u006f \u006b\u0061 \u006d\u0061\u0067\u0063\u006f\u0064\u0065 \u006e\u0067 \u0073\u0061\u0072\u0069\u006c\u0069 \u006d\u006f \u0075\u006c\u006f\u006c \u0070\u0061\u006b\u0079\u0075\u0021`);
        return api.sendMessage('\u005b \u0057\u0041\u0052\u004e \u005d \u0044\u0065\u0074\u0065\u0063\u0074 \u0062\u006f\u0074 \u006f\u0070\u0065\u0072\u0061\u0074\u006f\u0072 ' + global.config.BOTNAME + ' \u0063\u0068\u0061\u006e\u0067\u0065 \u0063\u0072\u0065\u0064\u0069\u0074\u0073 \u006d\u006f\u0064\u0075\u006c\u0065\u0073  "' + this.config.name + '"', threadID, messageID);
  }
  else if (!args[0]){
    api.sendMessage(`\u0059\u006f\u0075 \u0077\u0061\u006e\u0074 \u0074\u006f \u0063\u006f\u006e\u0074\u0069\u006e\u0075\u0065\u003f \u0050\u006c\u0065\u0061\u0073\u0065 \u0072\u0065\u0070\u006c\u0079 \u0069\u0066 \u0079\u006f\u0075 \u0077\u0061\u006e\u0074 \u0061\u006e\u0064 \u0069\u0067\u006e\u006f\u0072\u0065 \u0074\u0068\u0069\u0073 \u0069\u0066 \u0079\u006f\u0075 \u0064\u006f\u006e\u0027\u0074\u002e`,event.threadID, (err, info) => {
    
     return global.client.handleReply.push({
        type: "characters",
        name: this.config.name,
        author: senderID,
        tenchinh: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
}

module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;

    switch (handleReply.type) {
             case "characters": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`Reply to this message enter your primary name`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'subname',
        	  	name: 'fbcover',
        	  	author: senderID,
        	  	characters: event.body,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        } 
        
  
        case "subname": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`You choose ${event.body} as your main name\n(Reply to this message enter your secondary name)`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'number',
        			name: 'fbcover',
        			author: senderID,
                    characters: handleReply.characters,
        			name_s: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }

        case "number": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`You have selected "${event.body}" as your secondary name\n(Reply to this message with your phone number)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'address',
        	  	name: 'fbcover',
        	  	author: senderID,
        	  	        	  	 
             characters: handleReply.characters,
           subname: event.body,
              
        			name_s: handleReply.name_s,
        			
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }

        case "address": { 


api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`You have selected "${event.body}" as your phone number\n(Reply to this message with your adrress)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'email',
        	  	name: 'fbcover',
        	  	author: senderID,
                      	  	 
            characters: handleReply.characters,
           subname: handleReply.subname,
              
              number: event.body,
              
        			name_s: handleReply.name_s,
              
        	  	messageID: info.messageID
        	  })
        	}, messageID);
    }


        case "email": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`You have selected character "${event.body}" as an address. \n(Reply to this message your email address)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'color',
        	  	name: 'fbcover',
        	  	author: senderID,
        	  	characters: handleReply.characters,
           subname: handleReply.subname,
              
              number: handleReply.number,
              address: event.body,
        			name_s: handleReply.name_s,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }
        
        case "color": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`You have chosen "${event.body}" as your email address.\nEnter\nEnter your background color (note: enter the English name of the color - If you don't want to enter the color then enter "no")\n(Reply this message)`,threadID , function (err, info) {
        		return global.client.handleReply.push({ 
        			type: 'create',
        			name: 'fbcover',
        			author: senderID,
        			characters: handleReply.characters,
           subname: handleReply.subname,
              
              number: handleReply.number,
              address: handleReply.address,
           email: event.body,

        			name_s: handleReply.name_s,
        			messageID: info.messageID
        		})
        	}, messageID)
        }
        case "create": {
            var char = handleReply.characters;
            var name = handleReply.name_s;
          var subname = handleReply.subname;
          var number = handleReply.number;
            
          
          var address = handleReply.address;
          var email = handleReply.email;
          var uid = event.senderID;
          var color = event.body;
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`Initializing...`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:`Sender Name: ${nameSender}\nName: ${name}\nSub Name: ${subname}\nID: ${uid}\nColor: ${color}\nAddress: ${address}\nEmail: ${email}\nNumber: ${number}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://api.phamvandien.xyz/fbcover/v1?name=${name}&uid=${uid}&address=${address}&email=${email}&subname=${subname}&sdt=${number}&color=${color}&apikey=KeyTest`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }
}
