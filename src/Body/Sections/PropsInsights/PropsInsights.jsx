import React from 'react';
import './PropsInsights.css';
import { AltCards } from '../../../Components/Cards/Cards';

import CabinImg from './../../../Assets/Images/Cabin.png';
import EraImg from './../../../Assets/Images/Era.png';
import SocietyImg from './../../../Assets/Images/Society.png';
import PropTypes from 'prop-types';
import { DisabledButton } from '../../../Components/Buttons/Buttons';

const PropsInsights = () => {
  return (
    <div className="PropsInsights">
      <h1>Properties Insights</h1>
      <p>Stay up-to-date with real estate news and articles</p>
      <div className="AltCards">
        <AltCards
          image={CabinImg}
          insights="Will The Housing Market Still Accommodate Me?"
          date="11th May 2023"
          time="3min read"
        />
        <AltCards
          image={EraImg}
          insights="How a Mortgage System Can Enhance Affordable Homeownership In Nigeria"
          date="11th May 2023"
          time="12min read"
        />
        <AltCards
          image={SocietyImg}
          insights="Three Crucial Tips for Buying Real Estate in Lagos"
          date="11th May 2023"
          time="5min read"
        />
        <AltCards
          image={CabinImg}
          insights="Will The Housing Market Still Accommodate Me?"
          date="11th May 2023"
          time="3min read"
        />
        <AltCards
          image={EraImg}
          insights="How a Mortgage System Can Enhance Affordable Homeownership In Nigeria"
          date="11th May 2023"
          time="12min read"
        />
        <AltCards
          image={SocietyImg}
          insights="Three Crucial Tips for Buying Real Estate in Lagos"
          date="11th May 2023"
          time="5min read"
        />
      </div>
      <DisabledButton text="Get More Insights" />
    </div>
  );
};
AltCards.propTypes = {
  insights: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PropsInsights;
