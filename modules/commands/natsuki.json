module.exports.config = {
  name: "natsuki",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "chinhle & Re-Made by SaikiDesu",
  description: "Tạo ra một avt trên taoanhdep.",
  commandCategory: "tạo ảnh",
  cooldowns: 0,
  dependencies: {
      "fs-extra": "",
      "request": "",
      "axios": "",
      "node-fetch": ""
        }
};

module.exports.run = async function ({ api, args, event}) {
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodmodule["axios"];
  const fetch = global.nodemodule["node-superfetch"];
var text = args.join(" ");
	var background = ["bedroom","class","closet","club","corridor","house","kitchen","residential","sayori_bedroom"];
	var body = ["1b","1","2b","2"];
	var face = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1t","2bt","2bta","2btb","2btc","2btd","2bte","2btf","2btg","2bth","2bti","2t","2ta","2tb","2tc","2td","2te","2tf","2tg","2th","2ti"];
	if (text === "") {
		api.sendMessage("input keyword", event.threadID, event.messageID)
		}	
 else {
		//try {
			var fetchdata = await fetch(`https://nekobot.xyz/api/imagegen?type=ddlc&character=natsuki&background=${background[Math.floor(Math.random() * background.length)]}&body=${body[Math.floor(Math.random() * body.length)]}&face=${face[Math.floor(Math.random() * face.length)]}&text=${text}`)
			var json = await fetchdata.json();
			if (json.success == true) {
				var fetchimage = await fetch(json.message);
				var buffer = await fetchimage.buffer();
					var imagesx = new streamBuffers.ReadableStreamBuffer({
						frequency: 1,
						chunkSize: 8192
					});
					imagesx.path = 'image.png';
					imagesx.put(buffer);
					imagesx.stop();

					return {
						handler: "internal",
						data: {
							attachment: ([imagesx])
						}
					}
			} else {
				return {
					handler: "internal",
					data: "Status code: "+ json.status
				}
			}
		} 
  
  /*catch (err){ 
console.log(err)
    }*/


	//}
      }