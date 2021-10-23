const express = require('express');
let router = express.Router();

router
  .route('/test')
  .get((req, res) => {
    res.send('Hi from router/index.js')
  })
  .post((req, res) => {})

module.exports = router;