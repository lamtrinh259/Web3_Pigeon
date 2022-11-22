import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import "./Appconnect.css";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();


function Apps_home() {
  const [account, setAccount] = useState("");
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);


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
        console.log("account",accounts)
          navigate(`/apps_home`);
      
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
          <h1>Apps_home</h1>
          <h2>Apps</h2>
          <p>-</p>
        </div>

      </div>

    </>
  );
}

export default Apps_home;
