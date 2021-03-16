import { useRef, useEffect } from 'react';

const Circle = () => {
	const refCanvas = useRef(null);

	useEffect(() => {
		const canvas = refCanvas.current;
		const circle = canvas.getContext("2d");
		const dektopValue = 80;

		canvas.width  = 250;
		canvas.height = 250; 

		canvas.style.width = "10vw";
		canvas.style.height ='10vw';
		
		circle.beginPath();
		circle.moveTo(100, 130);
		circle.arc(100, 130, 100, 0, Math.PI * 2 * dektopValue / 100, false);
		circle.strokeStyle = "#7F7FD5";
		circle.closePath();
		circle.stroke();
		circle.fillStyle = "#7F7FD5";
		circle.fill();

		circle.beginPath();
		circle.fillStyle = "#FFFFFF";
		circle.font = "2rem Gilroy";
		circle.fillText(dektopValue + '%', 50, 150);
			
		circle.beginPath();
		circle.moveTo(120, 115);
		circle.arc(120, 115, 100, Math.PI * 2 * dektopValue / 100, 0, false);
		circle.strokeStyle = "#E786D7";
		circle.closePath();
		circle.stroke();
		circle.fillStyle = "#E786D7";
		circle.fill();

		circle.beginPath();
		circle.fillStyle = "#FFFFFF";
		circle.font = "2rem Gilroy";
		circle.fillText(100 - dektopValue + "%", 140, 100);
	},[]);
    
	return (
		<canvas ref={refCanvas} id="circle" className="canvas-circle-graph"/>
	);
};

export default Circle;

