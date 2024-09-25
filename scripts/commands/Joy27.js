const fs = require("fs");
module.exports = {
  config:{
	name: "Joy27",
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
	if (body.indexOf(" ")==0 || body.indexOf("😥")==0 || body.indexOf("😢")==0 || body.indexOf("😮‍💨")==0) {
		var msg = {
				body: "পৃথিবীতে প্রত্যেকটা মানুষের\nহৃদয়ে ব্যথা আছে\nশুধু প্রকাশ করার ধরন টা আলাদা….!.!\n\n𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘",
				attachment: fs.createReadStream(__dirname + `/Joy/joy56.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
