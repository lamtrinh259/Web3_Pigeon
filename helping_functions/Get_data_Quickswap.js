
import { createClient} from 'urql'
import {useEffect, useState} from 'react'

const axios = require('axios')



const APIURL = "https://api.thegraph.com/subgraphs/name/messari/quickswap-polygon"
const query = `
  query`
const client = createClient({
  url: APIURL
})

query = `
{
  pools(orderBy: )
}`

/**
 * Get ETH/USDC price from Quickswap on-chain from the Graph (better method), or
 * from the contract (Quickswap docs) directly: Lam
 * Params:
 */
function fetch_data_Quickswap() {


  return 0
}
