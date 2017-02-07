const MidiTest = require('./midi_test.js');
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);


process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    // console.log(`You pressed the "${str}" key`);
    // console.log();

		switch(str) {
			case '1':
				console.log('up!');
        MidiTest.triggerMidiOn(60);
				break;
			case '2':
				console.log('down!');
        MidiTest.triggerMidiOn(61);
				break;
			case '3':
				console.log('play!');
        MidiTest.triggerMidiOn(62);
				break;
		}

    // console.log(key);
    // console.log();
  }
});
console.log('Press any key...');
