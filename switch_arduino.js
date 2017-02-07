var five = require("johnny-five"),
	board = new five.Board();

var pinNumbers = [8, 10, 12];
var pinNumber = 8;

board.on("ready", function(){

	// const switches = five.Switches(pinNumbers);

	var mySwitch = five.Switch(pinNumber);

	console.log(`initializing switch ${pinNumber}`);
	// Object.keys(mySwitch).forEach(key => {
	// 	console.log(mySwitch[key]);
	// })
	// console.dir(`${mySwitch}`);

	mySwitch.on("open", function() {
		console.log(`switch ${pinNumber} is open`);
	});

	mySwitch.on("close", function() {
		console.log(`switch ${pinNumber} is closed`);
	});

	// switches.on("open", (mySwitch) => {
	// 	console.log(`${mySwitch.pin} open`);
	// });
	//

	// mySwitch.on("close", () => {
	// 	console.log(`switch 8 is close`);
	// });


	// switches.on("open", (currentSwitch) => {
	// 	console.log(currentSwitch.pin);
	// 	console.log('open');
	// });
	//
	// switches.on("close", (currentSwitch) => {
	// 	console.log(currentSwitch.pin);
	// 	console.log('closed');
	// });

	// var switchOne = new five.Switch(8);
	// var switchTwo = new five.Switch(pinNumbers[1]);
	// var switchThree = new five.Switch(pinNumbers[2]);
	//
  // switchOne.on("open", function() {
	// 	console.log('switch' + 8 + ' is open');
  // });
	//
  // switchOne.on("close", function() {
	// 	console.log('switch' + 8 + 'is closed' );
  // });


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
