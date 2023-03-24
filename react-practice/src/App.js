import React from 'react';
 import './style.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import assets from "./assets";


import './styles/App.scss';
import './styles/Header.scss';
import './styles/home.scss';

//  function Heading(){
//    return <h1>Heading </h1>
//  }
//another syntax of upper code in 1 line
// const function = () => <h1>Heading</h1>********
//line 13 operator is used for mulitple div in a jsx code

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element ={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
