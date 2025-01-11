module. exports. config = {
    name: "autoreset",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Nathaniel",
    description: "AUTO RESTART",
    commandCategory: "System",
    cooldowns: 5
}
module. exports. handleEvent = async function({ api, event, args, Users,Threads }) {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Manila").format("HH:mm:ss");
  var idad = global.config.ADMINBOT;    
  console.log(timeNow)
  var seconds = moment.tz("Asia/Manila").format("ss");
  var timeRestart_1 = `12:00:${seconds}`
  var timeRestart_2 = `11:00:${seconds}`
  var timeRestart_3 = `10:00:${seconds}`
  var timeRestart_4 = `09:00:${seconds}`
  var timeRestart_5 = `08:00:${seconds}`
  var timeRestart_6 = `07:00:${seconds}`
  var timeRestart_7 = `06:00:${seconds}`
  var timeRestart_8 = `05:00:${seconds}`
  var timeRestart_9 = `04:00:${seconds}`
  var timeRestart_10 = `03:00:${seconds}`
  var timeRestart_11 = `02:00:${seconds}`
  var timeRestart_12 = `01:00:${seconds}`
  //console.log(timeNowRestart)
  if ((timeNow == timeRestart_1 || timeNow == timeRestart_2 || timeNow == timeRestart_3|| timeNow == timeRestart_4|| timeNow == timeRestart_5|| timeNow == timeRestart_6 || timeNow == timeRestart_7|| timeNow == timeRestart_8|| timeNow == timeRestart_9|| timeNow== timeRestart_10|| timeNow== timeRestart_11|| timeNow == timeRestart_12) && seconds < 6 ) {
    for( let ad of idad) {
  setTimeout(() =>
          api.sendMessage(`⚡️Now it's: ${timeNow}\nNathanAI will restart!!!`,ad, () =>process.exit(1)), 1000);
    }
    }
}
module. exports. run = async  ({ api, event, args }) => {
      const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Manila").format("HH:mm:ss");
        api.sendMessage(`${timeNow}`, event.threadID)
}