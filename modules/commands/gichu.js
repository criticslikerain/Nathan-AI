module.exports.config = {
  name: "ghichu",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Nathaniel",
  description: "Upload the file to buildtool.dev and apply the code from buildtool.dev",
  commandCategory: "Utilities",
  cooldowns: 0
};

module.exports.run = async function ({ api, event,args }) {
  const request = require('request')
  const cheerio = require('cheerio');
  const fs = require('fs')
  const { threadID, messageID } = event;
  const content = args.join(' ');
  if(!content) return api.sendMessage('Missing data!', threadID, messageID);
  if(content.endsWith(".js") || content.endsWith(".json")) {
    var data = await fs.readFile(
      `${__dirname}/${content}`,
      "utf-8",
      async function (err, data) {
        if (err) return api.sendMessage(`⚠️File not found: "${content}".`, threadID, messageID);
        await builtooldev(data)
      }
    );
  }
  else if(event.type == "message_reply" && (event.messageReply.body.indexOf('https://buildtool.') !== -1 || event.messageReply.body.indexOf('https://tinyurl.com') !== -1)) {
    if(!args[0]) return api.sendMessage('Please enter the file name you want to apply the new code!', threadID, messageID);
    const options = {
      method: 'GET',
      url: event.messageReply.body
    };
    request(options, function (error, response, body) {
      if(error) return api.sendMessage('Please only reply to the link (contains nothing but links)', threadID, messageID);
      const load = cheerio.load(body);
      load('.language-js').each((index, el) => {
        if(index !== 0) return;
        var code = el.children[0].data
        fs.writeFile(`${__dirname}/${args[0]}.js`, code, "utf-8",
          function(err) {
            if (err) return api.sendMessage(`An error occurred while applying the new code to "${args[0]}.js".`);
            return api.sendMessage(`Added this code to "${args[0]}.js".`, threadID, messageID);
          }
        );
      });
    });
  }
  else {
    await builtooldev(content)
  }
  async function builtooldev(content) {
    const options = {
        method: 'POST',
        url: 'https://buildtool.dev/verification',
        headers: {
          'cookie': 'paste_submitted=yes; last_code_class=language-js; last_page_link=code-viewer.php%3Fpaste%3D097ba7.language-js'
        },
        form: {
          'content': content,
          'code_class': 'language-js'
        }
    };
    request(options, function (error, response, body) {
      if(error) return api.sendMessage('An error has occurred!', threadID, messageID);
      const $ = cheerio.load(body);
      $('a').each((index, el) => {
      if(index !== 0) return;
        return api.sendMessage(`Here's your link: https://buildtool.dev/${el.attribs.href}`, threadID,
            async function(error, info) {
                if(error) return await shortLink(el.attribs.href)
            }, messageID);
      });
    });
  }
  async function shortLink(link) {
    const turl = require('turl');
    turl.shorten('https://buildtool.dev/' + link).then((res) => {
      return api.sendMessage(`Due to the restriction, please send shortened link: ${res}`, threadID, messageID);
    }).catch((err) => {
      return api.sendMessage(`Remove spaces: https://buildtool. dev/${link}`, threadID, messageID);
    });
  }
}