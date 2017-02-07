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


// var buttonStates = {8: true, 10: true, 12: true};

// 3 state variables for all pins


// poll time in onPress event


board.on("ready", () => {

	const buttons = new five.Buttons([
	{
		pin: 8,
		isPullup: true

	}, {
		pin: 10,
		isPullup: true

	}, {
		pin: 12,
		isPullup: true

	}]);


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

		// console.log(pins);
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

		// console.log(pins);
	});


});
