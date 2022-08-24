import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";
import FeatherIcon from "feather-icons-react";

const Header = tw.header`relative py-4`;
const HeaderLogo = tw.p`block text-center lg:hidden`;
const HeaderContent = tw.div`flex flex-row`;
const HeaderSearch = tw.div`relative`;
const HeaderAccount = tw.div`relative ml-auto`;
const HeaderAccountButton = tw.button`flex items-center font-bold border-none bg-transparent text-black dark:text-white cursor-pointer`;
const HeaderAccountAvatar = tw.span`inline-block align-middle bg-gray-500 rounded-full p-5`;
const HeaderAccountText = tw.span`inline-block align-middle px-4`;
const Heading = tw.h2`m-0 inline-block align-middle`;

const HeaderSearch = ({ headingText }) => {
	return (
		<Header className="header">
			<HeaderContent className="header-content">
				<HeaderLogo className="header-logo" />
				<HeaderAccount className="header-account">
					<HeaderAccountButton className="header-account__button">
						<HeaderAccountAvatar className="header-account__avatar" />
						<HeaderAccountText className="header-account__text">My Account</HeaderAccountText>
						<Icon icon="caret-down" />
					</HeaderAccountButton>
				</HeaderAccount>
			</HeaderContent>
		</Header>
	);
};

export default HeaderSearch;