import React from 'react';
import './landingPage.css';
import Navbar from '../Components/Navbar/Navbar';

import FeaturedProps from './../Body/Sections/FeaturedProperties/FeaturedProps';
import PlaceMadeEasy from './../Body/Sections/PlaceMadeEasy/PlaceMadeEasy';
import PropsInsights from './../Body/Sections/PropsInsights/PropsInsights';
import FinancingPartners from './../Body/Sections/FinancingPartners/FinancingPartners';
import ComingSoon from './../Body/Sections/ComingSoon/ComingSoon';
import Footer from '../Components/Footer/Footer';
import FindYourWayHome from './../Body/Sections/FindYourWayHome/FindYourWayHome';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FindYourWayHome />
      <FeaturedProps />
      <PlaceMadeEasy />
      <PropsInsights />
      <FinancingPartners />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default LandingPage;
