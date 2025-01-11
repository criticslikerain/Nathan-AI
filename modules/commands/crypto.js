module.exports.config = {
	name: "crypto",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "daily update about crypto coin",
	commandCategory: "utility",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const fs = require('fs-extra');
const request = require('request');

//let song = args.join(" ");

  var type;
  switch(args[0]) {
    case "bitcoin":
    case "Bitcoin":
    case "BTC":
    case "btc":
    type = "btc-bitcoin";
    break;
    case "ethereum":
    case "thereum":
    case "ETH":
    case "eth":
    type = "eth-ethereum";
    break;
    case "tether": 
    case "Tether":
    type = "usdt-tether";
    break;
    case "binance":
    case "Binance":
    case "Bnb":
    case "BNB":
    type = "bnb-binance-coin";
    break;
    case "USD Coin":
    case "usd coin":
    case "USD":
    type = "usdc-usd-coin";
    break;
    case "hex":
    case "HEX":
    type = "hex-hex";
    break;
    case "solana":
    case "Solana":
    case "SOL":
    case "sol":
    type = "sol-solana";
    break;
    case "Xrp":
    case "xrp":
    case "XRP":
    type = "xrp-xrp";
    break;
    case "terra":
    case "Terra":
    case "Luna":
    case "luna":
    type = "luna-terra";
    break;
    case "ada":
    case "ADA":
    case "cardano":
    case "Cardano":
    type = "ada-cardano";
    break;
    case "ust":
    case "UST":
    case "terrausd":
    case "Terrausd":
    type = "ust-terrausd";
    break;
    case "doge":
    case "DOGE":
    case "dogecoin":
    case "Dogecoin":
    type = "doge-dogecoin";
    break;
    default:
    return api.sendMessage(`⚠️Please put type of crypto coin.\n\nLists of Coin Available:\nBitcoin\nEthereum\nTether\nBinance\nUSD Coin\nHEX\nSolana\nXRP\nTerra\nADA\nUST\nDOGE`, event.threadID, event.messageID);
    break;
  }

//const res = await 

axios.get(`https://api.coinpaprika.com/v1/ticker/${type}`).then(res => {

var name = res.data.name;
var symbol = res.data.symbol;
var rank = res.data.rank;
var price_usd = res.data.price_usd;
var price_btc = res.data.price_btc;
var percent_24h = res.data.percent_change_24h;

var callback = function () {
 api.sendMessage({ body:`Name: ${name}\nSymbol: ${symbol}\nRank: ${rank}\nUSD Price: ${price_usd}\nBTC Price: ${price_btc}\nPercent: ${percent_24h}`, attachment: fs.createReadStream(__dirname + '/cache/c.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/c.jpg'), event.messageID);
				};
				request(`https://static.coinpaprika.com/coin/${type}/logo.png?rev=10557311`).pipe(fs.createWriteStream(__dirname + `/cache/c.jpg`)).on("close", callback);
                 })
  }