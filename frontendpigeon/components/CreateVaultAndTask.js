import { useWeb3Contract } from "react-moralis"
import { abi, contractAddresses} from "../constants"
import { useMoralis } from "react-moralis"
import { useState, useEffect } from "react"
import { ethers } from "ethers"
import { useNotification} from "web3uikit"


export default function CreateVault() {
  const {chainId: chainIdHex, isWeb3Enabled} = useMoralis() // pull out the chainId var and rename it chainIdHex
  const chainId = parseInt(chainIdHex) // Get the integer value of chainIdHex
  const factoryAddress = chainId in contractAddresses ? contractAddress[chainId][0] : null // get the factory contract address, else assign null
  const dispatch = useNotification()

  const {runContractFunction: createVault} = useWeb3Contract({
    // Need ABI and contract address and function name & params
    abi: abi,
    contractAddress: factoryAddress, // specify the chain ID
    functionName: "createVault",
    params: {},  // no params it looks like
    msgValue: {} // might not be necessary to return anything here
  })

  const {runContractFunction: getVault} = useWeb3Contract({
    // Need ABI and contract address and function name & params
    abi: abi,
    contractAddress: factoryAddress,
    functionName: "getVault",
    params: {},  // no params it looks like
  })

  useEffect(() => {
    if(isWeb3Enabled) {
      // try to get the vault
      async function updateUI() {
        // newVaultFromContract = await createVault() // original line that is working
        // newVaultFromContract = (await createVault().toString()) // modified line
        // console.log(newVaultFromContract)
        console.log('Keep blank for now since createVault function is not active yet')
      }
      updateUI()
    }
  },[isWeb3Enabled])

  const handleSuccess = async function (transaction) {
    await transaction.wait(1)
    handleNewNotification(transaction)
  }
  const handleNewNotification = function () {
    dispatch({
      "type": "info",
      message: "Transaction Complete!",
      title: "Transaction Notification",
      position: "topR",
      icon: "bell"
    })
  }

  return(
    <div>Let's automate your Web3 Journey!
        {/* {newVaultFromContract ? ( */}
        {/* <div>  */}
          <button onClick= {async function(){await createVault()({
          onSuccess: handleSuccess,
          onError: (error) => console.log(error)
        })}}> Create My Vault </button>
        {/* New vault created from contract is: {newVaultFromContract} </div>) : */}
        {/* (<div> No vault contract address detected</div>) } */}
    </div>
  )
}
