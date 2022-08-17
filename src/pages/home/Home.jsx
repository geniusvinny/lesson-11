import React from 'react';
import './home.css';
import Navbar from '../../Components/navbar/Navbar';
import Welcome from '../../Components/welcome/Welcome';

const Home = () => {
  return (
    <div>
     <Welcome/>
      <Navbar/>
    </div>
  )
}

export default Home
