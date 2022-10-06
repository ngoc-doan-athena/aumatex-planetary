import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

export const Label = styled.span`
	${tw`inline-block align-middle p-2 lg:w-28 rounded-full text-[0.8rem] border border-solid text-center`}
	${props => props.success ? `${tw` bg-state-success/10 text-state-success border-state-success`}`}
	${props => props.danger ? `${tw`bg-state-danger/10 text-state-danger border-state-danger`}`}
	${props => props.warning ? `${tw`bg-state-warning/10 text-state-warning border-state-warning`}`}
	${props => props.neutral ? `${tw`bg-gray-700/10 text-gray-700 border-gray-700`}`}
	${props => props.aggressive ? `${tw`bg-primary-700/10 text-primary-700 border-primary-700`}`}
	${props => props.conservative ? `${tw`bg-blue-700/10 text-blue-700 border-blue-700`}`}
`;