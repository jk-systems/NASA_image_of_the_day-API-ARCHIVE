import React from 'react';
import dotenv from 'dotenv';

import Banner from './components/Banner';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import './components/styles/App.css';
import Footer from './components/Footer';

dotenv.config();

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Intro />
      <Footer/>
    </div>
  );
}

export default App;
