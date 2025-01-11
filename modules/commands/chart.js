module.exports.config = {
	name: "chart",
	version: "1.0",
	hasPermssion: 0,
	credits: "Nathaniel",
	description: "Create interactive diagrams with top 8 groups",
	commandCategory: "Box Chat",
	usages: "",
	cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  var KMath = (data) => data.reduce((a, b) => a + b, 0);
    var inbox = await api.getThreadList(100, null, ['INBOX']);
    let xx = [...inbox].filter(group => group.isSubscribed && group.isGroup);
         var kho = [],search=[],count = [];
             for (let n of xx) {
          var threadInfo = n.name;
                     var threadye = n.messageCount;
             kho.push({"name" : threadInfo, "exp": (typeof await threadye == "undefined") ? 0 : await threadye});
     }
     kho.sort(function (a, b) { return b.exp - a.exp; });
        for(let num = 0; num < 8; num++) {
             search.push("'" + kho[num].name + "'");
         count.push(kho[num].exp);
     }
     const { createReadStream, unlinkSync, writeFileSync,statSync } = require("fs-extra");
         var axios = require('axios');
             var path = __dirname + `/cache/chart.png`;
                 var full = await KMath(count);
                 var url = `https://quickchart.io/chart?c={type:'doughnut',data:{labels:[${encodeURIComponent(search)}],datasets:[{label:'${encodeURIComponent('Tương Tác')}',data:[${encodeURIComponent(count)}]}]},options:{plugins:{doughnutlabel:{labels:[{text:'${full}',font:{size:26}},{text:'${encodeURIComponent('Total')}'}]}}}}`;
             const { data: stream } = await axios.get(url, {  method: 'GET',  responseType: 'arraybuffer' });
         writeFileSync(path, Buffer.from(stream, 'utf-8'));
     return api.sendMessage({ body: '',attachment: createReadStream(path)},event.threadID,event.messageID);
};
