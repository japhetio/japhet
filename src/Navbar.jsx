import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="container">
      <div className="brand-area">
        <div className="robot-bounce">
          <span role="img" aria-label="robot" className="robot-icon">🤖</span>
          <span className="speech-bubble">Welcome</span>
        </div>
        <div className="brand gradient-text">
          <span className="first">H</span>onor
        </div>
      </div>
      <div>
        <ul>
          <li><Link to="/home">HOME</Link></li>
          <li><Link to="/profile">PROFILE</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li><Link to="/skills">SKILLS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;