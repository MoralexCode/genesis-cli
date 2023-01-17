#!/usr/bin/env node

// require('./utils/global');
import './utils/global.js';
// import logSymbols from "log-symbols";
import meow from 'meow';
import {helperText, options} from './utils/helper.js';
import {welcome} from './utils/welcome.js';
welcome();
// console.log(helperText, options);
const cli = meow(helperText, options);
const input = cli.input;
const flags = cli.flags;
console.log(input, flags);
// const commands = {
//   new: { desc: `Creates a new user account` },
//   duplicate: { desc: `Duplicates a user account` },
// };

// const flags = {
//   random: {
//     desc: `Prints random data`,
//     type: "boolean",
//     default: true,
//   },
// };

// const helpText = meowHelp({
//   name: `cli-command`,
//   flags,
//   commands,
// });

// meow(helpText, { flags });
