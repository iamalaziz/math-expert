import React from 'react';

import {AiOutlineGithub} from 'react-icons/ai';
// import './_footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <p>
          Developed by <span>Abdulaziz</span> | 2023
        </p>
        <a href="https://github.com/iamalaziz">
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
