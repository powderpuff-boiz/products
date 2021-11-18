require('dotenv').config();
const service = require('./service');
const port = process.env.S_PORT || 3002;

service.listen(port, err => {
  if (err)
    return console.error("ERROR", err);
  console.log(`Products Service listening at port ${port}`)
})
