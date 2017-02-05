const five = require("johnny-five");
const board = new five.Board();

var pinNumbers = [8, 10, 12];


// 3 state variables for all pins


board.on("ready", () => {
	const button = new five.Button(8);
	const buttons = new five.Buttons(pinNumbers);

	buttons.on("press", (thisButton) => {
		console.log('button' + thisButton.pin + ' is pressed!');
	});

	// button.on("press", () => {
	// 	console.log('button pressed!');
	// });

});
