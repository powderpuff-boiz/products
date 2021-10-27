const express = require('express');
let router = express.Router();
const relateds = require('../controllers').relateds;
const products = require('../controllers').products;
//dont forget to call next()
// router.param('//?page=1&count=5', function (req, res, next) {
// })

router.get('/', products.get)
// router.get('/:product_id', getProduct_id)
// router.get('/:product_id/styles', getStyles)
router.get('/:product_id/related', relateds.get)

module.exports = router;