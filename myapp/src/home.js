import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './header';
import Slider from './slider';

function Home() {
  return (
    <>
      <Header />
      <div className='Container'>
        <Slider />
      </div>
    </>
  );
}

export default Home;
