import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";

const HeaderAccountBox = tw.div`relative ml-auto`;
const HeaderAccountButton = tw.button`flex items-center font-bold border-none bg-transparent text-black dark:text-white cursor-pointer text-[1rem]`;
const HeaderAccountAvatar = tw.span`inline-block align-middle bg-gray-500 rounded-full p-5`;
const HeaderAccountText = tw.span`inline-block align-middle pl-4 pr-2`;

const HeaderAccount = () => {
	return (
		<HeaderAccountBox className="header-account">
			<HeaderAccountButton className="header-account__button">
				<HeaderAccountAvatar className="header-account__avatar" />
				<HeaderAccountText className="header-account__text">
					My Account
				</HeaderAccountText>
				<Icon icon="caret-down" />
			</HeaderAccountButton>
		</HeaderAccountBox>
	);
};

export default HeaderAccount;