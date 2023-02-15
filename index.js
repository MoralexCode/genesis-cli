#!/usr/bin/env node

import './utils/global.js';
import meow from 'meow';
import path from 'path';
import {ask} from './utils/ask.js';
import {debug} from './utils/debug.js';
import {dependencies} from './utils/dependencies.js';
import {helperText, options} from './utils/helper.js';
import {welcome} from './utils/welcome.js';
welcome();
const cli = meow(helperText, options);
const input = cli.input;
const flags = cli.flags;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

(async () => {
	input.includes('help') && cli.showHelp(0);
	//Debug info if nedeed.
	debug(flags.debug, input, flags);
	const response = await ask();
	response.version = '1.0.0';
	const isModelsRequired = new Confirm({
		name: 'question',
		message: 'Do you need sequelize models?'
	});
	isModelsRequired.run().then(answer => {
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
})();
