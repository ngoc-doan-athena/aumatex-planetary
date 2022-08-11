import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line
import FeatherIcon from "feather-icons-react";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<div className="theme-toggle" tw="absolute right-0 top-0 z-10">
			<div tw="transition duration-500 ease-in-out rounded-full p-2">
				{theme === "dark" ? (
					<FeatherIcon
						icon="sun"
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
						tw="text-gray-900 dark:text-primary-900 text-2xl cursor-pointer"
					/>
				) : (
					<FeatherIcon
						icon="moon"
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
						tw="text-gray-900 dark:text-primary-900 text-2xl cursor-pointer"
					/>
				)}
			</div>
		</div>
	);
};

export default Toggle;