import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './MainPage/MainPage'
import Login from './Login/Login'
import Produto from './Produto/Produto';
import Header from '../components/Header';
import Footer from '../components/Footer';


function App() {

  return (
         <div className='App'>
          <Header/>
              <Routes>
                <Route path='/' element ={<MainPage/>}/>
                <Route path='/Login' element ={<Login/>}/>
              </Routes>
          <Footer/>
          </div>
  );
}

export default App;
