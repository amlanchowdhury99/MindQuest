import React from 'react';
import SearchBox from '../../components/SearchBox';
import LibraryDetailsButton from '../../components/LibraryDetailsButton';
import HotEventsButton from '../../components/HotEventsButton';
import ClassroomDetailsButton from '../../components/ClassroomDetailsButton';
import AboutUs from '../../components/AboutUs';
import Chatbot from '../../components/Chatbot';
import './homePage.css';


const HomePage = () => {
  return (
    <div className="home-container">
      <div className="search-container">
        <SearchBox />
      </div>
      <div className="buttons-container">
        <div className="button-wrapper">
          <HotEventsButton />
        </div>
        <div className="button-wrapper">
          <ClassroomDetailsButton />
        </div>
        <div className="button-wrapper">
          <LibraryDetailsButton />
        </div>
      </div>
      <div className="additional-content">
        <AboutUs />
      </div>
      <div className="chatbot-container">
        <Chatbot />
      </div>
    </div>
  );
};

export default HomePage;
