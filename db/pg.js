require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  username: "ubuntu",
  host: "52.90.83.250",
  database: "sdc",
  password: "primusSucks",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  console.log('Made a successful connection to Postgres SDC');
  client.release();
})

module.exports = pool;
