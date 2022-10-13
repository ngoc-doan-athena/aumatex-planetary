import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";

const HeaderAccountBox = tw.div`relative ml-2`;
const HeaderAccountButton = tw.button`flex items-center font-bold border-none bg-transparent text-gray-900 dark:text-white cursor-pointer text-[1rem]`;
const HeaderAccountAvatar = tw.span`inline-block align-middle bg-primary-700 border border-solid border-white dark:border-gray-black rounded-full p-5`;
const HeaderAccountText = tw.span`hidden lg:inline-block align-middle lg:px-2`;

const HeaderAccount = ({ userAvatar, accountText }) => {
	return (
		<HeaderAccountBox className="header-account">
			<HeaderAccountButton className="header-account__button">
				<HeaderAccountAvatar
					className="header-account__avatar"
					style={{
						background:
							"url(" + userAvatar + ") no-repeat center / cover",
					}}
				/>
				<HeaderAccountText className="header-account__text">
					{accountText}
					<Icon icon="caret-down" tw="pl-2" />
				</HeaderAccountText>
			</HeaderAccountButton>
		</HeaderAccountBox>
	);
};

export default HeaderAccount;