const db = require('../../db/pg.js')
const { getRelateds, getProducts, getProductById, getStyles } = require('../../db/models/index.js');

const relateds = {
  get: (req, res) => {
    const id = req.params.product_id;
//    console.log('id is', id)
    getRelateds.getAllRelateds( id, (err, data) => {
      if (err) {
        console.error('ERROR', err);
        res.status(404);
        res.send(err);
      };
      res.status(200);
      res.send(data);
    })
  }
}

const products = {
  get: (req, res) => {
    let { page, count } = req.query;
    getProducts.getProductsList(page, count, (err, data) => {
      if (err) {
        console.error('ERROR', err);
        res.status(404);
        res.send(err);
      };
      res.status(200);
      res.send(data);
    })
  }
}

const composeIdAPI = (data) => {
  if (data.length === 0) {
    return {};
  }
  const feats = data.map(f => {
    return { feature: f.feature, value: f.value }
  });
  const idAPI = {
    id: data[0].id, // if data is [] then ??? return an sensible default
    name: data[0].name,
    slogan: data[0].slogan,
    description: data[0].description,
    category: data[0].category,
    features: feats
  };
  return idAPI;
};

const ids = {
  get: (req, res) => {
    let id = req.params.product_id;
    console.log('id is', id);
    getProductById.getFeaturesList(id, (err, data) => {
      // if data is an emptry array that means the product ID was not found in the DB
      if (err) {
        console.error('ERROR', err);
        res.status(404);
        res.send();
      } else {
        // console.log('featureAPI', data);
        let features = composeIdAPI(data);
        res.status(200);
        res.send(features);
      }
    })
  }
}

const styles = {
  get: (req, res) => {
    let id = req.params.product_id;
    getStyles.getAllStyleInfo(id, (err, data) => {
      if (err) {
        console.error('ERROR', err);
        res.status(404);
        res.send(err);
      };
      res.status(200);
      res.send(data);
    })
  }
}


module.exports = { relateds, products, ids, styles };
