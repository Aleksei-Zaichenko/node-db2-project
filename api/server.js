const express = require('express');

const CarsRouter = require('../routers/cars-router.js');

const server = express;

server.request(express.json());

server.use('/api/cars',CarsRouter);

module.exports = server;