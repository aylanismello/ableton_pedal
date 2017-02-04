var five = require("johnny-five"),
	board = new five.Board();

var pinNumber = 12;
var lastState;
var currentState;



board.on("ready", function() {
	var mySwitch = new five.Switch(pinNumber);
	var led = new five.Led(13);
	// lastState = mySwitch.isOpen;
	// currentState = mySwitch.isOpen;
	//
	// setInterval(() => {
	//
	// 	if(currentState !== lastState) {
	// 		const stateString = (currentState.isOpen ? 'is open' : 'is closed');
	// 		console.log('state change detected' + stateString);
	// 		lastState = currentState;
	// 	}
	// 	currentState = mySwitch.isOpen;
	// 	// console.log('switch is open?' + mySwitch.isOpen);
	//
	// }, 100);


	//
  mySwitch.on("open", function() {
		console.log('switch' + pinNumber + ' is open');
    led.off();
  });

  mySwitch.on("close", function() {
		console.log('switch' + pinNumber + 'is closed' );
    led.on();
  });

});
