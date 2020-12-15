import react, { useRef } from 'react';
import React from 'react';


const Circle = () => {

    const textInput = react.useRef();
    const dektopValue = 80;

   setTimeout(() => {

    const canvas = document.getElementById('circle');
    const circle = canvas.getContext('2d');

    canvas.width  = 250;
    canvas.height = 250; 

    canvas.style.width = '10vw';
    canvas.style.height ='10vw';
    

    circle.beginPath();
    circle.moveTo(100, 130);
    circle.arc(100, 130, 100, 0, Math.PI * 2 * dektopValue / 100, false);
    circle.strokeStyle = '#7F7FD5';
    circle.closePath();
    circle.stroke();
    circle.fillStyle = '#7F7FD5';
    circle.fill();

    circle.beginPath();
    circle.fillStyle = '#FFFFFF';
    circle.font = "2vw Gilroy";
    circle.fillText(dektopValue+'%',50,150);
     
    circle.beginPath();
    circle.moveTo(120, 115);
    circle.arc(120, 115, 100, Math.PI * 2 * dektopValue / 100, 0, false);
    circle.strokeStyle = '#E786D7';
    circle.closePath();
    circle.stroke();
    circle.fillStyle = '#E786D7';
    circle.fill();

    circle.beginPath();
    circle.fillStyle = '#FFFFFF';
    circle.font = "2vw Gilroy";
    circle.fillText(100-dektopValue+'%',140,100);


   }, 0);
  

    return (
        <canvas ref = {textInput}  id="circle"/>
         )
    ;
};

export default Circle;

