#!/usr/bin/env node

import './utils/global.js';

// import logSymbols from "log-symbols";
import meow from 'meow';
import {debug} from './utils/debug.js';
import {helperText, options} from './utils/helper.js';
import {welcome} from './utils/welcome.js';
welcome();
const cli = meow(helperText, options);
const input = cli.input;
const flags = cli.flags;

(async () => {
	input.includes('help') && cli.showHelp(0);
	//Debug info if nedeed.
	debug(flags.debug, input, flags);

	// const enquirer = new prompt();
	const response = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your project name?'
		}
	]);
	console.log(response);

	const isModelsRequired = new Confirm({
		name: 'question',
		message: 'Do you need sequelize models?'
	});
	isModelsRequired.run().then(answer => {
		console.log('Answer:', answer);

		/**copy template */
		console.log('__dirname', process.cwd());
		const vars = {name: response.name};
		const inDir = path.join(process.cwd(), `template`);
		const outDir = path.join(process.cwd(), `output`);
		copy(inDir, outDir, vars, (err, createdFiles) => {
			if (err) throw err;
			createdFiles.forEach(filePath => console.log(`Created ${filePath}`));
			console.log('done!');
		});
	});

	/**Create a directory */
	// -const {stdout} = await execa('touch', ['leeme.md']);
	// const {stdout} = await execa('mkdir', [`${response.name}`]);
	// console.log(stdout);

	// const stringPath = `${__dirname}\\template`

	/**Animation */
	// setTimeout(() => {
	// const spinner = ora('Loading unicorns').start();
	// 	spinner.color = 'yellow';
	// 	spinner.text = 'Loading rainbows';
	// 	spinner.succeed('Its done');
	// }, 1000);
})();
