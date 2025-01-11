/*Wag nyo palitan credits mga bwakanangshit.*/
module.exports.config = {
  name: "stalk",
  version: "1.0.0",
  hasPermssion: 0, //permission gawing 1 kung gusto nyo admin ng gc at admin ng bot lang, gawin namang 2 if gusto nyo admin bot lang 
  credits: "Nathaniel", /*Wag nyo palitan credits mga bwakanangshit(2).*/
  description: "View information of facebook users",
  commandCategory: "info",
  usages: "or reply to a message or @mention",
  cooldowns: 0 //cooldown
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
     if(!args[0]){
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
   const res = await axios.get(`https://manhict.tech/api/fbInfo?id=${uid}&apikey=lgG765KO`); //may limit 500 lang then pag nagamit na ung 500 antay ulit 12 hrs :3
    var id = res.data.result.id; 
    var name = res.data.result.name; 
    var fname = res.data.result.firstName;
    var username = res.data.result.vanity; 
    var bday = res.data.result.birthday;
    var f = res.data.result.follow;
    var url = res.data.result.profileUrl;
    var ht = res.data.result.hometown;
    var loc = res.data.result.location;
    var rs = res.data.result.love;
    var quotes = res.data.result.quotes;
    var data = res.data.result.thumbSrc;
    var callback = () => api.sendMessage({body:`Name: ${name}\nFirst Name: ${fname}\nFacebook Username: ${fname}\nBirthday: ${bday}\nFollowers: ${f}\nLocation: ${loc}\nRelationship: ${rs}\nProfile Url: ${url}\nHometown: ${ht}\nUID: ${id}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
   }

    else {
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    const res = await axios.get(`https://manhict.tech/api/fbInfo?id=${mentions}&apikey=lgG765KO`);
    var id = res.data.result.id;
    var name = res.data.result.name;
    var fname = res.data.result.firstName;
    var username = res.data.result.vanity;
    var bday = res.data.result.birthday;
    var f = res.data.result.follow;
    var url = res.data.result.profileUrl;
    var ht = res.data.result.hometown;
    var loc = res.data.result.location;
    var rs = res.data.result.love;
    var quotes = res.data.result.quotes;
    var data = res.data.result.thumbSrc;
    var callback = () => api.sendMessage({body:`Name: ${name}\nFirst Name: ${fname}\nFacebook Username: ${fname}\nBirthday: ${bday}\nFollowers: ${f}\nLocation: ${loc}\nRelationship: ${rs}\nProfile Url: ${url}\nHometown: ${ht}\nUID: ${id}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
    else {
    const res = await axios.get(`https://manhict.tech/api/fbInfo?id=${args[0]}&apikey=lgG765KO`);
    var id = res.data.result.id;
    var name = res.data.result.name;
    var fname = res.data.result.firstName;
    var username = res.data.result.vanity;
    var bday = res.data.result.birthday;
    var f = res.data.result.follow;
    var url = res.data.result.profileUrl;
    var ht = res.data.result.hometown;
    var loc = res.data.result.location;
    var rs = res.data.result.love;
    var quotes = res.data.result.quotes;
    var data = res.data.result.thumbSrc;
    var callback = () => api.sendMessage({body:`Name: ${name}\nFirst Name: ${fname}\nFacebook Username: ${fname}\nBirthday: ${bday}\nFollowers: ${f}\nLocation: ${loc}\nRelationship: ${rs}\nProfile Url: ${url}\nHometown: ${ht}\nUID: ${id}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${args[0]}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
  }
  }


/*remade and fix by Joshua Sy pogi UWUW*/