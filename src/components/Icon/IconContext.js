import React from "react";
import PropTypes from "prop-types";
import icons from "../Icon/icons.json";

const createMarkup = (markup) => {
	return { __html: markup };
};

const IconContext = ({ icon }) => {
	const iconMarkup = icons[icon];

	if (iconMarkup) {
		return <g dangerouslySetInnerHTML={createMarkup(iconMarkup)} />;
	}
	return null;
};

IconContext.propTypes = {
	icon: PropTypes.string.isRequired,
};

export default IconContext;