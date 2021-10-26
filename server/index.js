const express = require('express');
const service = express();
const port = process.env.port || 3000;
const bodyParser = require("body-parser");
const routes = require('./router/index');
const pool = require('./../db/pg.js');

service.use(bodyParser.urlencoded({ extended: false }));
service.use(bodyParser.json());

// service.use('/index', initRoute)
service.get('/', (req, res) => {
  res.send('Hello World!')
})
service.use('/products', routes)

service.listen(port, err => {
  if (err)
    return console.error("ERROR", err);
  console.log(`Example service listening at http://localhost:${port}`)
})