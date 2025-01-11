module.exports.config = {
    name: "ali",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "Nathaniel",
    description: "chat via simsimi",
    commandCategory: "other",
    usages: `Please add some context\n\nHow to use?\n${global.config.PREFIX}ali <context>\n\nExample:\n${global.config.PREFIX}ali how are you\n`,
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
}


async function simsimi(a, b, c) {
    const d = global.nodemodule.axios, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://api.simsimi.net/v2/?text=${g(a)}&lc=en&cf=false&name=Eri&key=CIQHPE1cSfZFev-EhpwRbndXxcD9YGdTlbGReM`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global && (global = {}), "undefined" == typeof global.simsimi && (global.simsimi = new Map);
};
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
      let bot = global.config.OTHERBOT;
  
    if (global.simsimi.has(c) && !bot.includes(a.senderID)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.simsimi.get(c)) return;
        var { data: h, error: i } = await simsimi(f, b, a);
        return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.success)
   }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f(`Please add some context\n\nHow to use?\n${global.config.PREFIX}chat <context>\n\nExample:\n${global.config.PREFIX}chat how are you\n\n Created by: Natnat`);
            var { data: g, error: h } = await simsimi(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.success ? f(g.error) : f(g.success);
    };
