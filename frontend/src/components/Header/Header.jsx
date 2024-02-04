import React from 'react';
import { Link } from 'react-router-dom';

import { GoArrowRight } from 'react-icons/go';
import './_header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className="logo">
          <span className="paint">MATH</span> Expert
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/questions">Questions</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Link to="/login" className="login-btn">
          Login
          <span>
            <GoArrowRight />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
