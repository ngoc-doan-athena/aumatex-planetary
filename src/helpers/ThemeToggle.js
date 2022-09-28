import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line
import FeatherIcon from "feather-icons-react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = tw.div`absolute right-0 top-0 z-10`;
const ThemeToggleButton = tw.div`transition duration-500 ease-in-out rounded-full p-2 my-4 mx-2 text-2xl cursor-pointer text-gray-900 dark:text-primary-900`;

const Toggle = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<ThemeToggle className="theme-toggle">
			<ThemeToggleButton className="theme-toggle__button">
				{theme === "dark" ? (
					<FeatherIcon
						icon="sun"
						size="24"
						stroke-width="1.5"
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
					/>
				) : (
					<FeatherIcon
						icon="moon"
						size="24"
						stroke-width="1.5"
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
					/>
				)}
			</ThemeToggleButton>
		</ThemeToggle>
	);
};

export default Toggle;