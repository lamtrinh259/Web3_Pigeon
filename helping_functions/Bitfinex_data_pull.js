"use strict"

const axios = require('axios')

const baseUrl = "https://api-pub.bitfinex.com/v2/";
const pathParams = "tickers"
const queryParams = "symbols=fUSD,tBTCUSD"

axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
    .then(response => {
        console.log(response.data);
    }, error => {
        console.log(error);
    })
