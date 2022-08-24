import React from "react";
import PropTypes from "prop-types";
import IconContext from "../Icon/IconContext";

// Setting values for the props
const Icon = ({
	icon,
	size = 24,
	className = "",
	fill = "currentColor",
	stroke = "none",
	...otherProps
}) => {
	if (!icon) {
		return null;
	}

	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			fill={fill}
			stroke={stroke}
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`icon-${icon}`}
			{...otherProps}
		>
			<IconContext icon={icon} />
		</svg>
	);
};

Icon.propTypes = {
	icon: PropTypes.string.isRequired, // get icon name from json
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	className: PropTypes.string,
	fill: PropTypes.string,
};

export default Icon;