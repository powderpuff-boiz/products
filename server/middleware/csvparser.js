const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

// const photosOption = { start: 0, end: 1000 };
const file = fs.createReadStream('/Users/ryanhorowitz/hack_reactor/RPP30/senior/sdc/overviewservice/data/photos.csv')
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => console.log(row))
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));

module.exports = file;