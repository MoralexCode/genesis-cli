// 'use strict';
import boxen from 'boxen';
import chalk from 'chalk';
export const {green, cyan, yellow, dim} = chalk;

global.green = green;
global.cyan = cyan;
global.yellow = yellow;
global.dim = dim;
global.boxen = boxen;

// module.exports = global.cyan = cyan;
// module.exports = global.print = print;
// module.exports = global.send = send;
// module.exports = global.sendError = sendError;

// module.exports = global.yellow = yellow;
// module.exports = global.cyan = cyan;
// module.exports = global.dim = dim;
