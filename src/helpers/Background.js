import React from "react";
import tw from "twin.macro";

const Body = tw.div`bg-white text-black dark:bg-black dark:text-white transition-all`;

const Background = ({ children }) => {
	return (
		<Body className="body">
			{children}
		</Body>
	);
};

export default Background;