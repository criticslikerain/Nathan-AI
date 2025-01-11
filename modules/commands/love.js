module.exports.config = {
  name: "love",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "candy",
  description: "random",
  commandCategory: "quotes",
  usages: "tag or none",
  cooldowns: 1
};

module.exports.run = async ({ api, event}) => {
 const { threadID, messageID, senderID } = event;
  
  const ZiaRein1 = [
    "Both people need to care deeply about the other person, to put the other’s needs before their own, and to make a daily commitment to that person to stick it out",
    "The more you love each other, the more you can be free",
    "If you want to have the kind of love that will make you happy, you need to create the kind of love that is right for you and your partner. It's a matter of making it",
    "Find someone who comforts you at your worst and relishes you at your best",
    "Love and be loved in return, but don’t make your love conditional on being loved back",
    "You need to learn to be true to yourself. You deserve great things, But do you know that? Do you believe that?",
    "All the love you want and much more can be yours! Don't quit before the miracle",
    "When you stop expecting people to be perfect, you can like them for who they are",
    "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed",
    "Your task is not to seek love, but merely to seek and find all the barriers within yourself that you have built against it",
    "The beginning of love is to let those we love be perfectly themselves, and not to twist them to fit our own image. Otherwise, we love only the reflection of ourselves we find it them zia rein",
    "There are two kinds of sparks, the one that goes off with a hitch like a match, but it burns quickly. The other is the kind that needs time, but when the flame strikes… it's eternal, don't forget that",
    "One day, someone will walk into your life and make you see why it never worked out with anyone else",
    "When it’s time for souls to meet, there’s nothing on earth that can prevent them from meeting, no matter where each may be located. When two hearts are meant for each other, no distance is too far, no time is too long, and no other love can break them apart",
    "A friend is someone who knows the song in your heart and can sing it back to you when you have forgotten the words",
    "Friends can help each other. A true friend is someone who lets you have total freedom to be yourself and especially to feel. Or, not feel. Whatever you happen to be feeling at the moment is fine with them. That's what real love amounts to – letting a person be what they really are",
    "True friendship comes when the silence between two people is comfortable",
    "Keep the past in the past",
    "Look at actions more than words",
    "Love is the triumph of imagination over intelligence",
    "Tis better to have loved and lost than never to have loved at all",
    "Yet it is only love which sets us free",
    "There is only one happiness in life, to love and to be loved",
    "Love is like the wind, you can’t see it but you can feel it",
    "Love is composed of a single soul inhabiting two bodies",
    "Love is the poetry of the senses",
    "We are most alive when we’re in love",
    "Love is friendship that has caught fire",
    "Love is an endless act of forgiveness",
    "If I know what love is, it is because of you zia rein",
  ];
   const ZiaRein2 = [
    "Love the life you live. Live the life you love",
    "We love the things we love for what they are",
    "Never set limits when you are loving someone",
    "Love does not dominate; it cultivates",
    "Love is the whole thing. We are only pieces",
    "To love and be loved is to feel the sun from both sides",
    "Life is the flower for which love is the honey",
    "You always gain by giving love",
    "The smile is the beginning of love",
    "At the touch of love everyone becomes a poet",
    "The giving of love is an education in itself",
    "Absence sharpens love, presence strengthens it",
    "Love is what you’ve been through with somebody",
    "Love is a thing that is full of cares and fears",
    "You call it madness, but I call it love",
    "Love is not love until love’s vulnerable",
    "When we love, we always strive to become better than we are",
    "Love all, trust a few, do wrong to none",
    "Love is the ultimate expression of the will to live",
    "Tell me whom you love and I will tell you who you are",
    "Love is what makes the ride worthwhile",
    "Love is not a volunteer thing",
    "Love is shown more in deeds than in words",
    "Love brings to life whatever is dead around us",
    "Love is not affectionate feeling, but a steady wish for the loved person’s ultimate good as far as it can be obtained",    
    "Love is when the other person’s happiness is more important than your own",
    "It’s easy to fall in love. The hard part is finding someone to catch you",
    "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope",
    "Love means never having to say you’re sorry",
    "The greater your capacity to love, the greater your capacity to feel the pain",
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