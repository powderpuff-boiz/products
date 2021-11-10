const pool = require('../pg.js');
const { composeStyleData } = require('./stylesDataMap');

const getRelateds = {
  getAllRelateds: (id, cb) => {
    pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      // console.log('IN MODELS id', typeof id)
      client.query(`SELECT related_product_id FROM relateds WHERE current_product_id = ${id};`, (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        // console.log(result.rows);
        const data = result.rows.map(({ related_product_id }) => related_product_id )
        // console.log('data', data);
        cb(null, data);
      })
    })
  }
};

const offsetter = (page, count) => page ? (page *= count) - count : page;

const limiter = count => count > 10 ? 10 : count;

const getProducts = {
  getProductsList: (page = 0, count = 5, cb) => {
    const offset = offsetter(page, count);
    const limit = limiter(count);
    pool.connect( (err, client, release) => {  //this whole block should be refactored
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      client.query(`SELECT * FROM products
                    ORDER BY id
                    OFFSET ${offset} LIMIT ${limit};`, (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        cb(null, result.rows);
      })
    })
  }
};
const getProductById = {
  getFeaturesList: (id, cb) => {
    pool.connect((err, client, release) => {  //this whole block should be refactored
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      client.query(
        `SELECT products.id, products.name, products.slogan, products.description,
                products.category, features.feature, features.value
            FROM products
            INNER JOIN features ON features.product_id = products.id
            WHERE products.id = ${id};`,
        (err, result) => {
        release();
        if (err) {
          cb(err)
          console.error('Error executing query', err.stack);
          return;
        }
        // console.log('Model result.row', result.rows)
        // if (result.rows.length === 0) {  // /products/:productId
        //   console.error('Error Product ID does not EXIST 404');
        //   cb(null);
        // } else {
          // let data = composeFeatures(result.rows);
        cb(null, result.rows);

      })
    })
  }
};
const getStyles = {
  getAllStyleInfo: (id, cb) => {
    pool.connect((err, client, release) => {  //this whole block should be refactored
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      client.query(
        `SELECT styles.id, styles.name, styles.sale_price,
                styles.original_price, styles.default_style,
                skus.id AS sid, skus.size, skus.quantity,
                photos.url, photos.thumbnail_url
        FROM styles
        INNER JOIN photos ON photos.product_id = ${id}
          INNER JOIN skus ON skus.style_id = styles.id
          WHERE styles.product_id = ${id};`,
        (err, result) => {
          release();
          if (err) {
            return console.error('Error executing query', err.stack);
          }
          let data = { product_id: id, results: composeStyleData(result.rows) };
          // console.log('DATA is ',data);
          cb(null, data);
        })
    })
  }
};

module.exports = { offsetter, limiter, getRelateds, getProducts, getProductById, getStyles };

