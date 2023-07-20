import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* Buttons */}
        <div className="flex items-center gap-4 ">
          <Link className="hover:text-violet-900 transition " to=''>Log in</Link>
          <Link className = "bg-violet-700 hover:bg-violet-800 px-2 py-1 text-white rounded-lg transition" to=''>Sign in</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
