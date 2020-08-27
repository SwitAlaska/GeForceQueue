const fs = require('fs');
const user = "Swit"; // your windows user name

var time = 0;
var currentPos;
var lastPos;

reload();
function reload() {
	time += 2;
	fs.readFile("C:\\Users\\"+user+"\\AppData\\Local\\NVIDIA Corporation\\GeForceNOWStreamer\\debug.log", function read(err, data) {
		if (err) {
			throw err;
		}
		console.log("Loading the NVIDIA file...");
		var value = data + '';
		pos = value.split('onSessionSetupProgress(state: 1, queue:');
		currentPos = parseInt(pos[pos.length - 1].substring(0,4).replace(" ","").replace(",",""));
		//console.log("The game will be launched in "+Math.ceil(currentPos / (lastPos - currentPos) * 30)+" minute(s).");
		lastPos = currentPos;
		console.log("Queue position: "+currentPos+".");
	});
}

setInterval(reload, 2000);