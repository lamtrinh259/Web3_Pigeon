const {ethers, network} = require("hardhat")
const fs = require("fs")
const FRONT_END_ADDRESSES_FILE = "frontendpigeon/constants/contractAddresses.json"
const FRONT_END_ABI_FILE = "frontendpigeon/constants/abi.json"

module.exports = async function() {
  if (process.env.UPDATE_FRONT_END) {
    console.log('Updating front end...')
    updateContractAddresses() // to update contract addresses
    updateAbi() // to update ABI
  }
}

async function updateAbi() {
  const factory = await ethers.getContract("PigeonFactory")
  fs.writeFileSync(FRONT_END_ABI_FILE, factory.interface.format(ethers.utils.FormatTypes.json))
}

async function updateContractAddresses() {
  const factory = await ethers.getContract('PigeonFactory')
  const chainId = network.config.chainId.toString()
  const currentAddresses = JSON.parse(fs.readFileSync(FRONT_END_ADDRESSES_FILE, "utf8"))
  if (chainId in contractAddress) { // if chainId exists
    if(!contractAddress[chainId].includes(factory.address)){
      contractAddress[chainId].push(factory.address)
    }
  } { // if chainId doesn't exist, create a new array
    currentAddresses[chainId] = [factory.address]
  }
  fs.writeFileSync(FRONT_END_ADDRESSES_FILE, JSON.stringify(currentAddresses))
}

module.exports.tags = ["all", "frontend"]
