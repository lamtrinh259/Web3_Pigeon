import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import "./Appconnect.css";
import AppsCard from "./AppsCard"
import { useNavigate } from "react-router-dom";




function Apps_home() {
  const [account, setAccount] = useState("");
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);


  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    //   setCurrentNetwork(window.ethereum.networkVersion);
    }
  }, []);

  const navigate = useNavigate();
  async function connectWallet() {
    window.ethereum.request({ method: "eth_requestAccounts", })
      .then((accounts) => {
        setAccount(accounts[0])
        console.log("account",accounts)
          navigate(`/Apps`);
      
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
          <h1>Appshome</h1>
          <h2>GM!</h2>
          <h3>Pick an action from the below list to begin automation</h3>
          <AppsCard Title="Games"/>
          <AppsCard Title="Airdrop"/>
          <AppsCard Title="Trading"/>
          <AppsCard Title="DAO Ops"/>
          <AppsCard Title="Payment"/>
          <AppsCard Title="Custom"/>
        </div>

      </div>

    </>
  );
}

export default Apps_home;
