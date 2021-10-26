const express = require('express');
let router = express.Router();
//dont forget to call next()
// router.param('//?page=1&count=5', function (req, res, next) {
//
//   next()
// })
router
  .route('/products')
  //if params 'page' or 'count' exist
  // else default to 1 and 5.
  .get((req, res) => {
    console.log('req.params', req.params)
    console.log('req.path', req.path)
    // DB req
    res.send('Hi from router/index.js')
  })

router
  .route('/products/:product_id')
  .get((req, res) => {
    console.log('req.params', req.params)
    console.log('req.path', req.path)
        // DB req

    res.send('Hi from router/index.js')
  })

router
  .route('/products/:product_id/styles')
  .get((req, res) => {
    console.log('req.params', req.params)
    console.log('req.path', req.path)
        // DB req

    res.send('Hi from router/index.js')
  })

router
  .route('/products/:product_id/related')
  .get((req, res) => {
  //query the db
  //select related_product_ids from relateds where related_ids = req.param[productID]
  //send
  res.send('Hello')
  })

module.exports = router;