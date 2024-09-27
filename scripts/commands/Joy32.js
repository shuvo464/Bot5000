const fs = require("fs");
module.exports = {
  config:{
	name: "Joy32",
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
	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("🌺")==0) {
		var msg = {
				body: "___ღ۵-🦋🌺🦋\nসেই মানুষটাকে জীবনে রেখে দাও🌸🥀..||\nযেই মানুষটা শত ব্যস্ততার মাঝেও তোমাকে মনে রাখে🥰C🤗..||\n🌻.প্রিয় সারাজীবন এইভাবে পাশে থেকো🥰\n\n𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘",
				attachment: fs.createReadStream(__dirname + `/Joy/Joy.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
