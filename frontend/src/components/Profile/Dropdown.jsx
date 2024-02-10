import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IoMoonOutline } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';
import { GoChevronDown } from 'react-icons/go';

import './_dropdown.scss';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const handleClick = () => {
    if (userInfo) {
      setIsOpen(!isOpen);
    }
  };
  const handleBlur = () => {
    setIsOpen(false);
  };
  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`} onBlur={handleBlur}>
      <button className="btn-user" onClick={handleClick}>
        {userInfo ? (
          <>
            {userInfo.name}
            <GoChevronDown />
          </>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <button>
          <FaRegUserCircle />
          Profile
        </button>
        <button>
          <IoMoonOutline />
          Dark Mode
        </button>
        <button>
          <IoSettingsOutline />
          Settings
        </button>
        <button className="btn-logout">
          <AiOutlineLogout />
          Logout
        </button>
      </div>
    </div>
  );
};
