import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/index.js";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

export { default } from "./ToggleSwitch.js";

export const InputTextGroup = tw.div`relative`;
export const InputButton = tw.button`bg-transparent border-none px-3 py-3 text-gray-500 absolute right-0 top-0 mt-2`;
export const InputBase = tw.input`w-full p-4 box-border rounded-md bg-white dark:bg-gray-black border border-solid border-white dark:border-gray-dark placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:bg-white focus:dark:border-primary-900 focus:dark:bg-gray-black dark:text-white invalid:border-state-danger autofill:bg-white dark:autofill:bg-gray-black shadow-none transition duration-300 ease-in-out`;
export const InputCheckboxGroup = styled.span`
	${tw`inline-block align-middle relative w-[20px] h-[20px] mr-2 border-solid border-2 border-gray-700 rounded-sm`}
	svg {
		${tw`absolute left-0 top-[-0.1em] pointer-events-none opacity-0 scale-75 text-primary-700 dark:text-primary-900 transition duration-300 ease-in-out`}
	}
	&.is-checked {
		${tw`border-primary-700 dark:border-primary-900`}
	}
	&.is-checked svg {
		${tw`opacity-100 scale-100`}
	}
`;
export const Checkbox = tw.input`appearance-none absolute overflow-hidden w-[20px] h-[20px] left-0 top-0 m-auto`;

export const InputPassword = ({ ...field }) => {
	const [showPassword, togglePassword] = useState(false);

	return (
		<InputTextGroup className="input-group">
			<InputBase type={showPassword ? "text" : "password"} {...field} />
			<InputButton
				onClick={() => togglePassword(!showPassword)}
				type="button"
			>
				{showPassword ? <Icon icon="eye-off" /> : <Icon icon="eye" />}
			</InputButton>
		</InputTextGroup>
	);
};

export const InputCheckbox = ({ ...field }) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<InputCheckboxGroup
			className={
				"input-checkbox " + (isChecked ? "is-checked" : "is-unchecked")
			}
		>
			<Checkbox
				type="checkbox"
				checked={isChecked}
				onClick={() => {
					setIsChecked(!isChecked);
				}}
				{...field}
			/>
			<Icon
				icon="check"
				size="18"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			/>
		</InputCheckboxGroup>
	);
};