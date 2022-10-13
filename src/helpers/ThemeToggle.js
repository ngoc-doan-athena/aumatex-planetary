import React from "react";
import tw from "twin.macro";

import FeatherIcon from "feather-icons-react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = tw.div`relative`;
const ThemeToggleButton = tw.div`transition duration-500 ease-in-out rounded-md p-3 text-2xl cursor-pointer text-gray-900 dark:text-white border border-solid border-gray-300 dark:border-gray-900 hover:text-primary-700 hover:border-primary-700 text-[0px]`;

const Toggle = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<ThemeToggle className="theme-toggle">
			<ThemeToggleButton
				className="theme-toggle__button"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				{theme === "dark" ? (
					<FeatherIcon icon="sun" size="24" strokeWidth="1.5" />
				) : (
					<FeatherIcon icon="moon" size="24" strokeWidth="1.5" />
				)}
			</ThemeToggleButton>
		</ThemeToggle>
	);
};

export default Toggle;