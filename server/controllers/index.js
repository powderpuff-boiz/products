const db = require('../../db/pg.js')
const { getRelateds, getProducts } = require('../../db/models');

//This file's funcs intereact with the db

const relateds = {
  get: (req, res) => {
    let { id } = req.query;
    getRelateds.getAllRelateds( id, (err, data) => {
      res.status(200)
      res.send(data)
    })
  }
}

const products = {
  get: (req, res) => {
    let { page, count } = req.query;
    getProducts.getProductsList(page, count, (err, data) => {
      res.status(200)
      res.send(data)
    })
  }
}

const ids = {
  get: (req, res) => {

    res.status(200)
    res.send('data')
  }
}

const styles = {
  get: (req, res) => {

    res.status(200)
    res.send(data)
  }
}


module.exports = { relateds, products };