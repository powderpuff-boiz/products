const { Pool } = require('pg');
// const carts = require('../schemata/carts.sql')

const pool = new Pool({
  username: "ryanhorowitz",
  host: "127.0.0.1",
  database: "sdc",
  password: "",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  // console.log('Made a successful connection to Postgres SDC');
  client.release();
})

module.exports = pool;