import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

import './Support.scss';

const Support = () => {
  return (
    <div className="logo-support">

      <div className="logo-support__logo">
        <Link to="/">
          <img src={logo}/>
          <span>Technologies</span>
        </Link>
      </div>

      <div className="logo-support__title">
        Get how-to help and instructions or specific features in
      </div>

      <div className="logo-support__button">
        <button>Help center</button>
        <span>or</span>
        <button>Support</button>
      </div>

    </div>
  );
}

export default Support;
