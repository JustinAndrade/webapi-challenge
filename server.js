const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const actionRouter = require('./data/helpers/actionRouter.js');
const projectRouter = require('./data/helpers/projectRouter.js');

const server = express();

server.get('/', async (req, res) => {
	res.send(`<h2>WEBAPI SPRINT CHALLENGE</h2>`);
});

server.use(express.json());
server.use(helmet());
server.use(logger('dev'));

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

module.exports = server;
