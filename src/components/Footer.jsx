import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">About Me</h3>
            <p className="leading-relaxed">
            MERN stack developer skilled in building dynamic web applications with React, Node.js, Express, and MongoDB. Passionate about creating seamless user experiences            </p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="list-none p-0 leading-relaxed">
              <li><a href="/Home" className="hover:underline">Portfolio</a></li>
              <li><a href="/About" className="hover:underline">About</a></li>
              <li><a href="/Contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <ul className="list-none p-0 leading-relaxed">
              <li><a href="mailto:subham3720@gmail.com" className="hover:underline">subham3720@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/in/subham roy" className="hover:underline">LinkedIn</a></li>
              <li><a href="https://github.com/subhamcoder44" className="hover:underline">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} Subham Roy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
