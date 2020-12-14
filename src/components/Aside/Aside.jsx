import React from 'react';
import ButtonSwitch from './ButtonSwitch';
import vk from '../../svg/vk.svg';
import home from '../../svg/home.svg';
import play from '../../svg/play.svg';
import paper from '../../svg/paper.svg';
import friends from '../../svg/friends.svg';
import mail from '../../svg/mail.svg';
import setting from '../../svg/setting.svg';
import statistic from '../../svg/statistic.svg';
import './Aside.scss';

const Aside = () => {
    const iconsList = [home, paper, friends, mail, play, statistic, setting];
    return (
        <aside className="aside">
          <div className="box-aside-main">
            <img src={vk} className="vk-icon" alt=""/>
            <div className="box-aside-icons">
              {iconsList.map((src,key) => (
                <img src={src} key={key} className="aside-icon" alt=""/>
              ))}
            </div>
              <ButtonSwitch/>
          </div>
      </aside>
    );
};

export default Aside;

