import React from 'react';

const HotEventsButton = () => {
  const showEvents = () => {
    alert("Music events: Concert in NYC, Festival in LA, etc.");
  };

  return <button onClick={showEvents}>Hot Events</button>;
};

export default HotEventsButton;
