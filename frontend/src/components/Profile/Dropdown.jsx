import { useState, Fragment, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';

import { IoMoonOutline } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';
import { GoChevronDown } from 'react-icons/go';

import './_dropdown.scss';
import { set } from 'mongoose';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const menuRef = useRef();
  window.addEventListener('click', (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const handleClick = () => {
    if (userInfo) {
      setIsOpen(!isOpen);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
      setIsOpen(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`} ref={menuRef}>
      <button className="btn-user" onClick={handleClick}>
        {userInfo ? (
          <Fragment>
            {userInfo.name}
            <GoChevronDown />
          </Fragment>
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
        <button className="btn-logout" onClick={handleLogout}>
          <AiOutlineLogout />
          Logout
        </button>
      </div>
    </div>
  );
};
