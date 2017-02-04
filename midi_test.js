var easymidi = require('easymidi');
var output = new easymidi.Output('Ableton Arduio Pedal', true);
// output.send('noteon', {
//   note: 64,
//   velocity: 127,
//   channel: 3
// });

//
// const loopIt = () => {
// 	setInterval(() => {
// 		console.log('going to send noteone event');
// 		output.send('noteon', {
// 		  note: 60,
// 		  velocity: 127,
// 		  channel: 3
// 		});
// 		console.log('sent.');
// 	}, 1000);
//
// };

const triggerMidiOn = (note) => {
	output.send('noteon', {
		note: note,
		velocity: 127,
		channel: 3
	});
	console.log(`sent note ${note}`);
};
//

// loopIt();
module.exports = {
	// loopIt: loopIt,
	triggerMidiOn: triggerMidiOn
};
