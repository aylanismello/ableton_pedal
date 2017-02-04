const five = require("johnny-five"),
	board = new five.Board();

const pinNumber = 12;

board.on("ready", () => {
	const mySwitch = new five.Switch(pinNumber);
	const led = new five.Led(13);

  mySwitch.on("open", () => {
		console.log('switch' + pinNumber + ' is open');
    led.off();
  });

  mySwitch.on("close", () => {
		console.log('switch' + pinNumber + 'is closed' );
    led.on();
  });

});
