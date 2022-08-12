import React, { useState } from "react";
import Icon from "../Icon/index.js";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

export const InputBase = tw.input`w-full p-4 box-border rounded-md bg-white dark:bg-gray-black border border-solid border-white dark:border-gray-dark placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:bg-white focus:dark:border-primary-900 focus:dark:bg-gray-black dark:text-white invalid:border-state-danger autofill:bg-white dark:autofill:bg-gray-black shadow-none transition duration-300 ease-in-out`;

export const InputPassword = ({ ...field }) => {
	const [showPassword, togglePassword] = useState(false);

	return (
		<div className="input-group" tw="relative">
			<InputBase type={showPassword ? "text" : "password"} {...field} />
			<button
				onClick={() => togglePassword(!showPassword)}
				type="button"
				tw="bg-transparent border-none px-3 py-3 text-gray-500 absolute right-0 top-0 mt-2"
			>
				{showPassword ? <Icon icon="eye-off" /> : <Icon icon="eye" />}
			</button>
		</div>
	);
};
