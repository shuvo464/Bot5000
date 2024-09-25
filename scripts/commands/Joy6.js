const fs = require("fs");
module.exports = {
  config:{
	name: "Joy6",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("💏")==0 || body.indexOf("👩‍❤️‍💋‍👨")==0 || body.indexOf("💑")==0) {
		var msg = {
				body: "___💜🔐🌈 ___ 𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲"!! 🙂🧡✨🐰!<'— পূর্ণতা পাক পৃথিবীর সকল ভালোবাসা\nসুন্দর হোক সম্পর্কের শেষটা -!!-) 😊🖤🌻\n\n𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘",
				attachment: fs.createReadStream(__dirname + `/Joy/joy121.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
