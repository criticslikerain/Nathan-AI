  
module.exports.config = {
  name: "info",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "nathaniel",
  description: "info bot owner",
  commandCategory: "system",
  hide:true,
  usages: "",
  cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
    const data = [
      "You can't find the admin command at 'help' of MintBot",
      "Don't expect anything from MintBot.",
      "This part? Of SpermBot.",
      "If you want to avoid errors, use the commands in help because the error commands are hidden.",
      "This is a bot embedded by the coders of MiraiProject.",
      "If you want to know Mint's birthday, use 'birthday'.",
      "Cock.",
      "Fuck off.",
      "Cunt.",
      "You don't know yet.",
      "You already know.",
      "You will know.",
      "Nothing is perfect, MintBot is an example.",
      "Mirai dropped.",
      "MintBot is MiraiProject but module is SpermBot's idea.",
      "You don't know how to use MintBot? Stop using it.",
      "Want to play the game? It's not free to play through other bots",
      "MintBot can understand women but can't have them.",
      "MintBot weights spam but nothing worth spamming."
    ];
    var link = [
      "https://i.imgur.com/K2LIEyw.jpeg",
    ];
    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++} ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++} ${name1} - ${idNDH} `);
                }
            }
    var callback = () => 
      api.sendMessage({ body: `🌹𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍FO 🌹
─────────────────\n♪♪♪♪♪♪♪『${namebot}』.♪♪♪♪♪♪♪\n─────────────────\n» Prefix system: ${PREFIX}\n» Prefix box: ${prefix}\n» Modules: ${commands.size}\n» Ping: ${Date.now() - dateNow}ms\n» Total users: ${global.data.allUserID.length} \n» Total threads: ${global.data.allThreadID.length} ─────────────────\n╭───────────╮\n🌻 𝙤𝙬𝙣𝙚𝙧 Nathaniel 🌻\n╰───────────╯ ╭────────────╮\n🥀𝙗𝙤𝙩 𝙖𝙙𝙢𝙞𝙣-Nat² 💞 \n╰────────────╯\n🍇𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙖𝙘𝙘𝙤𝙪𝙣𝙩🍇\n───────────────── https://www.facebook.com/nathaniel.inocando\n─────────────────`, attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg")).on("close", () => callback()); 
  }
};