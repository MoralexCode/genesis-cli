import Store from 'data-store';
// import pat  from 'path'
import fs from 'fs';
import path from 'path';
export const ask = () => {
	return prompt([
		{
			type: 'input',
			name: 'name',
			message: 'What is your project name?',
			hint: `(use kebab-case only)`,
			history: {
				autsaving: true,
				store: new Store({
					path: path.join(process.cwd(), `/.name.json`)
				})
			},
			validate(value, state) {
				if (state && state.name === 'command') return true;
				if (state && state.name === 'name') {
					if (fs.existsSync(value)) {
						return `Directory already exist : ./${value}`;
					}
					return true;
				}
				return !value ? '  Please add a values ' : true;
			}
		},
		{
			type: 'input',
			name: 'description',
			message: 'Write a description project'
		},
		{
			type: 'input',
			name: 'author',
			message: 'Author name?',
			initial: 'MoralexCode'
		}
	]);
};
