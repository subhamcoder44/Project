// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
      <a className='text-white font-bold' href="/Home">Dev-Subham</a>
        <ul className="flex space-x-4">
          <li><a href="/Home" className="text-white">Home</a></li>
          <li><a href="/About" className="text-white">About</a></li>
          <li><a href="/Project" className="text-white">What i Know</a></li>
          <li><a href="/Contact" className="text-white">Contact</a></li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
