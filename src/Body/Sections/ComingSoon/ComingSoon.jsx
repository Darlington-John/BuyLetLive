import React from 'react';
import BlackPhoneImg from './../../../Assets/Images/BlackPhone.png';
import PhoneViewImg from './../../../Assets/Images/PhoneView.png';
import ViewImg from './../../../Assets/Images/View.png';
import AppStoreImg from './../../../Assets/Images/AppPlaystore.png';
import PlaystoreImg from './../../../Assets/Images/Playstore.png';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="ComingSoon">
      <div className="Mobile">
        <div className="FlexLeftComingSoon">
          <h1>
            Our mobile apps are coming soon. All property types at your finger
            tips.
          </h1>
          <img src={AppStoreImg} className="Cursor" />
          <img src={PlaystoreImg} className="Cursor" />
        </div>
        <div className="FlexRightComingSoon">
          <div className="PhoneFrame">
            <img src={BlackPhoneImg} className="BlackPhone" />
            <img src={PhoneViewImg} className="PhoneView" />
            <img src={ViewImg} className="View" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
