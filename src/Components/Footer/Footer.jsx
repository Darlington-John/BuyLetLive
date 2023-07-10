import React from 'react';
import Logo from './../../Assets/Images/image 1.png';
import TwitterIcon from './../../Assets/Icons/Twitter.png';
import InstagramIcon from './../../Assets/Icons/Instagram.png';
import LinkedInIcon from './../../Assets/Icons/LinkedIn.png';
import NavigatorImg from './../../Assets/Icons/Navigator.png';
import './Footer.css';
import { Faqs, RentButtons } from '../Buttons/Buttons';
const Footer = () => {
  return (
    <div className="Footer">
      <div className="FlexLeft">
        <img src={Logo} />
        <div className="Media">
          <img src={TwitterIcon} className="Cursor" />
          <img src={InstagramIcon} className="Cursor" />
          <img src={LinkedInIcon} className="Cursor" />
        </div>
        <p>
          <span className="Lagos">Lagos: </span>
          13, Otunba Adedoyin Ogungbe Crescent, Lekki Phase 1, Lagos, Nigeria.
        </p>
        <p>
          <span className="Lagos">London: </span>
          Kemp House, 160 City Road, London, EC1V 2NX.
        </p>
        <RentButtons />
        <Faqs />
      </div>
      <div className="FlexRight">
        <h1>Subscribe to our newsletter</h1>
        <p>
          Stay updated with all the happening in the real estate space in
          Nigeria
        </p>
        <div className="InputBar">
          <input placeholder="Your email address"></input>
          <button className="Cursor">
            <img src={NavigatorImg} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
