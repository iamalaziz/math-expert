import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoArrowRight } from 'react-icons/go';
import './_header.scss';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

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
        {userInfo ? (
          <p className="user">{userInfo.name.split(' ')[0]}</p>
        ) : (
          <Link to="/login" className="login-btn">
            Login
            <span>
              <GoArrowRight />
            </span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
