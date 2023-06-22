import React from 'react';
import './App.scss';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Main from '../components/Main';

function App() {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
