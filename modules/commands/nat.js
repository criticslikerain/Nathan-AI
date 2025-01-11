
module.exports.config = {
    name: "nat",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "Nat²", 
    description: "Chat with the best AI Chat - Simsimi by Simcard",
    commandCategory: "Ai - chatbot",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
}


async function simsimi(a, b, c) {
    const d = global.nodemodule.axios, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://api.simsimi.net/v2/?text=${g(a)}&lc=en&cf=false&name=Eri&key=C.IQHPE1cSfZFev-EhpwRbndXxcD9YGdTlbGReM`, method: "GET" });
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
    if (0 == c.length) return f("\u26a0\ufe0f\u0059\u006f\u0075 \u0068\u0061\u0076\u0065 \u006e\u006f\u0074 \u0065\u006e\u0074\u0065\u0072\u0065\u0064 \u0074\u0068\u0065 \u006d\u0065\u0073\u0073\u0061\u0067\u0065");
    switch (c[0]) {
        case "on":
            return global.simsimi.has(d) ? f("\u26a0\ufe0f\u0059\u006f\u0075 \u0068\u0061\u0076\u0065 \u006e\u006f\u0074 \u0074\u0075\u0072\u006e\u0065\u0064 \u006f\u0066\u0066 \u0074\u0068\u0065 \u0073\u0069\u006d\u002e\n\n\u004d\u0061\u0064\u0065 \u0062\u0079\u003a \u004a\u006f\u0068\u006e \u0050\u0061\u0075\u006c \u0043\u0061\u0069\u0067\u0061\u0073") : (global.simsimi.set(d, e), f("\u2705\u0053\u0075\u0063\u0063\u0065\u0073\u0073\u0066\u0075\u006c\u006c\u0079 \u0065\u006e\u0061\u0062\u006c\u0065\u0064 \u0073\u0069\u006d\u002e"));
        case "off":
            return global.simsimi.has(d) ? (global.simsimi.delete(d), f("\u2705\u0054\u0068\u0065 \u0073\u0069\u006d \u0068\u0061\u0073 \u0062\u0065\u0065\u006e \u0073\u0075\u0063\u0063\u0065\u0073\u0073\u0066\u0075\u006c\u006c\u0079 \u0074\u0075\u0072\u006e\u0065\u0064 \u006f\u0066\u0066.")) : f("\u26a0\ufe0f\u0059\u006f\u0075 \u0068\u0061\u0076\u0065 \u006e\u006f\u0074 \u0074\u0075\u0072\u006e\u0065\u0064 \u006f\u006e \u0074\u0068\u0065 \u0073\u0069\u006d\u002e\n\n\u004d\u0061\u0064\u0065 \u0062\u0079 \u004a\u006f\u0068\u006e \u0050\u0061\u0075\u006c \u0043\u0061\u0069\u0067\u0061\u0073");
        default:
            var { data: g, error: h } = await simsimi(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.success ? f(g.error) : f(g.success);
    }
};
