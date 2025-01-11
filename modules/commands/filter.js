/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/


module.exports.config = {
    name: "filter",
    version: "2.0.0",
    hasPermssion: 1,
    credits: "ProCoderMew",
    description: "\u0046\u0069\u006c\u0074\u0065\u0072 \u0046\u0061\u0063\u0065\u0062\u006f\u006f\u006b \u0055\u0073\u0065\u0072 ",
    commandCategory: "filter box",
    usages: "",
    cooldowns: 300
}
module.exports.run = async function({ api: a, event: b }) {
    var { userInfo: c, adminIDs: d } = await a.getThreadInfo(b.threadID), f = 0, e = 0, g = [];
    for (const d of c) void 0 == d.gender && g.push(d.id);
    return d = d.map((a) => a.id).some((b) => b == a.getCurrentUserID()), 0 == g.length ? a.sendMessage("\u0049\u006e \u0079\u006f\u0075\u0072 \u0067\u0072\u006f\u0075\u0070 \u0064\u006f\u0065\u0073 \u006e\u006f\u0074 \u0065\u0078\u0069\u0073\u0074 \u0027\u0046\u0061\u0063\u0065\u0062\u006f\u006f\u006b \u0055\u0073\u0065\u0072'.", b.threadID) : a.sendMessage("\u0045\u0078\u0069\u0073\u0074\u0069\u006e\u0067 \u0067\u0072\u006f\u0075\u0070 \u006f\u0066 \u0066\u0072\u0069\u0065\u006e\u0064\u0073 " + g.length + " '\u0046\u0061\u0063\u0065\u0062\u006f\u006f\u006b \u0075\u0073\u0065\u0072\u0073'.", b.threadID, function() {
        return d ? a.sendMessage("\u0053\u0074\u0061\u0072\u0074 \u0066\u0069\u006c\u0074\u0065\u0072\u0069\u006e\u0067...\n\n\u004d\u0061\u0064\u0065 \u0062\u0079 \u004d\u0072\u002e\u0041\u0069\u006b\u0033\u0072\u006f", b.threadID, async function() {
            for (const c of g) try {
                await new Promise((a) => setTimeout(a, 1e3)),
                await a.removeUserFromGroup(parseInt(c), b.threadID),
                f++
            } catch (a) {
                e++
            }
            a.sendMessage("\u2705 \u0046\u0069\u006c\u0074\u0065\u0072\u0065\u0064 \u0073\u0075\u0063\u0063\u0065\u0073\u0073\u0066\u0075\u006c\u006c\u0079 " + f + " \u0070\u0065\u006f\u0070\u006c\u0065\u0073.", b.threadID, function() {
                if (0 != e) return a.sendMessage("\u274e \u0046\u0069\u006c\u0074\u0065\u0072\u0065\u0064 \u0046\u0061\u0069\u006c\u0065\u0064 " + e + " \u0070\u0065\u006f\u0070\u006c\u0065\u0073.", b.threadID)
            })
        }) : a.sendMessage("\u0042\u0075\u0074 \u0062\u006f\u0074 \u0069\u0073 \u006e\u006f\u0074 \u0061\u0064\u006d\u0069\u006e \u0073\u006f \u0069\u0074 \u0063\u0061\u006e\u0027\u0074 \u0066\u0069\u006c\u0074\u0065\u0072.", b.threadID)
    })
};