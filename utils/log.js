const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF00FF").bold('[ 𝐄𝐑𝐑𝐎𝐑 ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF00FF").bold('[ 𝐄𝐑𝐑𝐎𝐑 ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#00BFFF").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FFFF").bold('[ CaNDY (LaFhanGa) ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#00FFFF").bold('[ CaNDY (LaFhanGa) ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF").bold(`[ CaNDY (LaFhanGa) ] » `) + data);
			break;
	}
	}