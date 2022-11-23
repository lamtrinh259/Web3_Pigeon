import React, { useEffect, useState } from "react";
import { Contract, ethers } from "ethers";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "./Trading.css"

function Trading() {
  const [account, setAccount] = useState("");


  return (
    <>
      <div className='container center'>
        <br />

        <div className="container padding">
          <h1>TRADING</h1>

        </div>
        <Link className="nav-link" to="/Apps" style={{ textDecoration: 'none' }} className="buttonCSS_2"> Back to Apps</Link>
      </div>
  
      
    </>
  );
}

export default Trading;
