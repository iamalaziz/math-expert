import React from 'react';
import { Link } from 'react-router-dom';
import './_header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>
          <span className="paint">MATH</span> Trainer
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
      </div>
    </header>
  );
};

export default Header;
