export const dependencies = async path => {
	process.chdir(path);
	const spinner2 = ora(`Installing dependencies ...\n\n ${dim(`It may take moment...`)}`).start();
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
	await execa('npm', [`install`]); //install dev dependencies
	await execa('npm', [`install`, ...dependencies]);
	// const globalDependencies = ['nodemon', 'sequelize-cli']; // thi dependencies going to install into docker container
	// await execa('npm', [`install \-g`, ...globalDependencies]);
	spinner2.succeed(`Dependencies installed.`);
};
