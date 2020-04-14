const express = require('express');

const CarsRouter = require('../routers/cars-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars',CarsRouter);

module.exports = server;