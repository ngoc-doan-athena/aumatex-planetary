import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

const ButtonBase = styled.button`
	${tw`tracking-wide border border-solid text-black font-bold rounded-md focus:outline-none text-center p-4 transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:pointer-events-none`}
	${(props) =>
		props.isPrimary &&
		css`
			${tw`bg-primary-700 border-primary-700 hocus:bg-primary-900 hocus:border-primary-900 disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-600`}
		`}
	${(props) =>
		props.isSecondary &&
		css`
			${tw`bg-white border-primary-500 text-primary-500 hocus:border-primary-700 hocus:text-primary-700 disabled:border-gray-400 disabled:text-gray-600`}
		`}
	${(props) =>
		props.isWarning &&
		css`
			${tw`bg-white text-state-warning border-state-warning`}
		`}
	${(props) =>
		props.isNeutral &&
		css`
			${tw`bg-white border-gray-dark text-gray-dark`}
		`}
`;

export const Button = ({ textButton, ...field }) => (
	<ButtonBase {...field}>{textButton}</ButtonBase>
);