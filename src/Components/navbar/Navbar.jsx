import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      
      <div className="navbar-left">
        <div className="navbar-home">Home</div>
        <div className="navbar-content">Content</div>
        <div className="navbar-content">Blog</div>
        <div className="navbar-about">About</div>
      </div>  
      
      <div className="navbar-right">
          <div className="navbar-signUp">Sign-Up</div>
          <div className="navbar-signIn">Sign-In</div>
      </div>

    </div>
        
  )
}

export default Navbar