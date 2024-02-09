import { useRef, useState } from 'react';
import { IoMoonOutline } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';

import './styles.css';

// const Icon = ({ children, iconRef, className }) => (
//   <span
//     ref={iconRef}
//     className={`${className || ""} material-symbols-outlined`}
//   >
//     {children}
//   </span>
// );

export const Dropdown = () => {
  const buttonRef = useRef(null);
  const chevronRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [menuTop, setMenuTop] = useState();
  const [menuRight, setMenuRight] = useState();

  const handleClick = () => {
    const buttonRect = buttonRef?.current?.getBoundingClientRect();
    const chevronRect = chevronRef?.current?.getBoundingClientRect();

    if (buttonRect && chevronRect && isOpen) {
      const menuRight = buttonRect.right - chevronRect.right;
      const menuTop = chevronRect.top - buttonRect.top;
      setMenuRight(`${menuRight}px`);
      setMenuTop(`${menuTop}px`);
    } else {
      setMenuRight('0');
      setMenuTop('78px');
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button ref={buttonRef} onClick={handleClick}>
        <span>Preferences</span>
      </button>
      <div
        className={`menu ${isOpen ? 'open' : ''}`}
        style={{ right: menuRight, top: menuTop }}
      >
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
        <button>
          <span>
            <AiOutlineLogout />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
