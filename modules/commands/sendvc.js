module.exports.config = {
  name: "sendvc",
  version: "2.0.8",
  hasPermssion: 0,
  credits: "Nathaniel",
  description: "sends verification code on ml",
  commandCategory: "utilities",
  usages: "sendvc [gamerid]",
  cooldowns: 5,
  dependencies: {
        "axios": ""
    }
};
module.exports.run = async function({ api, event, args }) {

const axios = require('axios');

       let gameid = args.join(" ");          
    if (!gameid) {
                            api.sendMessage("❌Invalid Use Of Command!\n💡Usage: !sendvc id", event.threadID);
                        } else {
                            try {
                                function sendvc(gameid) {
                                    (async () => {
                                        try {
                                            const response = await axios.get('https://api.mobilelegends.com/mlweb/sendMail?roleId=' + gameid.toString() + '&language=en');
                                            const msgs = ('{"9601": "Error sending and receiving vcode","-20023": "Invalid Game ID","-20027":"Request too Frequent!...","-20028":"Verification code already sent...","-20010":"Invalid Verification Code!","0":"Verification Code Sent Successfully!","1401":"redeem in specified zone","1402":"This CDKey does not exist","1403":"CDKey expired","1404":"Incorrect format of CDKey","1405":"This CDKey has been redeemed.","1406":"Bound Account CDKey. Incorrect account.","1407":"Exceeds exchange amount limit.","1408":"Can only redeem in specified zone.","1409":"Restriction Requirement Configuration Error","1410":"This CDKey is being redeemed by many players. The Server is processing... Please try again later.","1411":"It\'s not exchange time, please wait.","1412":"Limit reached for number of people exchanging.","1413":"You are not a new user","1414":"You haven\'t purchased yet","1415":"Your level is too high","1416":"You can not redeem the CDKey through your channel","1036":"The amount limitation of CDKey redeemption"}');
                                            let responses = JSON.parse(msgs);
                                            let resp = response.data.code;
                                            let respcode = resp.toString();
                                            let msg = responses[respcode];
                                            let stat = response.data.status;
                                            api.sendMessage("💠Kaiden Sender Code\n\n🆔Game Id: " + gameid + "\n🔰Status: " + stat + "\n📧Message: " + msg + "", event.threadID, event.messageID);
                                        } catch (error) {
                                            console.log("ERR: "+error);
                                        }
                                    })();
                                }
                                api.sendMessage("📤Sending Verification Code...(" + args[0] + ")", event.threadID, event.messageID);
                                sendvc(args[0]);
                            } catch (err) {
                                api.sendMessage("❌Error: " + err.message, event.threadID, event.messageID);
                            }
                        }                                         
       
                        }