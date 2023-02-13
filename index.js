#!/usr/bin/env node

import './utils/global.js';

// import logSymbols from "log-symbols";
import meow from 'meow';
import path from 'path';
import {ask} from './utils/ask.js';
import {debug} from './utils/debug.js';
import {dependencies} from './utils/dependencies.js';
import {helperText, options} from './utils/helper.js';
import {welcome} from './utils/welcome.js';
const __dirname = path.resolve();
welcome();
const cli = meow(helperText, options);
const input = cli.input;
const flags = cli.flags;

(async () => {
	input.includes('help') && cli.showHelp(0);
	//Debug info if nedeed.
	debug(flags.debug, input, flags);

	// const enquirer = new prompt();

	const response = await ask();
	response.version = '1.0.0';
	const isModelsRequired = new Confirm({
		name: 'question',
		message: 'Do you need sequelize models?'
	});
	isModelsRequired.run().then(answer => {
		// console.log('Answer:', answer);

		/**copy template */
		// console.log('Path', process.cwd());

		alert({
			type: 'info',
			name: `Path`,
			msg: `${process.cwd()}`
		});
		const spinner = ora('Creating files...\n').start();
		const vars = response;
		const projectDirName = response.name;
		const inDir = path.join(__dirname, `template`);
		const outDir = path.join(process.cwd(), projectDirName);
		copy(inDir, outDir, vars, async (err, createdFiles) => {
			spinner.color = 'yellow';
			// spinner.text = 'Creating files';
			if (err) throw err;
			createdFiles.forEach(filePath => {
				const fileName = path.basename(filePath);
				console.log(`Created ${fileName}`);
			});
			spinner.succeed(`Creating files It's done!
				\n${createdFiles.length} files created in ${dim(`./${projectDirName}`)} directory.`);
			await dependencies(outDir);

			alert({
				type: 'success',
				name: `All done`,
				msg: `\n Project ${dim(`${projectDirName}`)} created.`
			});
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
