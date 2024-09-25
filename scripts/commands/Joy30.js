const fs = require("fs");
module.exports = {
  config:{
	name: "Joy30",
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
	if (body.indexOf(" ")==0 || body.indexOf("🖤")==0 || body.indexOf("🤭")==0 || body.indexOf("🫢")==0) {
		var msg = {
				body: "𝐍𝐞𝐯𝐞𝐫 𝐜𝐡𝐚𝐧𝐠𝐞 𝐲𝐨𝐮𝐫 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐭𝐲\nযে ভালোবাসার সে তোমাকে তোমার মতোইভালোবাসবে\n\n𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘",
				attachment: fs.createReadStream(__dirname + `/Joy/tafriyaefa.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
