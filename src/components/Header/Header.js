import React from "react";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";
import FeatherIcon from "feather-icons-react";
import HeaderLogoImgSrc from "../../images/logo-xtrading.svg";
import HeaderAccount from "../Header/HeaderAccount";
import HeaderSearch from "../Header/HeaderSearch";
import HeaderNotif from "../Header/HeaderNotif";
import Toggle from "../../helpers/ThemeToggle";
import { Label } from "../../components/Label";

const HeaderWrap = tw.header`relative pr-[1.5rem] lg:pr-[0px] py-4`;
const HeaderSimpleWrap = tw.header`absolute top-[1rem] right-[1rem]`;
const HeaderLogo = tw.p`block text-center lg:hidden max-w-[3rem] m-0 py-[0.2rem]`;
const HeaderLogoImg = tw.img`max-w-full`;
const HeaderContent = tw.div`flex flex-row flex-wrap items-start lg:items-center`;
const Heading = styled.h1`
	${tw`my-2 mx-0 lg:m-0 inline-block align-middle text-[1rem] text-[1.5rem] order-3 lg:order-first w-full lg:w-auto`}
	svg {
		${tw`inline-block align-middle mr-2`}
	}
`;
const HeadingLink = tw(Link)`inline-block align-middle mr-2 no-underline text-black dark:text-white`;
const HeaderSetting = tw.div`ml-auto flex flex-row items-center`;

const Header = ({
	pageUserLog,
	pageType,
	pageParent,
	headingText,
	headingAccountText,
	headingUserAvatar,
	headingHasNotif,
	headingHasSearch,
	HeaderLogoImgAlt,
	textLabelSuccess = "Connected",
	textLabelFailure = "Disconnected",
}) => {
	let connectedStatus = new URLSearchParams(window.location.search).get(
		"connected"
	);

	return (
		<>
			{pageUserLog === "true" ? (
				<HeaderSimpleWrap className="header">
					<Toggle />
				</HeaderSimpleWrap>
			) : (
				<HeaderWrap className="header">
					<HeaderContent className="header-content">
						{pageType === "detail" ? (
							<>
								<Heading>
									<HeadingLink to={"/" + pageParent}>
										<FeatherIcon icon="arrow-left" />
										{headingText}
									</HeadingLink>
									{connectedStatus === "true" ? (
										<Label
											isSuccess
											className="label-success"
											textLabel={textLabelSuccess}
										/>
									) : (
										<Label
											isDanger
											className="label-failure"
											textLabel={textLabelFailure}
										/>
									)}
								</Heading>
							</>
						) : (
							<Heading>{headingText}</Heading>
						)}
						<HeaderLogo className="header-logo">
							<HeaderLogoImg
								src={HeaderLogoImgSrc}
								alt={HeaderLogoImgAlt}
							/>
						</HeaderLogo>
						<HeaderSetting>
							{headingHasSearch === "true" && (
								<HeaderSearch className="header-search" />
							)}
							<HeaderNotif hasNotif={headingHasNotif} />
							<HeaderAccount
								accountText={headingAccountText}
								userAvatar={headingUserAvatar}
							/>
						</HeaderSetting>
						<Toggle />
					</HeaderContent>
				</HeaderWrap>
			)}
		</>
	);
};

export default Header;