module.exports.config = {
	name: "infoip",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "get info of ip address",
  usages: "[ip address]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://ostch.herokuapp.com/api/v1/iplookup?q=${juswa}`);
var ip = res.data.ip;
var c = res.data.country;
var r = res.data.region;
var c1 = res.data.city;
var l = res.data.latitude;
var l1 = res.data.longtitude;
var m = res.data.maps;
return api.sendMessage(`IP: ${ip}\nCountry: ${c}\nCity: ${c1}\nRegion: ${r}\nLatitude: ${l}\nLongtitude: ${l1}\nGoogle Map: ${m}`, event.threadID, event.messageID)
}