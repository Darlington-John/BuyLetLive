import React from 'react';
import './Buttons.css';
import PropTypes from 'prop-types';
import ShrinkIcon from './../../Assets/Icons/Shrink.png';
import ToiletIcon from './../../Assets/Icons/Toilet.png';
import BathIcon from './../../Assets/Icons/Bath.png';
import BedIcon from './../../Assets/Icons/Bed.png';
import StarIcon from './../../Assets/Icons/Star.png';
import FavoriteIcon from './../../Assets/Icons/Favorite.png';

const Button = (props) => {
  return <button className="Button">{props.text}</button>;
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export const DisabledButton = (props) => {
  return (
    <div className="DisButton">
      <button className="DisabledButton">{props.text}</button>
    </div>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export const HouseFeatures = () => {
  return (
    <div className="HouseFeatures">
      <button className="HouseFeatures">
        <img src={ShrinkIcon} /> 1200sqm
      </button>
      <button className="HouseFeatures">
        <img src={BedIcon} />5
      </button>
      <button className="HouseFeatures">
        <img src={BathIcon} />3
      </button>
      <button className="HouseFeatures">
        <img src={ToiletIcon} />5
      </button>
    </div>
  );
};

export const Emojis = () => {
  return (
    <div className="Emojis">
      <button className="Emoji">
        <img src={FavoriteIcon} />
      </button>
      <button className="Emoji">Rent</button>
      <button className="Emoji">
        <img src={StarIcon} />
      </button>
    </div>
  );
};

export const RentButtons = () => {
  return (
    <div className="RentButtons">
      <button className="Cursor">Rent</button>
      <button className="Cursor">Buy</button>
      <button className="Cursor">Shortlet</button>
    </div>
  );
};

export const Faqs = () => {
  return (
    <div className="Faqs">
      <button className="Cursor">About us</button>
      <button className="Cursor">Contact us</button>
      <button className="Cursor">FAQs</button>
      <button className="Cursor">Blog</button>
      <button className="Cursor">Privacy Policy</button>

      <button className="Cursor">Terms of Use</button>
      <button className="Cursor">Disclaimer</button>
    </div>
  );
};

export default Button;
