import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

const LabelBase = styled.span`
	${tw`inline-block align-middle py-1 px-2 rounded-full text-[0.8rem] border border-solid text-center font-normal`}
	${(props) =>
		props.isSuccess &&
		css`
			${tw`bg-state-success/10 text-state-success border-state-success`}
		`}
	${(props) =>
		props.isDanger &&
		css`
			${tw`bg-state-danger/10 text-state-danger border-state-danger`}
		`}
	${(props) =>
		props.isWarning &&
		css`
			${tw`bg-state-warning/10 text-state-warning border-state-warning`}
		`}
	${(props) =>
		props.isNeutral &&
		css`
			${tw`bg-gray-700/10 text-gray-700 border-gray-700`}
		`}
	${(props) =>
		props.isAggressive &&
		css`
			${tw`bg-primary-700/10 text-primary-700 border-primary-700`}
		`}
	${(props) =>
		props.isConservative &&
		css`
			${tw`bg-blue-700/10 text-blue-700 border-blue-700`}
		`}
`;

export const Label = ({
	textLabel,
	...props
}) => <LabelBase {...props}>{textLabel}</LabelBase>;