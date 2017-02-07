const five = require("johnny-five");
const board = new five.Board();

var pinNumbers = [8, 10, 12];

const STATE_CONSTANTS = {
	UP: "UP",
	DOWN: "DOWN"
};


let pins = {
	8: {
		initialized: false,
		state: ""
	},
	10: {
		initialized: false,
		state: "",
	},
	12: {
		initialized: false,
		state: ""
	}
};

// we need to throw an error if after 2 seconds all pins are not initialized

const isInitialized = (thePins) => {
	return Object.keys(thePins).every(pin => thePins[pin].initialized);
};

const pinShape = pin => ({
	pin,
	isPullup: true
});

let initString;

board.on("ready", () => {
	const buttons = new five.Buttons([ pinShape(8), pinShape(10), pinShape(12) ]);

	setTimeout(() => {
		if(isInitialized(pins)) {
			console.log('initialized in 2 seconds!');
		} else {
			throw 'COULD NOT INITIALIZE. UNSTABLE STATE';
		}
	}, 2000)

	buttons.on("down", (thisButton) => {
		let downPin = thisButton.pin;

		if(!pins[downPin].initialized) {
			console.log('setting initial pin value');
			pins[downPin].initialized = true;
			pins[downPin].state = STATE_CONSTANTS.DOWN;
		} else {
			if (pins[downPin] !== STATE_CONSTANTS.DOWN) {
				console.log(`pin ${downPin} changed state`);
			}
		}
	});

	buttons.on("up", (thisButton) => {
		let upPin = thisButton.pin;

		if(!pins[upPin].initialized) {
			console.log('setting initial pin value');
			pins[upPin].initialized = true;
			pins[upPin].state = STATE_CONSTANTS.UP;
		} else {
			if (pins[upPin] !== STATE_CONSTANTS.UP) {
				console.log(`pin ${upPin} changed state`);
			}
		}
	});
});
