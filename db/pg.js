const { Pool } = require('pg');
// const carts = require('../schemata/carts.sql')

const pool = new Pool({
  username: "ryanhorowitz",
  host: "127.0.0.1",
  database: "sdc",
  password: "",
  port: 5432
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT * FROM carts', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})

module.exports = pool;