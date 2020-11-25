import React from 'react';
import play from '../../svg/play.svg';
import paper from '../../svg/paper.svg';
import friends from '../../svg/friends.svg';
import './Aside.scss';

const Aside = () => {
    const iconsList = [play, paper, friends];
    return (
        <aside className="aside">
        <div className="box-aside-main">
          {iconsList.map((src,key) => (
            <img src={src} key={key} alt=""/>
          ))}
        </div>
      </aside>
    );
};

export default Aside;

