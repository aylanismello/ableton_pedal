var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var spdt = new five.Switch(8);
  var led = new five.Led(13);

	led.blink(500);

  spdt.on("open", function() {
		console.log('open');
    led.off();
  });

  spdt.on("close", function() {
		console.log('closed');
    led.on();
  });
});
