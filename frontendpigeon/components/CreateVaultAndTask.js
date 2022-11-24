import { useWeb3Contract } from "react-moralis"
import { abi, contractAddresses} from "../constants"
import { useMoralis } from "react-moralis"
import { useEffect } from "react"


export default function CreateVault() {
  const {chainId: chainIdHex, isWeb3Enabled} = useMoralis() // pull out the chainId var and rename it chainIdHex
  const chainId = parseInt(chainIdHex) // Get the integer value of chainIdHex
  const factoryAddress = chainId in contractAddresses ? contractAddress[chainId][0] : null // get the factory contract address, else assign null
  // const {runContractFunction: createVault} = useWeb3Contract({
  //   // Need ABI and contract address and function name & params
  //   abi: abi,
  //   contractAddress: factoryAddress, // specify the chain ID
  //   functionName: "createVault",
  //   params: {},  // no params it looks like
  //   msgValue: {} //
  // })

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
        const something = await getVault()
        console.log(something)
      }
      updateUI()
    }
  },[isWeb3Enabled])

  return(
    <div>Let's automate your Web3 Journey!</div>
  )
}
