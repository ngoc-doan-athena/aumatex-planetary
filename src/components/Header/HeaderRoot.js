import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";
import HeaderAccount from "../Header/HeaderAccount.js";

const Header = tw.header`relative pr-[1.5rem] py-4`;
const HeaderLogo = tw.p`block text-center lg:hidden`;
const HeaderContent = tw.div`flex flex-row items-center`;
const HeaderSearch = tw.div`relative`;
const Heading = tw.h1`m-0 inline-block align-middle text-[1.2rem] lg:text-[2rem]`;

const HeaderRoot = ({ headingText }) => {
	return (
		<Header className="header">
			<HeaderContent className="header-content">
				<HeaderLogo className="header-logo" />
				<HeaderSearch className="header-search"></HeaderSearch>
				<Heading>{headingText}</Heading>
				<HeaderAccount />
			</HeaderContent>
		</Header>
	);
};

export default HeaderRoot;