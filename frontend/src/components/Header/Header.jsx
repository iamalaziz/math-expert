import React from 'react';
import { NavLink } from 'react-router-dom';
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
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/questions">Questions</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
