import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

export const Button = styled.button`
	${tw`tracking-wide border-none text-black font-bold rounded-md focus:outline-none text-center p-4 transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-none disabled:bg-gray-400 disabled:text-gray-600`}
	${props => props.primary ? `${tw`bg-gradient-to-b from-primary-300 to-primary-900 hocus hocus:from-primary-900 hocus hocus:to-primary-300`}`}
	${props => props.secondary ? `${tw`bg-transparent border-primary-500 text-primary-500 hocus:border-primary-700 hocus:text-primary-700`}`}
`;

export const PrimaryButton = tw.button`tracking-wide font-semibold border-none bg-gradient-to-b from-primary-300 to-primary-900 text-black w-full py-4 rounded-md hover:from-primary-900 hover:to-primary-300 transition ease-in-out duration-300 ease-in-out focus:shadow-outline focus:outline-none text-center`;
export const SecondaryButton = tw.button`px-4 py-3 font-bold rounded bg-transparent border-primary-500 text-primary-500 hocus:border-primary-700 hocus:text-primary-700 focus:shadow-outline focus:outline-none transition duration-300 text-center`;
export const DisabledButton;
