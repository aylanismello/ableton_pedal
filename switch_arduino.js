var five = require("johnny-five"),
	board = new five.Board();

var pinNumbers = [8, 10, 12];


board.on("ready", function() {
	var switchOne = new five.Switch(8);
	var switchTwo = new five.Switch(pinNumbers[1]);
	var switchThree = new five.Switch(pinNumbers[2]);

  switchOne.on("open", function() {
		console.log('switch' + 8 + ' is open');
  });

  switchOne.on("close", function() {
		console.log('switch' + 8 + 'is closed' );
  });


  // switchTwo.on("open", function() {
	// 	console.log('switch' + pinNumbers[1] + ' is open');
  // });
	//
  // switchTwo.on("close", function() {
	// 	console.log('switch' + pinNumbers[1] + 'is closed' );
  // });
	//
	//
  // switchThree.on("open", function() {
	// 	console.log('switch' + pinNumbers[2] + ' is open');
  // });
	//
  // switchThree.on("close", function() {
	// 	console.log('switch' + pinNumbers[2] + 'is closed' );
  // });



});
