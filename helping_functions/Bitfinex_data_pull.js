"use strict";

const axios = require('axios')

const baseUrl = "https://api-pub.bitfinex.com/v2/";
const pathParams = "tickers"
const queryParams = "symbols=fUSD,tBTCUSD"


// axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
//     .then(response => {
//         console.log(response.data);
//     }, error => {
//         console.log(error);
//     })

async function getBTCPriceBitfinex() {
  // "let" is block-scoped, meaning it's only accessible within {} brackets
  let req = axios.get(`${baseUrl}/${pathParams}?${queryParams}`);
  let result = await req;
  let data = res.data;
  return data
}

BTCPrice = getBTCPriceBitfinex();
console.log(BTCPrice);
