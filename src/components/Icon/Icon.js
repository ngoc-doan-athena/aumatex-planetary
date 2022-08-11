import React from "react";
import PropTypes from "prop-types";
import IconInner from "../Icon/IconInner";

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
			viewBox="0 0 24 24"
			fill={fill}
			stroke={stroke}
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`icon icon-${icon} ${className}`}
			{...otherProps}
		>
			<IconInner icon={icon} />
		</svg>
	);
};

Icon.propTypes = {
	icon: PropTypes.string.isRequired, // icon name that matches exactly from Icons
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	className: PropTypes.string,
	fill: PropTypes.string,
};

export default Icon;