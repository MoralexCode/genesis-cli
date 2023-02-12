var express = require('express');
var app = express();

const users = require('./usersRoute');
app.use('/v1', users); //ALL USERS  ENDPOINT

module.exports = app;
