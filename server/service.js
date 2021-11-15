const path = require('path');
const express = require('express');
const service = express();
const bodyParser = require("body-parser");
const routes = require('./router/index');
// const pool = require('./../db/pg.js');

service.use(bodyParser.urlencoded({ extended: false }));
service.use(bodyParser.json());

console.log('DIRNAME is',__dirname);

service.use(express.static(path.resolve(__dirname, '../loader')));
service.use('/products', routes);

module.exports = service;
