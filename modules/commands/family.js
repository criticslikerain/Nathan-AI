module.exports.config = {
    name: "family",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Nathaniel",
    description: "Create a photo of all members in the box",
    commandCategory: "Create a photo",
    usages: "family <size> [#color code] or family <size>\nEnter the appropriate member avatar size and color code for the text (default is black) according to the syntax:\n$family <size> <mã màu> <title>\nin which:\n•size: Size of each member's avatar\n•color code: hex color code\n•title: image title, default is box name\nEg: $family 200 #ffffff Brothers of one house\nIf you choose size = 0 will automatically adjust the size, if you do not enter the title, the title will be the box name",
    cooldowns: 5,
    dependencies: {
      "fs-extra": "", 
      "axios":"", 
      "canvas": "", 
      "jimp": "", 
      "node-superfetch": "",
      "chalk": ""
    }
};


module.exports.run = async ({ event, api, args }) => {
  var TOKEN = "6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  try {
    if(global.client.family == true) return api.sendMessage("The system is processing a request from another box, please come back later", event.threadID, event.messageID);
    global.client.family = true;
    var timestart = Date.now();
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    const { threadID, messageID } = event;
    const request = global.nodemodule["request"];
    const superfetch=global.nodemodule["node-superfetch"];
    if(!fs.existsSync(__dirname+'/cache/VNCORSI.ttf')) {
      let getfont = (await axios.get(`https://drive.google.com/uc?id=1q0FPVuJ-Lq7-tvOYH0ILgbjrX1boW7KW&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/VNCORSI.ttf", Buffer.from(getfont, "utf-8"));
    };
    
    if(!args[0] || isNaN(args[0]) == true || args[0] == "help") {
      if(!fs.existsSync(__dirname+"/cache/color1.png")) {
       let getimg = (await axios.get(`https://i.ibb.co/m9R36Pp/image.png`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/color1.png", Buffer.from(getimg, "utf-8"));
      }
      global.client.family = false;
    return api.sendMessage({body: "Enter the appropriate member avatar size and color code for the text (default is black) according to the syntax:\n$family <size> <color code> <title>\nIn which:\n•size: Size of each member's avatar\n•color code: hex color code\n•title: image title, default is box name if not filled in\nEg: $family 200 #ffffff Brothers of one house\nIf choose size = 0 then it will adjust the size automatically, if you don't enter the title, the title will be the box name",
    attachment: fs.createReadStream(__dirname+"/cache/color1.png")}, threadID, messageID);
    };
    
    
    const jimp = global.nodemodule["jimp"];
    const chalk = global.nodemodule["chalk"];
    const Canvas = global.nodemodule["canvas"];
  

    var threadInfo = await api.getThreadInfo(threadID);
    var arrob = threadInfo.adminIDs;
    var arrad = [];
    for(let qtv of arrob) {
      arrad.push(qtv.id)
    };
    const background = await Canvas.loadImage("https://i.ibb.co/QvG4LTw/image.png");
    
    var idtv = threadInfo.participantIDs;
  
    var xbground = background.width,
        ybground = background.height;


    var dem = 1;
    var tds = 200,
        s = parseInt(args[0]);//size
        //AUTO SIZE
    var mode = "";
    if(s == 0) {
      var dtich = xbground*(ybground-tds);
      var dtichtv = Math.floor(dtich/idtv.length);
      var s = Math.floor(Math.sqrt(dtichtv));
      mode += " (Auto size)"
    };
        //===============================
    var l =     parseInt(s/15),//lines
        x =     parseInt(l),//
        y =     parseInt(tds),//
        xcrop = parseInt(idtv.length*s),
        ycrop = parseInt(tds+s);
        console.log(s);
    s = s-l*2;
    //===============================
    
    var color = args[1];
    if(!color || !color.includes("#")) {
      color = "#FFFFFF";
      autocolor = true;
    };
        if(s > ybground || s > xbground) {
          global.client.family = false;
          return api.sendMessage(`Size avatar phải nhỏ hơn size background\nSize background: X: ${xbground}, Y: ${ybground}`, threadID, messageID);
        }
        api.sendMessage(`🔢Estimated number of photos: ${idtv.length}\n🆒 Background Size: ${xbground} x ${ybground}\n🆕Avatar Size: ${s}${mode}\n#️⃣Color: ${color}\n⏳Processing your request, it may take up to 1 minute to complete...`,threadID, messageID);
    var loadkhung = await Canvas.loadImage("https://i.ibb.co/H41cdDM/1624768781720.png");//("https://s1.uphinh.org/2021/06/24/1624551553171.png");
    var title = args.slice(2).join(" ") || threadInfo.name;
    var path_alltv = __dirname+`/cache/alltv${threadID}${Date.now()}.png`;
    function delay(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
    };
    const canvas = Canvas.createCanvas(xbground, ybground);
    let ctx = canvas.getContext('2d');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    var ngdung = 0;// counting acc die
    //======FOR LOOP DRAW AVATAR=====//
    
    for(let id of idtv) {
      console.log(dem, chalk.green("FAMILY: ")+"drawing id's avt "+id);
        try {
          var avatar = await superfetch.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=${TOKEN}`);
          if(avatar.url.includes(".gif")) {throw Error};
        }
        catch(e) {
            ngdung += 1;
            continue; 
        };

        if(x+s > xbground) {
          xcrop = x;
          x += (-x)+l;
          y += s+l;
          ycrop += s+l;
        };
        
        if(ycrop > ybground) {
          ycrop += (-s);
          break;
        }; 
      
        avatar = avatar.body;
        const img = new Canvas.Image();
        var avatarload = await Canvas.loadImage(avatar);
        img.src = avatarload;

        ctx.drawImage(avatarload, x, y, s, s);

        if(arrad.includes(id)) {
        ctx.drawImage(loadkhung, x, y, s, s);
        };
        console.log(chalk.green("Family: ")+"Đã vẽ avt của id "+id);
        dem++;
        img.onerror = err => { throw err };
        x += parseInt(s+l);
    };
   Canvas.registerFont(__dirname+"/cache/VNCORSI.ttf", {
        family: "Dancing Script"
    });
    ctx.font = "110px Dancing Script";
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.fillText(title, xcrop/2, 133);
    //ctx.beginPath();
    console.log(chalk.yellow("Convert to buffer..."));
    //const imageBuffer = canvas.toBuffer();

    console.log(chalk.blue(`Sucess X: ${xcrop}, Y: ${ycrop}`));
    try{//ktra auto cắt ảnh có bị lỗi hay ko
      const imagecut = await jimp.read(canvas.toBuffer());
      console.log("Đã đọc image", xcrop, ycrop);
      //=========== CUT IMAGE ===========//
      imagecut.crop(0, 0, xcrop, ycrop+l-30).writeAsync(path_alltv);
      console.log("Finished cropping the image and saved it in the cache");
      await delay(200);
       api.sendMessage({body: `🟦Number of photos: ${dem} (Filtered ${ngdung} Facebook users)\n🆒 Background Size: ${xbground} x ${ybground}\n🆕Avatar Size: ${s}${mode}\n⏱️Processing Time: ${Math.floor((Date.now()-timestart)/1000)} second`,
          attachment: fs.createReadStream(path_alltv, { 'highWaterMark': 128 * 1024 })
       }, threadID, (e, info) => {
         if(e) {
            api.sendMessage("An error occurred, please try again later", threadID, messageID);
         };
         fs.unlinkSync(path_alltv);
       }, messageID);
       global.client.family = false
    }
    catch(e) {
      console.log(e.stack);
      fs.writeFileSync(path_alltv, canvas.toBuffer());
       api.sendMessage({
        body: `An Auto cut error has occurred\n🟦Number of photos: ${dem}\n(Filtered ${ngdung} Facebook users)\n🆒Background Size: ${xbground} x ${ybground}\n🆕Avatar Size: ${s}${mode}\n⏱️Processing Time: ${Math.floor((Date.now()-timestart)/1000)} second`,
            attachment: fs.createReadStream(path_alltv, { 'highWaterMark': 128 * 1024 })
         }, threadID, (e, info) => {
           if(e) {
              api.sendMessage("An error occurred, please try again later", threadID, messageID);
           };
           fs.unlinkSync(path_alltv);
         }, messageID);
         global.client.family = false;
    }
  }
  catch(e) {global.client.family = false};
}
