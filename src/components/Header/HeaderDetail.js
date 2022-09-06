import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";
import FeatherIcon from "feather-icons-react";
import HeaderAccount from "../Header/HeaderAccount.js";

const Header = tw.header`relative py-4`;
const HeaderLogo = tw.p`block text-center lg:hidden`;
const HeaderContent = tw.div`flex flex-row`;
const HeaderSearch = tw.div`relative`;
const Heading = styled.h1`
	${tw`m-0 inline-block align-middle text-[1.5rem]`}
	svg {
		${tw`inline-block align-middle mr-2`}
	}
`;
const HeadingLink = tw.a`inline-block align-middle no-underline text-black dark:text-white`;

const HeaderDetail = ({ headingText }) => {
	return (
		<Header className="header">
			<HeaderContent className="header-content">
				<HeaderLogo className="header-logo" />
				<HeaderSearch className="header-search"></HeaderSearch>
				<Heading>
					<HeadingLink href="/myexchanges">
						<FeatherIcon icon="arrow-left" />
						{headingText}
					</HeadingLink>
				</Heading>
				<HeaderAccount />
			</HeaderContent>
		</Header>
	);
};

export default HeaderDetail;