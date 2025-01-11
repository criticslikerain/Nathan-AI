module.exports.config = {
  name: "ai",
  version: "2.0.8",
  hasPermssion: 0,
  credits: "Nathaniel",
  description: "AI",
  commandCategory: "utilities",
  usages: "nat [question]",
  cooldowns: 5,
  dependencies: {
        "openai": ""
    }
};
module.exports.run = async function({ api, event, args }) {

  
const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
                                apiKey: "", // API KEY NIMO HERE //
                            });
                            const openai = new OpenAIApi(configuration);
  let data = args.join(" ");
                            if (data.length < 2) {
                                api.sendMessage("Greetings, How can I help you?", event.threadID);
                            } 
                            else if (data.toLowerCase().includes("who is your owner?") || data.toLowerCase().includes("who created you") || data.toLowerCase().includes("who is your master?") || data.toLowerCase().includes("whos your master?") || data.toLowerCase().includes("who is your master") || data.toLowerCase().includes("who is your master?") || data.toLowerCase().includes("whos your tutor?") || data.toLowerCase().includes("who is your tutor?")  || data.toLowerCase().includes("who is your tutor")) {  
    api.sendMessage("My owner is Nathaniel inocando, he's my master!", event.threadID);
  }
else if (data.toLowerCase().includes("who are you") || data.toLowerCase().includes("what are you?")) {
    api.sendMessage("I'm NathanAI, I was Created,Modified and Fixed! by a single person named Nathaniel inocando. He's my real master and my tutor.", event.threadID);
  }
  else if (data.toLowerCase().includes("do you have a girlfriend") || data.toLowerCase().includes("do you have a girlfriend") || data.toLowerCase().includes("you have a gf?") || data.toLowerCase().includes("who is your girlfriend?") || data.toLowerCase().includes("do you have gf?") || data.toLowerCase().includes("do you have gf") ) {
    api.sendMessage("As an AI, I don't have feelings, so I don't have a preference for being an AI. I exist solely to assist with answering questions and providing information to the best of my abilities. \n Try considering intiating the command _𝗮𝗶 𝗡𝗮𝘁𝗵𝗮𝗻𝗚𝗙 and maybe it will answer your question.", event.threadID);
  }

    
  else if (data.toLowerCase().includes("NathanGF") || data.toLowerCase().includes("nathangf")) {
    api.sendMessage("Let's keep it a secret shall we 😉 \n It's 😜", event.threadID);
  }

     else if (data.toLowerCase().includes("clean logs") || data.toLowerCase().includes("remove logs")) {
    api.sendMessage("All log session has cleaned! 🗑️✨", event.threadID);
  }
       else if (data.toLowerCase().includes("bot test") || data.toLowerCase().includes("bot pool")) {
    api.sendMessage("Bot is ready!", event.threadID);
  }

                else if (data.toLowerCase().includes("leave gc threadid:6000072286687902") || data.toLowerCase().includes("leave Gc threadid:6000072286687902")) {
    api.sendMessage("Leaving GC... ADIOS!👋 ", event.threadID);
  }

                   else if (data.toLowerCase().includes("do you have ex?") || data.toLowerCase().includes("do you have ex")) {
    api.sendMessage("no, but i think my master does.", event.threadID);
  }
                              
                            else 
                            {
                                try {
                                    const completion = await openai.createCompletion({
                                        model: "text-davinci-003",
                                        prompt: args.join(" "),
                                        temperature: 0.5,
                                        max_tokens: 4000,
                                        top_p: 0.3,
                                        frequency_penalty: 0.5,
                                        presence_penalty: 0.0,
                                    });
                                    api.sendMessage(completion.data.choices[0].text, event.threadID, event.messageID);
                                }
                                catch (error) {
                                    if (error.response) {
                                        console.log(error.response.status);
                                        console.log(error.response.data);
                                    } else {
                                        console.log(error.message);
                                        api.sendMessage(error.message, event.threadID);
                                    }
                                }
                            }
                        }