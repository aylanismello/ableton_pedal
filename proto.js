const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    // console.log(`You pressed the "${str}" key`);
    // console.log();

		switch(str) {
			case '1':
				console.log('up!');
				break;
			case '2':
				console.log('down!');
				break;
			case '3':
				console.log('play!');
				break;
		}

    // console.log(key);
    // console.log();
  }
});
console.log('Press any key...');
