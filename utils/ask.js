export const ask = async () => {
	return await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your project name?',
			hint: `(use kebab-case only)`
		},
		{
			type: 'input',
			name: 'description',
			message: 'Write a description project'
		},
		{
			type: 'input',
			name: 'author',
			message: 'Author name?'
		}
	]);
};
