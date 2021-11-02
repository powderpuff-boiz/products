require('dotenv').config();
const service = require('./service');
const port = process.env.PORT || 3000;

service.listen(port, err => {
  if (err)
    return console.error("ERROR", err);
  console.log(`Products Service listening at http://localhost:${port}/products`)
})