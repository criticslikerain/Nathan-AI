
module.exports.config = {

	name: "image",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "Search an Image",
	commandCategory: "image",
	usages: "imagesearch [text]",
	cooldowns: 5,
	dependencies: {
		
		 "axios":"",
		 "fs-extra":"",
		"googlethis":"",
        "cloudscraper":""
	}
};




module.exports.run = async ({matches, event, api, extra, args}) => {
    const axios = global.nodemodule['axios'];
    const google = global.nodemodule["googlethis"];
const cloudscraper = global.nodemodule["cloudscraper"];
const fs = global.nodemodule["fs"];
try{
var query = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
  //let query = args.join(" ");
  api.sendMessage(`🔍𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗻𝗴 𝗳𝗼𝗿\n【 ${query} 】`, event.threadID, event.messageID);
  
  let result = await google.image(query, {safe: false});
  if(result.length === 0) {
    api.sendMessage(`⚠️𝘆𝗼𝘂𝗿 𝗶𝗺𝗮𝗴𝗲 𝘀𝗲𝗮𝗿𝗰𝗵 𝗱𝗶𝗱 𝗻𝗼𝘁 𝗿𝗲𝘁𝘂𝗿𝗻 𝗮𝗻𝘆 𝗿𝗲𝘀𝘂𝗹𝘁`, event.threadID, event.messageID)
    return;
  }
  
  let streams = [];
  let counter = 0;
  
  console.log(result)
  
  for(let image of result) {
    // Only show 9 images
    if(counter >= 9)
      break;
      
    console.log(`${counter}: ${image.url}`);
    
    // Ignore urls that does not ends with .jpg or .png
    let url = image.url;
    if(!url.endsWith(".jpg") && !url.endsWith(".png"))
      continue;
    
   let path = __dirname + `/cache/search-image-${counter}.jpg`;
    let hasError = false;
    await cloudscraper.get({uri: url, encoding: null})
      .then((buffer) => fs.writeFileSync(path, buffer))
      .catch((error) => {
        console.log(error)
        hasError = true;
      });
      
    if(hasError)
      continue;
    
    console.log(`Pushed to streams: ${path}`) ;
    streams.push(fs.createReadStream(path).on("end", async () => {
      if(fs.existsSync(path)) {
        fs.unlink(path, (err) => {
          if(err) return console.log(err);
            
          console.log(`Deleted file: ${path}`);
        });
      }
    }));
    
    counter += 1;
  }
  
  api.sendMessage("⏳𝘀𝗲𝗻𝗱𝗶𝗻𝗴 𝘀𝗲𝗮𝗿𝗰𝗵 𝗿𝗲𝘀𝘂𝗹𝘁𝘀 𝗽𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁", event.threadID, event.messageID)
  
  let msg = {
    body: `𝗶𝗺𝗮𝗴𝗲 𝘀𝗲𝗮𝗿𝗰𝗵 𝗿𝗲𝘀𝘂𝗹𝘁𝘀 𝗳𝗼𝗿\n【 ${query} 】`,
    attachment: streams
  };
  
  api.sendMessage(msg, event.threadID, event.messageID);
}catch(e){
  console.log("ERR: "+e)
  api.sendMessage("⚠️ERR: "+e, event.threadID, event.messageID);
}
};



  