import React from 'react';
import './App.css';
import logo from './images/logo.png';
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
        <li><img className="logo" src={logo} alt="Logo"/></li>
        <li><input className="search" placeholder="Search"></input></li>
        <li><img className="icon" src={home} alt="Home"/></li>
        <li><img className="icon" src={network} alt="Network"/></li>
        <li><img className="icon" src={jobs} alt="Jobs"/></li>
        <li><img className="icon" src={messaging} alt="Messaging"/></li>
        <li><img className="icon" src={notifications} alt="Notifications"/></li>
        <li><img className="icon" src={me} alt="Me"/></li>
      </ul>
    </div>
  );
};

export default App;
