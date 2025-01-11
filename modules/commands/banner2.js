module.exports.config = {
  name: "banner2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hanaku UwuU",
  description: "banner",
  commandCategory: "game",
  usages: "",
  cooldowns: 5
};
module.exports.run = async function({ api, args, event, permssion }) {
   const axios = require('axios');
   const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
  if(args[0] == "find" || args[0] == "tìm"){
    const t = (await axios.get(`${lengthchar[args[1]].imgAnime}`, {
        responseType: "stream"
      })).data;
    var msg = ({
      body: `CHARACTER ID ${args[1]}, Default COLOR ${lengthchar[args[1]].colorBg}`,
      attachment: t
    })
    return api.sendMessage(msg, event.threadID, event.messageID)
  }
  else if(args[0] == "list"){
    const alime = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Page (${page}/${numPage})\nUse ${global.config.PREFIX}${this.config.name} list <number of pages>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
  } else {
     };
   return api.sendMessage("Reply This Message To Select Char", event.threadID, (err, info) => {
    return global.client.handleReply.push({
      step: 1,
      name: this.config.name,
      author: event.senderID,
      messageID: info.messageID
    });
  }, event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const axios = require("axios");
  const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
  const fs = require("fs-extra");
  const request = require("request");
  if (event.senderID != handleReply.author) return api.sendMessage('CúC', event.threaID);
  const { loadImage, createCanvas, registerFont } = require("canvas");
  const path = require('path');
  const Canvas = require('canvas');
  console.log(lengthchar.length)
    let pathImg = __dirname + `/wall/avatar_1.png`;
    let pathAva = __dirname + `/wall/avatar_2.png`;
    let pathLine = __dirname + `/wall/avatar_3.png`;
    let pathLine2 = __dirname + `/wall/avatar_34.png`;
    let pathLine3 = __dirname + `/wall/avatar_33.png`;
    let pathLine4 = __dirname + `/wall/avatar_31.png`;
    let pathLine5 = __dirname + `/wall/avatar_32.png`;
    let pathLine6 = __dirname + `/wall/avatar_33.png`;
    let pathLine7 = __dirname + `/wall/avatar_3s3.png`;
    if (!fs.existsSync(__dirname +
      `/wall/MTOJamai.ttf`)) {
      let getfon2t = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/MTOJamai.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/wall/MTOJamai.ttf`, Buffer.from(getfon2t, "utf-8"));
    }
    if(handleReply.step == 1){
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`You have chosen a char whose sequence number is ${event.body}, reply to this message to enter your name`, event.threadID, (err, info) => {
    return global.client.handleReply.push({
      step: 2,
      name: this.config.name,
      chartid: event.body,
      author: event.senderID,
      messageID: info.messageID
    });
  }, event.messageID);
    } else if(handleReply.step == 2){
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`You have chosen ${event.body} as your name, reply to this message to enter the color you want`, event.threadID, (err, info) => {
    return global.client.handleReply.push({
      step: 3,
      name: this.config.name,
      chartid:handleReply.chartid,
      ten: event.body,
      author: event.senderID,
      messageID: info.messageID
    });
  }, event.messageID);
    } else if(handleReply.step == 3){
      api.unsendMessage(handleReply.messageID);
      const color = event.body;
      const id = handleReply.chartid;
      const title = handleReply.ten
      if(!color || color == "no" || color == "No"){
      var color_ = lengthchar[id].colorBg
    } else {
      var color_ = color
    }
let avtAnime = (
      await axios.get(encodeURI(`${lengthchar[id].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
    ///bg
    let bg1 = (
      await axios.get(encodeURI(`https://lh3.googleusercontent.com/-tZ8DTN-bXEY/YhScBI5VuSI/AAAAAAAA5QI/8OxatfQvJU8q4TWk8vo9OWawDRn0aQhOACNcBGAsYHQ/s0/a1.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(bg1, "utf-8"));
    //line
    let line1 = (
      await axios.get(encodeURI(`https://lh3.googleusercontent.com/-_GlhDWCWQLA/YhScA7so4UI/AAAAAAAA5QA/4NqayceKTTkbQrPT0Cu5TQCuEp-V95T3ACNcBGAsYHQ/s0/a2.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathLine, Buffer.from(line1, "utf-8"));
    //line
    let line2 = (
      await axios.get(encodeURI(`https://lh3.googleusercontent.com/-IiDSkRdLuK4/YhScA1Xd7WI/AAAAAAAA5QE/KlFoQuZpFc8W31A2C8-uUmXkpvLbmL6JQCNcBGAsYHQ/s0/a3.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathLine2, Buffer.from(line2, "utf-8"));
    //line
    let line7 = (
      await axios.get(encodeURI(`https://lh3.googleusercontent.com/-jagDZ8l1rwc/YhSbpTKubAI/AAAAAAAA5P4/GYy2WICTkHAM0AoJvYhsLc6asVsnbAR2wCNcBGAsYHQ/s0/l1.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathLine7, Buffer.from(line7, "utf-8"));
    //line
    let line3 = (
      await axios.get(encodeURI(`https://lh3.googleusercontent.com/-jagDZ8l1rwc/YhSbpTKubAI/AAAAAAAA5P4/GYy2WICTkHAM0AoJvYhsLc6asVsnbAR2wCNcBGAsYHQ/s0/l1.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathLine3, Buffer.from(line3, "utf-8"));
    //line
    let line4 = (
      await axios.get(encodeURI(`https://lh3.googleusercontent.com/-EE6U5xmi_QY/YhScRCT94XI/AAAAAAAA5QY/6WJM0j7URsgjisGTEN-tgOJ6NVx_Ql5-ACNcBGAsYHQ/s0/l2.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathLine4, Buffer.from(line4, "utf-8"));
    //line
    let line5 = (
      await axios.get(encodeURI(`https://lh3.googleusercontent.com/-hkTkESFE1OU/YhSdWD3kR_I/AAAAAAAA5Qk/Fw4rwDc5CxEaLacLatZJLT6FAnm5dNYYACNcBGAsYHQ/s0/b1.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathLine5, Buffer.from(line5, "utf-8"));
    //line
    let line6 = (
      await axios.get(encodeURI(`https://lh3.googleusercontent.com/-U-P92f1nTfk/YhSdVnqbEFI/AAAAAAAA5Qg/UgA37F2XTCY0u_Cu0fghfppITmPZIokFwCNcBGAsYHQ/s0/b2.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathLine6, Buffer.from(line6, "utf-8"));
     let a = await loadImage(pathAva)
    let a1 = await loadImage(pathImg)
    let a2 = await loadImage(pathLine)
    let a3 = await loadImage(pathLine2)
    let l1 = await loadImage(pathLine3)
    let l2 = await loadImage(pathLine4)
    let b1 = await loadImage(pathLine5)
    let b2 = await loadImage(pathLine6)
    let u = await loadImage(pathLine7)
    let canvas = createCanvas(1080, 1920);
    let c1 = createCanvas(canvas.width, canvas.height);
    let c2 = createCanvas(canvas.width, canvas.height);
    let c3 = createCanvas(canvas.width, canvas.height);
    let c4 = createCanvas(canvas.width, canvas.height);
    let ctx = canvas.getContext("2d");
    let ctx1 = c1.getContext("2d");
    let ctx2 = c2.getContext("2d");
    let ctx3 = c3.getContext("2d");
    let ctx4 = c4.getContext("2d");
    ctx1.save();
    ctx1.drawImage(a1, 0, 0, canvas.width, canvas.height);
    ctx1.globalCompositeOperation = "source-in";
    ctx1.drawImage(a, -100, -1000, 1700, 1700);
    ctx1.restore();
    ctx2.save();
    ctx2.drawImage(a2, 0, 0, canvas.width, canvas.height);
    ctx2.globalCompositeOperation = "source-in";
    ctx2.drawImage(a, -500, -500, 1700, 1700);
    ctx2.restore();
    ctx3.save();
    ctx3.drawImage(a3, 0, 0, canvas.width, canvas.height);
    ctx3.globalCompositeOperation = "source-in";
    ctx3.drawImage(a, -550, 700, 1900, 1900);
    ctx3.restore();
    ctx4.save();
    ctx4.drawImage(b2, 0, 0, canvas.width, canvas.height);
    ctx4.globalCompositeOperation = "source-in";
    ctx4.fillStyle = color_;
    ctx4.fillRect(0, 0, canvas.width, canvas.height);
    ctx4.globalCompositeOperation = "destination-atop";
    ctx4.drawImage(b1, 0, 0, canvas.width, canvas.height);
    ctx4.restore();
    ctx.save();
    ctx.fillStyle = color_;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(u, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(l1, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(c1, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(c2, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(c3, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(c4, -50, 130, 800, 800);
    ctx.drawImage(l2, 0, 0, canvas.width, canvas.height)
    ctx.restore();
    ctx.save();
    Canvas.registerFont(__dirname + `/wall/MTOJamai.ttf`, {
      family: "MTOJamai"
    });
    ctx.fillStyle = "#fff"
    ctx.font = "bold 80px MTO Jamai";
    ctx.transform(1, -0.1, 0, 1, 0, 0);
    ctx.textAlign = "center"
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 10;
    for (i = 0; i < 20; i++) {
      ctx.fillText(title, 370, 580);
      ctx.fillText(title, 370, 580 - 90);
      ctx.fillText(title, 370, 580 + 90);
    }
    ctx.restore();
    ctx.shadowColor = "#000000";
    ctx.shadowBlur = 10;
    ctx.drawImage(a, -150, 220, 1700, 1700)
   ctx.beginPath();
      const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
    return api.sendMessage({
    body: "Here's Your Photo",
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    fs.unlinkSync(pathLine),
    fs.unlinkSync(pathLine2),
    fs.unlinkSync(pathLine3), 
    fs.unlinkSync(pathLine4), 
    fs.unlinkSync(pathLine5), 
   // fs.unlinkSync(pathLine6),
    fs.unlinkSync(pathLine7),                       
    event.messageID
  );
    }
  } 

//translated by: SaikiDesu 