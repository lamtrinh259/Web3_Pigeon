"use strict";

import axios from 'axios'

const baseUrl = "https://api.binance.com/api/v3";
const pathParams = "avgPrice"
const queryParams = "symbol=BTCUSDT"

export async function getBTCPriceBinance() {
  // "let" is block-scoped, meaning it's only accessible within {} brackets
  let req = axios.get(`${baseUrl}/${pathParams}?${queryParams}`);
  let result = await req;
  let data = result.data;
  console.log('The latest BTC/USDT price is', data['price'])
  // console.log(typeof data['price']) // string type
  return data['price']
}

// for testing
// const promise = Promise.resolve(getBTCPriceBinance());
// promise.then((BTCBinancePrice) => {
//   console.log("BTC/USDT price on Binance is", BTCBinancePrice);
// });
