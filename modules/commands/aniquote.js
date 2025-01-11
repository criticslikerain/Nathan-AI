module.exports.config = {
  name: "aniquote",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nathaniel",
  description: "random anime",
  commandCategory: "quotes",
  usages: "tag or none",
  cooldowns: 1
};

module.exports.run = async ({ api, event}) => {
 const { threadID, messageID, senderID } = event;
  
  const ZiaRein1 = [
    "People’s lives don’t end when they die, it ends when they lose faith\n\n~ Itachi Uchiha\n(Naruto Shippuden)",
    "If you don’t take risks, you can’t create a future\n\n~ Monkey D. Luffy\n(One Piece)",
    "If you don’t like your destiny, don’t accept it\n\n~ Naruto Uzumaki\n(Naruto Shippuden)",
    "When you give up, that’s when the game ends\n\n~ Mitsuyoshi Anzai\n(Slam Dunk)",
    "All we can do is live until the day we die. Control what we can…and fly free\n\n~ Deneil Young\n(Uchuu Kyoudai)",
    "Forgetting is like a wound. The wound may heal, but it has already left a scar\n\n~ Monkey D. Luffy\n(One Piece)",
    "It’s just pathetic to give up on something before you even give it a shot\n\n~ Reiko Mikami\n(Another)",
    "If you don’t share someone’s pain, you can never understand them\n\n~ Nagato Uzumaki\n(Naruto Shippuden)",
    "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back\n\n~ Himura Kenshin\n(Rurouni Kenshin)",
    "We don’t have to know what tomorrow holds! That’s why we can live for everything we’re worth today\n\n~ Natsu Dragneel\n(Fairy Tail)",
    "Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?\n\n~ Juuzou Suzuya\n(Tokyo Ghoul)",
    "People become stronger because they have memories they can’t forget\n\n~ Tsunade\n(Naruto Shippuden)",
    "I’ll leave tomorrow’s problems to tomorrow’s me\n\n~ Saitama\n(One Punch Man)",
    "If you wanna make people dream, you’ve gotta start by believing in that dream yourself\n\n~ Seiya Kanie\n(Amagi Brilliant Park)",
    "Being lonely is more painful then getting hurt\n\n~ Monkey D. Luffy\n(One Piece)",
    "There’s no shame in falling down! True shame is to not stand up again\n\n~ Shintaro Midorima\n(Kuroko’s Basketball)",
    "Simplicity is the easiest path to true beauty\n\n~ Seishuu Handa\n(Barakamon)",
    "If you can’t do something, then don’t. Focus on what you can\n\n~ Shiroe\n(Log Horizon)",
    "It doesn’t do any good to pretend you can’t see what’s going on\n\n~ Yuuya Mochizuki\n(Another)",
    "Being weak is nothing to be ashamed of… Staying weak is\n\n~ Fuegoleon Vermillion\n(Black Clover)",
    "Don’t beg for things. Do it yourself, or else you won’t get anything\n\n~ Renton Thurston\n(Zia Rein)",
    "People who can’t throw something important away, can never hope to change anything\n\n~ Armin Arlelt\n(Attack on Titan)",
    "We can’t waste time worrying about the what if’s\n\n~ Ichigo Kurosaki\n(Bleach)",
    "Sometimes it’s necessary to do unnecessary things\n\n~ Kanade Jinguuji\n(Best Student Council)",
    "An excellent leader must be passionate because it’s their duty to keep everyone moving forward\n\n~ Nico Yazawa\n(Love Live)",
    "Protecting someone means giving them a place to belong. Giving them a place where they can be happy\n\n~ Princess Lenessia\n(Log Horizon)",
    "Thinking you’re no good and worthless is the worst thing you can do\n\n~ Doraemon\n(Doraemon)",
    "If you can’t do something, then don’t. Focus on what you can do\n\n~ Shiroe\n(Log Horizon)",
    "When you lose sight of your path, listen for the destination in your heart\n\n~ Allen Walker\n(D.Gray Man)",
    "Life is not a game of luck. If you wanna win, work hard\n\n~ Sora\n(No Game No Life)",
  ];
   const ZiaRein2 = [
    "No matter how hard or impossible it is, never lose sight of your goal\n\n~ Monkey D Luffy\n(One Piece)",
    "The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful\n\n~ Roy Mustang\n(Full Metal Alchemist)",
    "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder\n\n~ Gildarts Clive\n(Fairy Tail)",
    "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have\n\n~ Matsumoto Rangiku\n(Bleach)",
    "Knowing you’re different is only the beginning. If you accept these differences you’ll be able to get past them and grow even closer\n\n~ Miss Kobayashi\n(Dragon Maid)",
    "If nobody cares to accept you and wants you in this world, accept yourself and you will see that you don’t need them and their selfish ideas\n\n~ Alibaba Saluja\n(Magi)",
    "When you hit the point of no return, that’s the moment it truly becomes a journey. If you can still turn back, it’s not really a journey\n\n~ Hinata Miyake\n(A Place Further than the Universe)",
    "Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But of course it will! Whoever wins this war becomes justice\n\n~ Don Quixote Doflamingo\n(One Piece)",
    "A person grows up when he’s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own\n\n~ Jiraiya\n(Naruto Shippuden)",
    "Mistakes are not shackles that halt one from stepping forward. Rather, they are that which sustain and grow one’s heart\n\n~ Mavis Vermillion\n(Fairy Tail)",
    "It’s not always possible to do what we want to do, but it’s important to believe in something before you actually do it\n\n~ Might Guy\n(Naruto Shippuden)",
    "Moving on doesn’t mean you forget about things. It just means you have to accept what’s happened and continue living\n\n~ Erza Scarlet\n(Fairy Tail)",
    "Don’t be upset because of what you can’t do. Do what you do best, live as carefree and optimistically as you can, because some people aren’t able to do that\n\n~ Keima Katsuragi\n(The World God Only Knows)",
    "Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don’t desire, but they’re inevitable, we have to face them. It’s what being human is all about\n\n~ Jet Black\n(Cowboy Bebop)",
    "A lesson without pain is meaningless. That’s because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart\n\n~ Edward Elric\n(Fullmetal Alchemist: Brotherhood)",
    "You need to accept the fact that you’re not the best and have all the will to strive to be better than anyone you face\n\n~ Roronoa Zoro\n(One Piece)",
    "You can’t win a game by doing nothing. And if someone else wins it for you then you haven’t accomplished anything. Life is the same way\n\n~ Junichirou Kagami\n(Denpa Kyoushi)",
    "Just like games, no matter how well you have things lined up in your life, there’s always something to keep you on your toes\n\n~ Junichirou Kagami\n(Denpa Kyoushi)",
    "Do exactly as you like. That is the true meaning of pleasure. Pleasure leads to joy and joy leads to happiness\n\n~ Gilgamesh\n(Fate Zero)",
    "Do not think about other things, there is only one thing you can do. So master that one thing. Do not forget. What you must imagine is always that you, yourself, are the strongest. You do not need outside enemies. For you, the one you have to fight is none other than your own image\n\n~ Archer\n(Fate Stay Night)",
    "You’ll only realize that you truly love someone if they already caused you enormous pain. Your enemies can never hurt you the way your loved ones can. It’s the people close to your heart that can give you the most piercing wound. Love is a double-edged sword, it can heal the wound faster or it can sink the blade even deeper\n\n~ Himura Kenshin\n(Rurouni Kenshin)",
    "The concept of hope is nothing more than giving up. A word that holds no true meaning\n\n~ Madara Uchiha\n(Naruto Shippuden)",
    "The longer you live… The more you realize that reality is just made of pain, suffering and emptiness\n\n~ Madara Uchiha\n(Naruto Shippuden)",
    "When a man learns to love, he must bear the risk of hatred\n\n~ Madara Uchiha\n(Naruto Shippuden)",
    "Life is a happening puzzle in our early days, but as we grow more and more old, we start to realize the meaning of life and the pattern with which it goes on. It actually is nothing but creation, followed by preservation and then destruction\n\n~ Madara Uchiha\n(Naruto Shippuden)",    
    "You will never be able to love anybody else until you love yourself\n\n~ Lelouch Lamperouge\n(Code Geass)",
    "There’s no way we could meet. But one thing is certain. If we see each other, we’ll know. That you were the one who was inside me. That I was the one who was inside you\n\n~ Mitsuha Miyamizu\n(Kimi No Nawa)",
    "Treasure the experience. Dreams fade away after you wake up\n\nHitoha Miyamizu\n(Kimi No Nawa)",
    "I wanted to tell you that… Wherever you may end up in this world, I will be searching for you\n\n~ Taki Tachibana\n(Kimi No Nawa)",
    "Death isn’t kind. It’s dark and black and as far as you… As far as you can see you’re all alone. There’s no one else\n\n~ Mei Misaki\n(Another)",
   ];
var mention = Object.keys(event.mentions);

 var ZiaRein3 = ['1', '2'];
 var ZiaRein = ZiaRein3[Math.floor(Math.random() * ZiaRein3.length)];

if (Object.keys(event.mentions).length == 1) {
  if (ZiaRein == 2 ) {
      api.sendMessage(`Send a message to ${event.mentions[mention].replace("@", "")}:\n${ZiaRein2[Math.floor(Math.random() * ZiaRein2.length)]}`,threadID, messageID);
  }
  if (ZiaRein == 1 ) {
      api.sendMessage(`Send a message to ${event.mentions[mention].replace("@", "")}:\n${ZiaRein1[Math.floor(Math.random() * ZiaRein1.length)]}`, threadID, messageID);
  }
}
else {
  if (ZiaRein == 2) {
   api.sendMessage(`${ZiaRein2[Math.floor(Math.random() * ZiaRein2.length)]}`,threadID, messageID); 
  }
  if (ZiaRein == 1 ) {
   api.sendMessage(`${ZiaRein1[Math.floor(Math.random() * ZiaRein1.length)]}`, threadID, messageID);
  }
}

}