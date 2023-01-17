import chalk from 'chalk';
export const {green, yellow, cyan, dim, bold} = chalk;
export const helperText = `
	${bold(`Usage`)}
		${green(`npx genesiscli`)} ${yellow(`[options]`)} ${cyan(`<commands>`)}

	${bold(`Options`)}
        
		${yellow(`--social      Show social information`)}
		${yellow(`--no-social   Don´t social information`)}
		${yellow(`--ad          Show ad information`)}
		${yellow(`--no-ad       Don´t ad information`)}
		${yellow(`-d, --debug   Show debug information `)}
		${yellow(`-v, --version Show CLI version  information `)}
		${yellow(`-p, --posts    Show last 10 blog  POST `)}
		${yellow(`-m, --minimal Show minimal information `)} ${dim(`DEFAULT : false`)}
		${yellow(`-c, --clear   Clear the console information `)}
		${yellow(`--no-clear   Don´t clear the console information `)} ${dim(`DEFAULT : true`)}
		
	${bold(`Commands`)}
		${cyan(`help`)}   Print CLI help information
		
	${bold(`Examples`)}
		${green(`npx genesiscli`)} ${yellow(`--no-social`)}
		${green(`npx genesiscli`)} ${yellow(`--no-ad`)}l`;
export const options = {
	importMeta: import.meta,
	booleanDefault: undefined,
	flags: {
		social: {
			type: 'boolean',
			default: true
		},
		ad: {
			type: 'boolean',
			default: true
		},
		email: {
			type: 'boolean',
			default: true
		},
		debug: {
			type: 'boolean',
			default: false,
			alias: 'd'
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v'
		}
	}
};
