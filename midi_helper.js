var easymidi = require('easymidi');
var output = new easymidi.Output('Ableton Arduio Pedal', true);

const triggerMidiOn = (note, aftertouch) => {
	output.send('noteon', {
		note: note,
		velocity: 127,
		channel: 3
	});
	
	if(aftertouch && (note === 8 || note === 12)) {
		// 10 is our play midi note, so
		// we are playing after we switch right away
		setTimeout(() => {
//			console.log('you want to disable this when setting the midi map at the beginning');
//			console.log('adding after-touch play to up-down scene switch');
			output.send('noteon', {
				note: 10,
				velocity: 127,
				channel: 3
			});
		}, 100)
	}

	console.log(`sent note ${note}`);
};

module.exports = {
	triggerMidiOn: triggerMidiOn
};
