import { useState } from 'react';
import { useRef } from 'react';
import '../../vars_and_mixins/colors.scss';

const ButtonSwitch = ({
	switchTheme,
}) => {
	const button = useRef(null); 
	const circleButton = useRef(null); 
	const [open, setOpen] = useState(true);
	
	const switchThemeButton = () => {
		if (open === true) {
			button.current.classList = 'button-switch-white-theme';
			circleButton.current.classList = 'button-switch-white-theme-cirlce';

			setOpen(!open);
			switchTheme(open);
		
			return;
		}

		button.current.classList = 'button-switch-black-theme';
		circleButton.current.classList = 'button-switch-black-theme-cirlce';

		setOpen(!open);
		switchTheme(open);
	}

	return (
		<div 
			className="button-switch-black-theme" 
			onClick={switchThemeButton} 
			ref={button}
		>
			<div 
				className="button-switch-black-theme-cirlce" 
				ref={circleButton}
			/>       
	</div>
	);
};


export default ButtonSwitch