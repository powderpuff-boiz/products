const db = require('../../db/pg.js')
const { getRelateds, getProducts, getProductById, getStyles } = require('../../db/models');

//This file's funcs intereact with the db

const relateds = {
  get: (req, res) => {
    let { id } = req.query;
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
const composeIdAPI = (data) => {
  const feats = data.map( f => {
    return {feature: f.feature, value: f.value}
  });
  const idAPI = {
    id: data[0].id,
    name: data[0].name,
    slogan: data[0].slogan,
    description: data[0].description,
    category: data[0].category,
    features: feats
  };
  return idAPI;
};

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

const ids = {
  get: (req, res) => {
    let id = req.params.product_id;
    console.log('id is', id);
    getProductById.getFeaturesList(id, (err, data) => {
      if (err) {
        console.error('ERROR', err);
        res.status(404);
        res.send(err);
      };
      res.status(200);
      let features = composeIdAPI(data);
      console.log('featureAPI', features);
      res.send(data);
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