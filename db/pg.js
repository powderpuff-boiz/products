require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: "sdc",
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
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