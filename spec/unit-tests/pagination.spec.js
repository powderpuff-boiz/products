const request = require("supertest");
// const service = require('../../server/service');
const { offsetter, limiter } = require('../../db/models');
// const expectedProducts = require('../data/API');

describe('pagination logic for /products?page=0&page=5 route', () => {
  const count = 5;
  test('param Page = 1 should set the SQL OFFSET value to 0', () => {
    const offset = offsetter(1, count)
    expect(offset).toEqual(0);
  })
  test('param Page = 2 should set the SQL OFFSET value to 5', () => {
    const offset = offsetter(2, count)
    expect(offset).toEqual(5);
  })
  test('param Page = 0 should set the SQL OFFSET value to 0', () => {
    const offset = offsetter(0, count)
    expect(offset).toEqual(0);
  })
})


//try running without ORDER BY