const fs = require("fs");
module.exports = {
  config:{
	name: "Joy34",
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
	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("☺️")==0 || body.indexOf("😊")==0) {
		var msg = {
				body: "︵❛❛༎💚︵\n🌺🦋🦋🌺-যে তােমার রাগ অভিমান আলাদা করে বুঝবে😊\n-সে তােমাকে দিনশেষে একবার হলেও খুজবে\n🥰🥀🌹︵❛❛༎💚🌺︵❛❛༎💚︵\n\𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘",
				attachment: fs.createReadStream(__dirname + `/Joy/joysad123.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
