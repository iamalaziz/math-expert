import React from 'react';
import { Link } from 'react-router-dom';
import './_header.scss';
import { Dropdown } from '../Profile/Dropdown';

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
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
