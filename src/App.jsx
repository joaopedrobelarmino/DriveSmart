import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Releases from './Components/Releases/Releases';
import Cars from './Components/Cars/Cars';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Releases />
      <Contact />
      <Cars />
      <Footer />
    </div>
  );
};

export default App;
