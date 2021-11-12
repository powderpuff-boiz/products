import http from "k6/http";
import { sleep } from 'k6';

export let options = {

  // scenarios: {
  //   constant_request_rate: {
  //     executor: "constant-arrival-rate",
  //     rate: 100,
  //     timeUnit: "1s",
  //     duration: "30s",
  //     preAllocatedVUs: 100,
  //     maxVUs: 200,
  //   },
  // },
  stages: [
    // { duration: '1m', target: 100 }, // below normal load
    { duration: '2m', target: 100 },
    // { duration: '1m', target: 200 }, // normal load
    { duration: '2m', target: 200 },
    // { duration: '1m', target: 300 }, // around the breaking point
    { duration: '2m', target: 300 },
    // { duration: '1m', target: 300 }, // beyond the breaking point
    { duration: '2m', target: 400 },
    // { duration: '.5m', target: 0 }, // scale down. Recovery stage.
  ],
};
export default function () {
  let rndId = Math.floor((Math.random() * 1000000) + 9000000);
  const BASE_URL = `http://localhost:3002/products`;
  http.get(`${BASE_URL}/${rndId}/products`);
  // const responses = http.batch([
  //   ['GET', `${BASE_URL}/`],
  //   ['GET', `${BASE_URL}/${rndId}`],
  //   ['GET', `${BASE_URL}/${rndId}/products`],
  //   ['GET', `${BASE_URL}/${rndId}/styles`],
  //]);
  sleep(1);
}
