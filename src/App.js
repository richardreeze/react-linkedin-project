import React from 'react';
import './App.css';
import logo from './images/logo.png';
import Icon from './components/icon.js';
import home from './images/home.png';
import network from './images/network.png';
import jobs from './images/jobs.png';
import messaging from './images/messaging.png';
import notifications from './images/notifications.png';
import me from './images/me.png';

const App = () => {
  return (
    <div>
      <ul className="navbar">
        <div className="start">
          <li><img className="logo" src={logo} alt="Logo"/></li>
          <li><input className="search" placeholder="Search"></input></li>
        </div>
        <div className="end">
          <Icon source={home} alt="Home"/>
          <Icon source={network} alt="Network"/>
          <Icon source={jobs} alt="Jobs"/>
          <Icon source={messaging} alt="Messaging"/>
          <Icon source={notifications} alt="Notifications"/>
          <Icon source={me} alt="Me"/>
        </div>
      </ul>
      <div className="boxes">
        <div className="box1">
          
        </div>
        <div className="box2">
        </div>
        <div className="box3">
          
        </div>
      </div>
    </div>
  );
};

export default App;
