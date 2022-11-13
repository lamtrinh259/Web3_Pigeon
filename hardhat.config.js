require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  // networks: {
  //   hardhat: {
  //     chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
  //   }
  // }
  networks: {
    hardhat: {
        // blockGasLimit: 100000000
    },
    goerli: {
        url: process.env.GOERLI_URL || "",
        accounts:
            process.env.PRIVATE_KEY !== undefined
                ? [process.env.PRIVATE_KEY]
                : []
    },
},    
etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
}
};
