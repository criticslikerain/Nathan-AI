module.exports.config = {
    name: "petmonsters",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Hercules !!!",
    description: "Sun bears are alone together :))",
    commandCategory: "game",
    usages: "-r/-s/-l/-p",
    cooldowns: 0,
    dependencies: {
        "request":"",
        "fs-extra":""
    }
};
/*==================== MESSAGE ======================*/
module.exports.run = ({ event, api, args, client, utils }) => {
    if (!args[0]) {
        api.sendMessage(`Please enter tags: -r/-s/-l/-p`, event.threadID);
    } else {
        switch(args[0]) {
            case "-r": {
            return api.sendMessage(
                "Sign Up Success !!!\nBro officially became a coach"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-r"
                });
            }, event.messageID);
        }
        case "-s": {
            return api.sendMessage(
                "==== SHOP PETMONSTERS ====\n1.FOOD\n2.WEAPONS\n3.Armor\n4.PET"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-s"
                });
            }, event.messageID);
        }
        case "-l": {
            return api.sendMessage(
                "1.PET FIRE SYSTEM\n2.WATER SYSTEM PET\n3.EARTH SYSTEM PET\n4.PET SYSTEM\n5.PET LIGHT SYSTEM\n6.PET SHOWER SYSTEM"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-l"
                });
            }, event.messageID);
        }
        case "-p": {
            return api.sendMessage(
                "Comming soon..."
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-p"
                });
            }, event.messageID);
        }
            default:
            return utils.throwError("petmonsters", event.threadID, event.messageID); break;
        }
    }
};
/*====================== REPLY =========================*/
module.exports.handleReply = async function({ api, event, handleReply, client }) {
  switch(handleReply.type) {
    case "-s":
      switch(event.body) {
        case "1":
        return api.sendMessage(
                "===[FOOD]===\n1.Fish(100$)\nDrop <3 to buy!!!\n2.Country(100$)\nDrop 👍 to buy!!!\n3.Fruit(100$)\nDrop 😢 to buy!!!"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "FOOD"
                });
            }, event.messageID);
        case "2":
          return api.sendMessage(
                "===[WEAPONS]===\n1.Sword\n2.Guns\n3.Shield"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "WEAPONS"
                });
            }, event.messageID);
          case "3":
          return api.sendMessage(
                "===[Armor]===\n1.Leather armor\n2.Comming soon..."
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "ARMOR"
                });
            }, event.messageID);
          case "4":
          return api.sendMessage("Comming soon...",  event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "PET"
                });
            }, event.messageID);
                  }
      case "-l":
      switch(event.body) {
        case "1":
        return api.sendMessage("Name: Three top dog\nGeneration: Fire\nBlood: 120\nAttack: 120\nSpecial skill: Breathe out fire", event.threadID); break;
        case "2":
          return api.sendMessage("Name: Three-Tailed Crocodile\nGeneration: Water\nBlood: 120\nAttack: 120\nSpecial skill: Spit out water", event.threadID); break;
          case "3":
          return api.sendMessage("Name: Bear Dog\nGeneration: Soil\nBlood: 120\nAttack: 120\nSpecial Skill: Earthquake", event.threadID); break;
          case "4":
          return api.sendMessage("Name: Giant Snake\nGeneration: Grass\nBlood: 120\nAttack: 120\nSpecial skill: Tied up the victim", event.threadID); break;
          case "5":
          return api.sendMessage("Name: Three Headed Dragon\nGeneration: Light\nBlood: 120\nAttack: 120\nSpecial Skill: Show off something white and white", event.threadID); break;
          case "6":
          return api.sendMessage("Name: Devil\nType: Darkness\nBlood: 120\nAttack: 120\nSpecial skill: Darkness covers, blind the opponent's eyes", event.threadID); break;
      }
  }
}