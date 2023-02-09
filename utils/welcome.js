import clearConsole from 'clear-any-console';

export const welcome = () => {
	clearConsole();

	console.log(
		boxen(`🔥  ${cyan(`Create NodeJS Projects Like a Boos`)} 😎`, {
			tagLine: 'by MoralexCode',
			title: 'Genesis CLI',
			titleAlignment: 'center',
			borderStyle: 'double'
		})
	);
};
