import React from 'react';
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import Appconnect from './components/Appconnect'
import Appshome from "./components/Appshome";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// We import bootstrap here, but you can remove if you want
import "bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={  <Appconnect />}>
        {/* *nested under app */}
        {/* <Route index element ={<CoinsHome />}/>
        <Route path="/CoinsHome/:id" element={<CoinsCard/>}/>
        <Route path="/Watchlist" element={<Watchlist />}> */}
        </Route>

        <Route path="/Apps" element={<Appshome/>}></Route>
        
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

// ReactDOM.render(
  
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={  <Appconnect />}>
  //       {/* *nested under app */}
  //       {/* <Route index element ={<CoinsHome />}/>
  //       <Route path="/CoinsHome/:id" element={<CoinsCard/>}/>
  //       <Route path="/Watchlist" element={<Watchlist />}> */}
  //       </Route>

  //       <Route path="/Apps" element={<Appshome/>}></Route>
        
  //   </Routes>
  // </BrowserRouter>,
  // document.getElementById('root')

//);

