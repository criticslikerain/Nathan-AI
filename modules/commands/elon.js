module.exports.config = {
	name: "elon",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "elon [text]",
	commandCategory: "edit-image",
	usages: "elon [text]",
	cooldowns: 10,
	dependencies: {
		"canvas":"",
		 "axios":"",
		 "fs-extra":""
	}
};

module.exports.saikiiWrap = (ctx, text, maxWidth) => {
	return new Promise(resolve => {
		if (ctx.measureText(text).width < maxWidth) return resolve([text]);
		if (ctx.measureText('W').width > maxWidth) return resolve(null);
		const words = text.split(' ');
		const lines = [];
		let line = '';
		while (words.length > 0) {
			let split = false;
			while (ctx.measureText(words[0]).width >= maxWidth) {
				const temp = words[0];
				words[0] = temp.slice(0, -1);
				if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
				else {
					split = true;
					words.splice(1, 0, temp.slice(-1));
				}
			}
			if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
			else {
				lines.push(line.trim());
				line = '';
			}
			if (words.length === 0) lines.push(line.trim());
		}
		return resolve(lines);
	});
} 

module.exports.run = async function({ api, event, args }) {
 if (this.config.credits != '\u0053\u0061\u0069\u006b\u0069\u0044\u0065\u0073\u0075') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » \u0050\u0061\u006c\u0069\u0074 \u0063\u0072\u0065\u0064\u0069\u0074\u0073 \u0061\u006d\u0070\u0074 \u006c\u0061\u006b\u0061\u0073 \u006e\u0067 \u006c\u006f\u006f\u0062 '+ global.config.BOTNAME + ', \u0042\u006f\u0062\u006f \u006d\u006f \u0050\u0061\u006b\u0079\u0075"' + this.config.name + '"');
        return api.sendMessage('[ \u0057\u0041\u0052\u004e ] \u0044\u0065\u0074\u0065\u0063\u0074 \u0062\u006f\u0074 \u006f\u0070\u0065\u0072\u0061\u0074\u006f\u0072 \u0073\u0074\u0065\u0061\u006c\u0069\u006e\u0067 \u0073\u006f\u006d\u0065 \u0063\u006f\u0064\u0065\u0073 \n\n' + __dirname + '/\u0065\u006c\u006f\u006e\u002e\u006a\u0073', event.threadID, event.messageID);
      }
	let { senderID, threadID, messageID } = event;
	const { loadImage, createCanvas } = require("canvas");
	const fs = global.nodemodule["fs-extra"];
	const axios = global.nodemodule["axios"];
	let pathImg = __dirname + '/cache/elon.png';
	var text = args.join(" ");
	if (!text) return api.sendMessage("Enter the content of the comment on the board", threadID, messageID);
	let getPorn = (await axios.get(`https://i.imgur.com/GGmRov3.png`, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(pathImg, Buffer.from(getPorn, 'utf-8'));
	let baseImage = await loadImage(pathImg);
	let canvas = createCanvas(baseImage.width, baseImage.height);
	let ctx = canvas.getContext("2d");
	ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
	ctx.font = "320 30px Arial";
	ctx.fillStyle = "#000000";
	ctx.textAlign = "start";
	let fontSize = 220;
	while (ctx.measureText(text).width > 2600) {
		fontSize--;
		ctx.font = `320 ${fontSize}px Arial, sans-serif`;
	}
	const lines = await this.saikiiWrap(ctx, text, 1160);
	ctx.fillText(lines.join('\n'), 40,115);//comment
	ctx.beginPath();
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
return api.sendMessage({ attachment: fs.createReadStream(pathImg) }, threadID, () => fs.unlinkSync(pathImg), messageID);        
}