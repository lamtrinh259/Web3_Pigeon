const {ethers} = require ("ethers");
// import { ethers } from "ethers"
const { ChainId, Token, WETH, Fetcher, Route } = require("@uniswap/sdk");

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }


// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
/**
 * Get ETH/USDC price from Quickswap on-chain from the Graph (better method), or
 * from the contract (Quickswap docs) directly: Lam
 * Params:
 */

async function fetchWETHUSDCDataQuickswap() {
  const USDC = new Token(
    ChainId.MAINNET,
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC
    18
  );

  const WETH = new Token(
    ChainId.MAINNET,
    "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", // WETH
    18
  );
  console.log("ChainId",ChainId)
  console.log("USDC",USDC)
  console.log("WETH",WETH)
  // console.log("USDC.chainId",USDC.chainId)
  const pair = await Fetcher.fetchPairData(USDC, WETH[6]); //this error
  // const route = new Route([pair], WETH[USDC.chainId]);

  // // console.log(route.midPrice.toSignificant(6)); // 201.306, this is to get WETH --> USDC
  // // console.log(route.midPrice.invert().toSignificant(6)); // 0.00496756, for USDC --> WETH
  // console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
  // priceOfWETHToUSDC = route.midPrice.toSignificant(6)

    

  // return priceOfWETHToUSDC
}

const main = async () => {
  while (true) {
    await fetchWETHUSDCDataQuickswap();
    await sleep(5000); // 'Sleep' every 5 seconds
  }
}
main()
