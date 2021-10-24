const express = require('express');
const service = express();
const port = process.env.port || 3000;
const bodyParser = require("body-parser");
const multer  = require('multer')
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });//this is storing in memory
const initRoute = require('./router/index');
// const parsedCSV = require('./middleware/csvparser.js');
//const connection = require('./../db/pg.js');
const pool = require('./../db/pg.js');

service.use(bodyParser.urlencoded({ extended: false }));
service.use(bodyParser.json());

service.use('/index', initRoute)
service.get('/', (req, res) => {
  res.send('Hello World!')
})

service.listen(port, err => {
  if (err)
    return console.error("ERROR", err);
  console.log(`Example service listening at http://localhost:${port}`)
})