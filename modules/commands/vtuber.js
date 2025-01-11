module.exports.config = {
	name: "vtuber",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "ZiaRein",
	description: "Search VTubers on VTubersWiki Official",
	commandCategory: "vtuber",
	usages: "vtuber [vtuber name]",
	cooldowns: 5,
 /* dependencies: {
    "vtuber-wiki": "",
    "axios": "",
    "fs": "",
    "request": ""               
} */ 
};


module.exports.run = async ({ api, event, args }) => {
	const axios = require("axios");
    const { wiki } = require("vtuber-wiki"); 
	const request = require('request');
	const fs = require("fs");
  if (!args[0]) {api.sendMessage(`Search cannot leave as blank\n\nHow to use?\n${global.config.PREFIX}vtuber <character>\n\nExample:\n${global.config.PREFIX}vtuber gawr gura\n\nCreated by: ZiaRein`,event.threadID, event.messageID)}
  else{
var query = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
    let Replaced = query.replace(/ /g, " ");
  api.sendMessage(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n【 ${Replaced} 】`, event.threadID, event.messageID);

const vtuber = await wiki(Replaced)
 .catch(err => {
                     api.sendMessage("⚠️" + err, event.threadID, event.messageID);
           }); 
          if(vtuber === null) {
    api.sendMessage(`⚠️${Replaced} not found.`, event.threadID, event.messageID)
    return;
          }
   console.log(vtuber);                if (vtuber.title){ 
    let getURL = vtuber.image_url;


   if (!vtuber.title || vtuber.title === undefined) vtuber.title = "Not Found";
  
    if (!vtuber.gender || vtuber.gender === undefined) vtuber.gender = "Not Found";
  
  if (!vtuber.birthday || vtuber.birthday === undefined) vtuber.birthday = "Not Found";

  if (!vtuber.height || vtuber.height === undefined) vtuber.height = "Not Found";

  if (!vtuber.weight || vtuber.weight === undefined) vtuber.weight = "Not Found";



  
var v1 = vtuber.title;
var v2 = vtuber.gender;
var v3 = vtuber.age.replace(/<ref>/g, " ");
var v4 = vtuber.birthday;
var v5 = vtuber.description;
var v6 = vtuber.more;
var v7 = vtuber.height;
var v8 = vtuber.weight;
var v9 = vtuber.channel.replace(/<br>/g, "\n\n");
var v10 = vtuber.social_media.replace(/<br>/g, "\n\n");
var v11 = vtuber.official_website.replace(/<br>/g, "\n\n");
var v12 = vtuber.affiliation

  //var v11 = bb.replace(/<br>/g, "\n\n");


 
        let callback = function () {           
          

   
 api.sendMessage({
     body:`𝗧𝗶𝘁𝗹𝗲: ${v1}\n𝗔𝗳𝗳𝗶𝗹𝗶𝗮𝘁𝗶𝗼𝗻: ${v12}\n𝗚𝗲𝗻𝗱𝗲𝗿: ${v2}\n𝗔𝗴𝗲: ${v3}\n𝗕𝗶𝗿𝘁𝗵𝗱𝗮𝘆: ${v4}\n𝗛𝗲𝗶𝗴𝗵𝘁: ${v7}\n𝗪𝗲𝗶𝗴𝗵𝘁: ${v8}\n\n𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${v5}\n\n𝗖𝗵𝗮𝗻𝗻𝗲𝗹: ${v9}\n\n𝗦𝗼𝗰𝗶𝗮𝗹 𝗠𝗲𝗱𝗶𝗮: ${v10}\n\n𝗦𝗼𝘂𝗿𝗰𝗲: ${v11}\n\n𝗠𝗼𝗿𝗲 𝗜𝗻𝗳𝗼: ${v6}`, 
					attachment: fs.createReadStream(__dirname + `/cache/vtuber.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vtuber.png`), event.messageID)
				}
    
 //   }
        request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/vtuber.png`)).on("close", callback)  
  } 
   else if (vtuber.title1){

let getURL = vtuber.image_url;


   if (!vtuber.title1 || vtuber.title1 === undefined) vtuber.title1 = "N/A";
  
    if (!vtuber.gender || vtuber.gender === undefined) vtuber.gender = "N/A";
  
  if (!vtuber.birthday || vtuber.birthday === undefined) vtuber.birthday = "N/A";

  if (!vtuber.height || vtuber.height === undefined) vtuber.height = "N/A";
   
  if (!vtuber.zodiac_sign || vtuber.zodiac_sign === undefined) vtuber.zodiac_sign = "N/A";
        if (!vtuber.official_website || vtuber.official_website === undefined) vtuber.official_website = "N/A";

var v1 = vtuber.title1;
var v2 = vtuber.caption1;
var v3 = vtuber.original_name;
var v4 = vtuber.nick_name.replace(/<br>/g, "\n");
var v5 = vtuber.debut_date;
var v6 = vtuber.character_designer;
var v7 = vtuber.affiliation;
var v8 = vtuber.gender;
var v9 = vtuber.age;
var v10 = vtuber.birthday;
var v11 = vtuber.official_website; 
var v12 = vtuber.height;
var v13 = vtuber.zodiac_sign;
var v14 = vtuber.description;
var v15 = vtuber.channel.replace(/<br>/g, "\n\n");
var v16 = vtuber.social_media.replace(/<br>/g, "\n\n");
var v17 = vtuber.more;

       let callback = function () {           
             
 api.sendMessage({
     body: `Name: ${v1}\nOriginal Name: ${v3}\nNick Name: ${v4}\nPopular Line: ${v2}\nDebut Date: ${v5}\nChar.Designer: ${v6}\nAffiliation: ${v7}\nGender: ${v8}\nAge: ${v9}\nBirthday: ${v10}\nHeight: ${v12}\nZodiac Sign: ${v13}\n\nDescription: ${v14}\n\nChannel Link(s): ${v15}\n\nSocial Media(s): ${v16}\n\nSource(s): ${v11}\n\nMore: ${v17}`,
					attachment: fs.createReadStream(__dirname + `/cache/vtuber.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vtuber.png`), event.messageID)
				}
    
 //   }
        request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/vtuber.png`)).on("close", callback)  
  } 
   else if (vtuber.nick_name){
      
    let getURL = vtuber.image_url;

 
var v1 = vtuber.nick_name.replace(/\x3c\x62\x72\x20\x2f\x3e/g, "\n");
var v2 = vtuber.debut_date;
var v3 = vtuber.character_designer;
var v4 = vtuber.affiliation.replace(/\x3c\x62\x72\x20\x2f\x3e/g, "\n");
var v5 = vtuber.channel;
var v6 = vtuber.gender;
var v7 = vtuber.age;
var v8 = vtuber.birthday;
var v9 = vtuber.height;
var v10 = vtuber.caption1;
var v11 = vtuber.zodiac_sign;
var v12 = vtuber.description;
var v13 = vtuber.social_media;
var v14 = vtuber.more;

  let callback = function () {           
             
 api.sendMessage({
     body: `Name: ${v1}\nDebut Date: ${v2}\nCharacter Designer: ${v3}\nAffiliation: ${v4}\nGender: ${v6}\nAge: ${v7}\nBirthday: ${v8}\nHeight: ${v9}\nPopular Line: ${v10}\nZodiac Sign: ${v11}\n\nDescription: ${v12}\n\nSocial Media(s): ${v13}\n\nChannel: ${v5}\n\nMore info(s): ${v14}`,
					attachment: fs.createReadStream(__dirname + `/cache/vtuber.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vtuber.png`), event.messageID)
      }

request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/vtuber.png`)).on("close", callback)  
  } 
    
}		
}