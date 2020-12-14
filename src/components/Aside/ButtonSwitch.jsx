import { useState } from 'react';
import { useRef } from 'react';

const ButtonSwitch = (
    dark,
    white,
) => {
    const button = useRef(null); 

    const switchTheme = () => {
        button.current.style.marginLeft = "0px";
    }

    return (
        <div className="button-switch-black-theme" onClick={switchTheme} alt="">
              <div className="button-switch-black-theme-cirlce" ref={button}>       
              </div>
        </div>
      );
    };


export default ButtonSwitch