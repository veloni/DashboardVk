import React from 'react';
import './Header.scss';
import notification from '../../svg/notification.svg';
import avatar from '../../img/avatar.png';
import userSwitch from '../../svg/user-switch.svg';

const Header = () => {
  return (
    <header className="header">
      <span className="header-title-text"> 
        Statistics
      </span>
      <input className="search" type="search"></input>
      <img 
        src={notification} 
        className="notification" 
        alt=""
      />
      <div className="header-box-user">
        <span className="text-name-user"> Anya </span>
        <img 
          className="avatar-icon" 
          src={avatar} 
          alt=""
        />
        <img 
          className="user-switch" 
          src={userSwitch} 
          alt=""
        />
      </div>
    </header>
  );
};


export default Header;