import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";
import FeatherIcon from "feather-icons-react";
import HeaderAccount from "../Header/HeaderAccount.js";

const Header = tw.header`relative pr-[1.5rem] lg:pr-[0px] py-4`;
const HeaderLogo = tw.p`block text-center lg:hidden`;
const HeaderContent = tw.div`flex flex-row items-start lg:items-center`;
const HeaderSearch = tw.div`relative`;
const Heading = styled.h1`
	${tw`m-0 inline-block align-middle text-[1rem] text-[1.5rem]`}
	svg {
		${tw`inline-block align-middle mr-2`}
	}
`;
const HeadingLink = tw.a`inline-block align-middle no-underline text-black dark:text-white`;
const LabelSuccess = tw.span`inline-block py-1 lg:py-2 px-2 lg:w-28 rounded-full text-[0.8rem] font-normal bg-state-success/10 text-state-success border border-solid border-state-success text-center ml-8 lg:ml-2`;
const LabelDanger = tw.span`inline-block py-1 lg:py-2 px-2 lg:w-28 rounded-full text-[0.8rem] font-normal bg-state-danger/10 text-state-danger border border-solid border-state-danger text-center ml-8 lg:ml-2`;

const HeaderDetail = ({ headingText }) => {
	let connectedStatus = new URLSearchParams(window.location.search).get(
		"connected"
	);

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
					{connectedStatus === "true" ? (
						<LabelSuccess className="label-success">
							Connected
						</LabelSuccess>
					) : (
						<LabelDanger className="label-danger">
							Disconnected
						</LabelDanger>
					)}
				</Heading>
				<HeaderAccount />
			</HeaderContent>
		</Header>
	);
};

export default HeaderDetail;