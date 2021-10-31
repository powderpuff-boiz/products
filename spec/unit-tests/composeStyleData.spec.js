const request = require("supertest");
const testData = require('../data/composeStyleUnit');
const { getSkus, getStyles } = require('../../db/models/stylesDataMap.js');

describe('composeStyleData', () => {

  test('func should grab all the unique skus for this product Id', () => {
    const uniqSkus = getSkus(testData);
    expect(uniqSkus).toEqual([
      201128, 201129,
      201130, 201131,
      201132, 201133,
      201134, 201135,
      201136, 201137,
      201138, 201139
    ]);
  });
  test('func should grab all the unique style Ids for this product Id', () => {
    const uniqStyles = getStyles(testData);
    expect(uniqStyles).toEqual([35123, 35124]);
  })
});