import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';
import { Emojis, HouseFeatures } from '../Buttons/Buttons';

const Cards = (props) => {
  return (
    <div className="card">
      <div className="ImgButtons">
        <Emojis />
        <img className="CardImg" src={props.image} />
      </div>
      <h3>{props.estate}</h3>
      <div className="Price">
        <h3> {props.price}</h3>
        <p>{props.location}</p>

        <HouseFeatures />
        <p>{props.post}</p>
      </div>
    </div>
  );
};

Cards.propTypes = {
  estate: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};

export const AltCards = (props) => {
  return (
    <div className="card" id="card">
      <div className="ImgButtons">
        <img className="CardImg" src={props.image} />
      </div>
      <h3>{props.insights}</h3>
      <div className="float">
        <p className="date">{props.date}</p>

        <p className="time">{props.time}</p>
      </div>
    </div>
  );
};

AltCards.propTypes = {
  insights: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Cards;
