import React from "react";
import PropTypes from "prop-types";
import icons from "../Icon/icons.json";

const createMarkup = (markup) => {
	return { __html: markup };
};

const IconInner = ({ icon }) => {
	const iconMarkup = icons[icon];

	if (iconMarkup) {
		return <g dangerouslySetInnerHTML={createMarkup(iconMarkup)} />;
	}
	return null;
};

IconInner.propTypes = {
	icon: PropTypes.string.isRequired,
};

export default IconInner;