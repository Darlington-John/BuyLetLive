import React from 'react';
import Cards from '../../../Components/Cards/Cards';
import HumbleHomeImg from './../../../Assets/Images/HumbleHome.jpg';
import MansionImg from './../../../Assets/Images/Mansion.jpg';
import YusufImg from './../../../Assets/Images/Yusuf.png';
import ClassicImg from './../../../Assets/Images/Classic.png';
import BeautyImg from './../../../Assets/Images/Beauty.png';
import ValentineImg from './../../../Assets/Images/Valentine.png';
import PropTypes from 'prop-types';
import './FeaturedProps.css';

const FeaturedProps = () => {
  return (
    <div className="con">
      <div className="FeaturedProps">
        <div className="CardsContainerMax">
          <h1>Featured Properties</h1>

          <div className="CardsContainerMin">
            <Cards
              estate="Olaide Estate"
              image={HumbleHomeImg}
              price="₦100,000"
              post="Posted 11th May 2023"
              location="Victoria Island, Lagos"
            />
            <Cards
              estate="Jocelyn Homes"
              image={MansionImg}
              price="₦2,000,000"
              post="Posted 11th May 2023"
              location="Victoria Island, Lagos"
            />
            <Cards
              estate="Yusuf Homes"
              image={YusufImg}
              price="₦100,050,000"
              post="Posted 11th May 2023"
              location="Victoria Island, Lagos"
            />
            <Cards
              estate="Olaide Estate"
              image={ClassicImg}
              price="₦2,000,000"
              post="Posted 11th May 2023"
              location="Victoria Island, Lagos"
            />
            <Cards
              estate="Jocelyn Homes"
              image={BeautyImg}
              price="₦2,000,000"
              post="Posted 11th May 2023"
              location="Victoria Island, Lagos"
            />
            <Cards
              estate="Yusuf Homes"
              image={ValentineImg}
              price="₦100,050,000"
              post="Posted 11th May 2023"
              location="Victoria Island, Lagos"
            />
          </div>
        </div>
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
export default FeaturedProps;
