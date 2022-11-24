"use strict";

import axios from 'axios'

const baseUrl = "https://api-pub.bitfinex.com/v2/";
const pathParams = "tickers"
const queryParams = "symbols=fUSD,tBTCUSD"

var BTCPrice
let random_num = 0;

// axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
//     .then(response => {
//         console.log(response.data);
//     }, error => {
//         console.log(error);
//     })

export async function getBTCPriceBitfinex() {
  // "let" is block-scoped, meaning it's only accessible within {} brackets
  let req = axios.get(`${baseUrl}/${pathParams}?${queryParams}`);
  let result = await req;
  let data = result.data;
  console.log('the JSON where the result is store is', data[1])
  console.log('Last traded price of BTC is', data[1][7])
  return data[1][7]
}

// BTCPrice = getBTCPriceBitfinex();
// console.log(BTCPrice); // console.log()

// for testing
// const promise3 = Promise.resolve(getBTCPriceBitfinex());
// promise3.then((value3) => {
//   console.log("value3", value3);
// });
