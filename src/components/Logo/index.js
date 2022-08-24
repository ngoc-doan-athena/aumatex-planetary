import React from "react";

import logoLight from "../../images/logo-xtrading-text.svg";
import logoDark from "../../images/logo-xtrading-text-dark.svg";

import { ThemeContext } from "../../helpers/ThemeContext";

export const LogoByTheme = () => {
	const { theme } = React.useContext(ThemeContext);

	return (
		<img src={theme === "dark" ? logoDark : logoLight} alt="xTrading" />
	);
};