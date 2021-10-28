const request = require("supertest");
const service = require('../../server/service');
const expectedProducts = require('../data/API');
// const db = require('../../db/pg');

describe("Test the /products route", () => {

  test("It should respond to the /products GET method using default params ", done => {
    request(service)
      .get("/products")
      .then(response => {
        // console.log('response', response.body);
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(expectedProducts);
        done();
      });
  });
});