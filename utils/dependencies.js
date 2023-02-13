export const dependencies = async path => {
	await execa('cp', [`${process.cwd()}/template/.github/personal-brand.png`, `${path}/.github/`]);

	process.chdir(path);
	// const spinner = ora(`Installing dependencies ...\n\n ${dim(`It may take moment...`)}`).start();
	// const dependencies = [
	// 	'sequelize',
	// 	'mysql2',
	// 	'boxen',
	// 	'winston',
	// 	'express',
	// 	'cookie-parser',
	// 	'cors',
	// 	'crypto',
	// 	'dotenv',
	// 	'jsonwebtoken',
	// 	'nodemailer'
	// ];
	// spinner.text = 'DEV Dependencies';
	// await execa('npm', [`install`]); //install dev dependencies
	// spinner.text = 'Project Dependencies';
	// await execa('npm', [`install`, ...dependencies]);
	// await execa('npx', [`licensed`, `MIT`]);
	/// sequelize-cli init
	// const globalDependencies = ['nodemon', 'sequelize-cli']; // thi dependencies going to install into docker container
	// await execa('npm', [`install \-g`, ...globalDependencies]);
	const spinner = ora(`Building container ...\n\n ${dim(`It may take moment...`)}`).start();
	spinner.color = 'yellow';
	spinner.text = 'creating DB';
	// await execa('sh', [`init.sh`]);
	spinner.succeed(`Building finished.`);
};
