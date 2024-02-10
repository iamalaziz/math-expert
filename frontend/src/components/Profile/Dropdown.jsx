import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IoMoonOutline } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';

import './_dropdown.scss';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const handleClick = () => {
    if(userInfo) {
      setIsOpen(!isOpen)
    } 
  }
  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="user" onClick={handleClick}>
        {userInfo ? (
          userInfo.name
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <button>
          <span>
            <FaRegUserCircle />
          </span>
          <span>Profile</span>
        </button>
        <button>
          <span>
            <IoMoonOutline />
          </span>
          <span>Dark Mode</span>
        </button>
        <button>
          <span>
            <IoSettingsOutline />
          </span>
          <span>Settings</span>
        </button>
        <button className="btn-logout">
          <span>
            <AiOutlineLogout />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
