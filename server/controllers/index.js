const db = require('../../db/pg.js')
const { getRelateds, getProducts } = require('../../db/models');

//This file's methods will intereact with the database

const relateds = {
  get: (req, res) => {
    //find where in req.params is the id
    //call the function from models
    getRelateds.getAllRelateds( '730984', (err, data) => {
      //if successful console.log
      res.status(200)
      res.send(data)
    })
  }
}

const products = {
  get: (req, res) => {
    const { page, count } = req.query;
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