const five = require("johnny-five");
const board = new five.Board();

var pinNumbers = [8, 10, 12];
// var buttonStates = {8: true, 10: true, 12: true};

// 3 state variables for all pins

// poll time in onPress event

board.on("ready", () => {
	const buttons = new five.Buttons(pinNumbers);

	// buttons.forEach(button => console.log(button.downValue));

	buttons.on("press", (thisButton) => {
			console.log(`button ${thisButton.pin} is pressed!`);
	});

	buttons.on("release", (thisButton) => {
			console.log(`button ${thisButton.pin} is released!`);
	});


});
