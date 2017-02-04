const five = require("johnny-five"),
	board = new five.Board();

const MidiTest = require('./midi_test.js');
const pinNumbers = [8, 10, 12];
const pinNumber = pinNumbers[2];

let switches = {};

board.on("ready", () => {
	const mySwitch = new five.Switch(pinNumber);

	mySwitch.on("open", () => {
		console.log('switch' + pinNumber + ' is open');
		// MidiTest.triggerMidiOn(pinNumber);
	});

	mySwitch.on("close", () => {
		console.log('switch' + pinNumber + ' is closed');
		// MidiTest.triggerMidiOn(pinNumber);
	});




	// pinNumbers.forEach((pinNumber) => {
	// 	switches[pinNumber] = new five.Switch(pinNumber);
	//
		// switches[pinNumber].on("open", () => {
		// 	console.log('switch' + pinNumber + ' is open');
		// 	// MidiTest.triggerMidiOn(pinNumber);
	  // });
		//
		// switches[pinNumber].on("close", () => {
		// 	console.log('switch' + pinNumber + ' is closed');
		// 	// MidiTest.triggerMidiOn(pinNumber);
	  // });
		//
	// });


});
