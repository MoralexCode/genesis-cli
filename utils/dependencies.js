export const dependencies = async path => {
	process.chdir(path);
	const spinner = ora(`Installing dependencies ...\n\n ${dim(`It may take moment...`)}`).start();
	const dependencies = [
		'sequelize',
		'mysql2',
		'boxen',
		'winston',
		'express',
		'cookie-parser',
		'cors',
		'crypto',
		'dotenv',
		'jsonwebtoken',
		'nodemailer'
	];
	spinner.text = 'DEV Dependencies';
	await execa('npm', [`install`]); //install dev dependencies
	spinner.text = 'Project Dependencies';
	await execa('npm', [`install`, ...dependencies]);
	// await execa('npx', [`licensed`, `MIT`]);
	/// sequelize-cli init
	// const globalDependencies = ['nodemon', 'sequelize-cli']; // thi dependencies going to install into docker container
	// await execa('npm', [`install \-g`, ...globalDependencies]);
	spinner.succeed(`Dependencies installed.`);
};
