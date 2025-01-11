module.exports.config = {
	name: "banner",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Raiku",
	description: "generates banner with lots of characters available",
  commandCategory: "game",
	usages: "{number}|{name1}|{name2}|{name3}|{color}",
    cooldowns: 5
};
module.exports.run = async ({ api, event,args }) =>  {
  const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0] || "21";
  const text2 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[1] || "";
  const text3 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[2] || "";
  const text4 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[3] || "";
  const color = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[4] || "";
  
    const { loadImage, createCanvas } = require("canvas");
    const fs = require('fs')
    const request = require('request');
    const path = require('path');
    const axios = require('axios');
    const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
    const Canvas = require('canvas');
    let pathImg = __dirname + `/tad/avatar_1.png`;
    let pathAva = __dirname + `/tad/avatar_2.png`;
    let avtAnime = (
      await axios.get(encodeURI(`${lengthchar[text1 - 1].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
    let background = (await axios.get(encodeURI(`https://imgur.com/Ch778s2.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
     if (!fs.existsSync(__dirname +
      `/tad/PastiOblique-7B0wK.otf`)) {
      let getfon2t = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/PastiOblique-7B0wK.otf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/PastiOblique-7B0wK.otf`, Buffer.from(getfon2t, "utf-8"));
    };
         if (!fs.existsSync(__dirname +
      `/tad/gantellinesignature-bw11b.ttf`)) {
      let getfon3t = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/gantellinesignature-bw11b.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/gantellinesignature-bw11b.ttf`, Buffer.from(getfon3t, "utf-8"));
    };
        if (!fs.existsSync(__dirname +
      `/tad/UTM%20Bebas.ttf`)) {
      let getfon3t2 = (await axios.get(`https://github.com/hanakuUwU/font/blob/main/UTM%20Bebas.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/UTM%20Bebas.ttf`, Buffer.from(getfon3t2, "utf-8"));
    };
    if(color == "no" || color == "No" || color == ""){
     color_ = lengthchar[text1 - 1].colorBg
    } else {
      color_ = color
    }
    let a = await loadImage(pathImg);
    let ab = await loadImage(pathAva);
    let canvas = createCanvas(a.width, a.height);
    let ctx = canvas.getContext("2d");
     ctx.fillStyle = "#e6b030";
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     ctx.drawImage(ab, 1500, -400, 1980, 1980);
     ctx.textAlign = "start";
  Canvas.registerFont(__dirname + `/tad/PastiOblique-7B0wK.otf`, {
    family: "PastiOblique-7B0wK"
  });
    ctx.fillStyle = color_ 
    ctx.font = "370px PastiOblique-7B0wK";
    ctx.fillText(text2, 500, 750);
    ctx.textAlign = "start";
  Canvas.registerFont(__dirname + `/tad/gantellinesignature-bw11b.ttf`, {
    family: "gantellinesignature-bw11b"
  });
    ctx.fillStyle = "#fff"
    ctx.font = "350px gantellinesignature-bw11b";
    ctx.fillText(text3, 500, 680);
    ctx.save();
     Canvas.registerFont(__dirname + `/tad/UTM%20Bebas.ttf`, {
    family: "Bebas"
  });
    ctx.textAlign = "end";
    ctx.fillStyle = "#f56236"
    ctx.font = "145px PastiOblique-7B0wK";
    ctx.fillText(text4, 2100, 870);
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
     fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `Here's Your Photo`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
 }