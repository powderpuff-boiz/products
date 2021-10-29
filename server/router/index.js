const express = require('express');
let router = express.Router();
const { relateds, products, ids, styles } = require('../controllers')

router.get('/', products.get)
router.get('/:product_id', ids.get)
router.get('/:product_id/styles', styles.get)
router.get('/:product_id/related', relateds.get)

module.exports = router;