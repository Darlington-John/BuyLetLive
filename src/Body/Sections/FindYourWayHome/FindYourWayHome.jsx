import React, { useState } from 'react';
import HomeImg from './../../../Assets/Images/House.jpg';
import './FindYourWayHome.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Components/Buttons/Buttons';

const FindYourWayHome = () => {
  const WayHomeStyle = {
    background: `url("${HomeImg}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const buttonIds = ['Rent', 'Buy', 'Shortlet'];
  const [activeId, setActiveId] = useState(buttonIds[0]);

  const handleButtonClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="WayHome" style={WayHomeStyle}>
      <div className="Gradient">
        <h1>Find Your Way Home </h1>
        <div className="SegmentDiv">
          <div className="SegmentBar">
            <div className="Segment">
              {buttonIds.map((id) => (
                <button
                  key={id}
                  id={id}
                  className={id === activeId ? 'active' : ''}
                  onClick={() => handleButtonClick(id)}
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
          <div className="InputBar">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                id="search-input"
                placeholder="Search a location e.g. Ikeja"
              ></input>
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <Button text="Find Houses" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourWayHome;
