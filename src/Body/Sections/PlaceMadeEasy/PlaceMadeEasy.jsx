import React from 'react';
import './PlaceMadeEasy.css';
import SearchIcon from './../../../Assets/Icons/Search.png';
import ClockIcon from './../../../Assets/Icons/Clock.png';
import CashIcon from './../../../Assets/Icons/Cash.png';

const PlaceMadeEasy = () => {
  return (
    <div className="PlaceMadeEasy">
      <h1>Finding Your Place Made Easy</h1>
      <p>
        We can help you easily find your dream home, an apartment to buy or
        rent, a new working space, or just a shortlet for a few nights.
      </p>
      <div className="Filters">
        <div className="Filters-Bar">
          <h1>
            <img src={SearchIcon} /> Filter and search
          </h1>
          <p>Browse our homes and properties, and find your favourite space.</p>
        </div>
        <div className="Filters-Bar">
          <h1>
            <img src={ClockIcon} /> Schedule a viewing
          </h1>
          <p>Look through our available properties and schedule a viewing.</p>
        </div>
        <div className="Filters-Bar">
          <h1>
            <img src={CashIcon} /> Make an offer
          </h1>
          <p>Make payment and prepare to move into your new space.</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceMadeEasy;
