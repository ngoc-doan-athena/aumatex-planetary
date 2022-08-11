import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

const Background = ({ children }) => {
	return (
		<div className="body" tw="bg-white text-black dark:bg-black dark:text-white transition-all">
			{children}
		</div>
	);
};

export default Background;