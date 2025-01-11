const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download" 
module.exports.config = {
  name: "cardinfo7",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",//wag nyo change credits mga bwakanangshit
  description: "create card info",
  commandCategory: "info",
  cooldowns: 2,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  if ((this.config.credits) != "Joshua Sy") { return api.sendMessage(`Ulol change credits pa bobo`, event.threadID, event.messageID)}
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/${senderID}123${threadID}.png`;
  let pathAvata = __dirname + `/cache/avtuserrd.png`;
  /*                 */
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await api.getUserInfoV2(uid);  
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=1449557605494892|aaf0a865c8bafc314ced5b7f18f3caa6`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/rqbC4ES.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);v
  ctx.drawImage(baseAvata, 910, 465, 229, 229);
  /*var tenchinh = req.query.name
    var location = req.query.location
    var fl = req.query.fl
    var birthday = req.query.birthday
    var subname = req.query.gioitinh
    var love = req.query.love
    var uid = req.query.uid
    var link = req.query.link
    var hometown = req.query.hometown */
    var gender = res.gender == 'male' ? "Male" : res.gender == 'female' ? "Female" : "not found";
    var birthday = res.birthday == "Không Có Dữ Liệu" ? "Not Found" : `${res.birthday}`;
    var love = res.relationship_status == "Không Có Dữ Liệu" ? "Not Found" : `${res.relationship_status}`;
    var fl = res.follow == "Không Có Dữ Liệu" ? "Not Found" : `${res.follow}`;
    var location = res.location.name == "Không Có Dữ Liệu" ? "Not Found" : `${res.location}`;
    var hometown = res.hometown.name == "Không Có Dữ Liệu" ? "Not Found" : `${res.hometown}`;
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `35px Play-Bold`;
  ctx.fillStyle = "#00FFFF";
  ctx.textAlign = "start";
  fontSize = 60;
  ctx.fillText(`Name: ${res.name}`, 340, 560);
  ctx.fillText(`Sex: ${gender}`, 1245, 448);
  ctx.fillText(`Follow: ${fl}`, 1245, 505);
  ctx.fillText(`Relationship: ${love}`, 1245, 559);
  ctx.fillText(`Birthday: ${birthday}`, 1245, 616);
  ctx.fillText(`Location: ${location}`, 1245, 668);
  ctx.fillText(`Hometown: ${hometown}`, 1245, 723);
    ctx.font = `28px Play-Bold`;
  ctx.fillStyle = "#FFCC33";
  ctx.textAlign = "start";
  fontSize = 60;
  ctx.fillText(`UID: ${uid}`, 814, 728);
  ctx.beginPath();
  ctx.font = `28px TUVBenchmark`;
  ctx.fillStyle = "#00FF00";
  ctx.textAlign = "start";
  fontSize = 60;  
  ctx.fillText(`Profile: ${res.link}`, 32, 727);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};