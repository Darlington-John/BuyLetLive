import React from 'react';
import './Navbar.css';
import Logo from './../../Assets/Images/image 1.png';
import AngleDown from './../../Assets/Icons/u_angle-down.png';
import Profile from './../../Assets/Icons/u_user-circle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { toggleNav } from './../../JavaScript.js';

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [icon, setIcon] = useState(faBars);

  const handleToggleNav = () => {
    toggleNav();
    setIsOverlayOpen(!isOverlayOpen);
    setIcon(isOverlayOpen ? faBars : faTimes);
  };
  return (
    <div>
      <div className="NavBar">
        <div className="Links">
          <a href="#" className="Logo">
            <img src={Logo} />
          </a>
          <div className="Nav">
            <a href="#">Rent</a>
            <a href="#">Buy</a>
            <a href="#">Shortlet</a>
            <a href="#">Developers</a>
            <a href="#" className="Art">
              Articles
              <img src={AngleDown} />
            </a>
          </div>
          <a href="#" className="Nave">
            Request Property{' '}
            <button>
              <img src={Profile} />
            </button>
          </a>
          <div className="BarsIcon">
            <a onClick={handleToggleNav}>
              <FontAwesomeIcon
                id="barsIcon"
                icon={icon}
                style={{ fontSize: '35px', float: 'right' }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="Overlay" id="myNav">
        <div className="Overlay-content">
          <a href="#">Rent</a>
          <a href="#">Buy</a>
          <a href="#">Shortlet</a>
          <a href="#">Developers</a>
          <a href="#">
            Articles
            <img src={AngleDown} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
