require('dotenv').config();
require('./utils/global'); //load global.js to add new functions to Global enviroment
const express = require('express'),
	app = express();
const cors = require('cors');
const pkg = require('./package.json');
const {PORT, HOST} = process.env; // GET environment variables
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({limit: '100mb'}));
//============ add Routes ===================
//===========================================
var routes = require('./app/routes/index');
app.use('/api', routes);

const server = app.listen(PORT || 3000, () => {
	const appName = pkg.name;
	info(
		`👂Listening at http://${HOST}:${PORT}/\n[DB] Conectada con éxito \n🔥Learn, develop, enjoy, repeat 😎 `
	);
});
module.exports = {app, server};
