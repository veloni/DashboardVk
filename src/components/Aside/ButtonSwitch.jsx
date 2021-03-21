import { useState } from 'react';

import '../../vars_and_mixins/colors.scss';

const ButtonSwitch = ({ switchTheme }) => {
	const [open, setOpen] = useState(true);

	const switchThemeButton = () => {
		if (open) {
			setOpen(!open);
			switchTheme(open);
			return;
		}
		setOpen(!open);
		switchTheme(open);
	}

	return (
		<div
			className={open ? "button-switch-black-theme" : "button-switch-white-theme"} 
			onClick={switchThemeButton}
		>
			<div
				className={open ? "button-switch-black-theme-cirlce" : "button-switch-white-theme-cirlce"}
			/>
		</div>
	);
};

export default ButtonSwitch;