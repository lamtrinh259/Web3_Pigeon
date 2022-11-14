import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import "./App_connect.css";


function App() {
  const [account, setAccount] = useState("");
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);


  const contractAddress = "0x9C3cF4D4Cb1D0476A871A49A4195E3351fffe5Bf";

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    //   setCurrentNetwork(window.ethereum.networkVersion);
    }
  }, []);


  async function connectWallet() {
    window.ethereum.request({ method: "eth_requestAccounts", })
      .then((accounts) => {
        setAccount(accounts[0])
        console.log(account)
      })
      .catch((error) => { alert("Something went wrong") });
  }


  return (
    <>
      <div className='container center'>
        <br />
        {isWalletInstalled && !account ?
          (<Button onClick={connectWallet}>Connect Wallet</Button>) :
          (!account ? (<p>Install MetaMask</p>) :
            <> <p>Your current account is:</p>
              <Badge pill bg="light" text="dark">
                {account}
              </Badge>{' '}</>
          )}
        <div className="container padding">
          <h1>Web 3 Pigeon</h1>
          <h2>Automate your Web3 Actions effortlessly</h2>
          <p>-</p>
        </div>

      </div>

    </>
  );
}

export default App;
