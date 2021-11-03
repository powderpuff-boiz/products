const express = require('express');
const service = express();
const bodyParser = require("body-parser");
const routes = require('./router/index');
// const pool = require('./../db/pg.js');

service.use(bodyParser.urlencoded({ extended: false }));
service.use(bodyParser.json());

service.use('/products', routes)

module.exports = service;
