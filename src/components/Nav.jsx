import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div id="navbar">
        <Link id='home-click' to="/home">Home</Link>
        <Link id='blue-click' to="/blue">Blue</Link>
        <Link id='red-click' to="/red">Red</Link>
      </div>
    )
};

export default Nav;