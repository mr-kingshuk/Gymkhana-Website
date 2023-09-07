import React from 'react';
import styles from './Home.module.css';

//components
import HeroSection from '../../Components/HomeComponents/HeroSection/HeroSection';
import About from '../../Components/HomeComponents/About/About';
import FacultyDesk from '../../Components/HomeComponents/FacultyDesk/FacultyDesk';
import MembersPhoto from '../../Components/HomeComponents/MembersPhoto/MembersPhoto';
import Council from '../../Components/HomeComponents/Councils/Council';
import Activities from '../../Components/HomeComponents/Activities/Activities';

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <FacultyDesk />
      {/* Latest Events Details */}
      <MembersPhoto />
      <Council />
      <Activities />
      {/* Map of LNMIIT Jaipur */}
    </>
  )
};

export default Home;