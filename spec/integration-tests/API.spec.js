const request = require("supertest");
const service = require('../../server/service');
const { products, id, styles, relateds } = require('../data/API');
// const db = require('../../db/pg');

describe("Test the / route", () => {

  test("It should respond to the /products GET method using default params ", done => {
    request(service)
      .get("/products")
      .then(response => {
        // console.log('response', response.body);
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(products);
        done();
      });
  });
});

describe("/:product_id", () => {
  test('should respond with ', done => {
    request(service)
      .get("/products/:product_id")
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual(ids);
    })
  })
});

describe("/:product_id/styles", () => {
  test('should respond with ', done => {
    request(service)
    .get("/products/4549/styles")
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual(styles);
    })
  })
});

describe("/:product_id/related", () => {
  test('should respond with an Array of Numbers', done => {
    request(service)
    .get("/products/17788/related")
    .then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toStrictEqual(relateds);
    })
  })
 });