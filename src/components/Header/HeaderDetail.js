import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";
import FeatherIcon from "feather-icons-react";
import HeaderLogoImgSrc from "../../images/logo-xtrading.svg";
import HeaderAccount from "../Header/HeaderAccount.js";
import HeaderSearch from "../Header/HeaderSearch.js";
import HeaderNotif from "../Header/HeaderNotif.js";

const Header = tw.header`relative pr-[1.5rem] lg:pr-[0px] py-4`;
const HeaderLogo = tw.p`block text-center lg:hidden max-w-[3rem] m-0 py-[0.2rem]`;
const HeaderLogoImg = tw.img`max-w-full`;
const HeaderContent = tw.div`flex flex-row flex-wrap items-start lg:items-center`;
const Heading = styled.h1`
	${tw`my-2 mx-0 lg:m-0 inline-block align-middle text-[1rem] text-[1.5rem] order-3 lg:order-first w-full lg:w-auto`}
	svg {
		${tw`inline-block align-middle mr-2`}
	}
`;
const HeadingLink = tw.a`inline-block align-middle no-underline text-black dark:text-white`;
const HeaderSetting = tw.div`ml-auto flex flex-row items-center`;

const LabelSuccess = tw.span`inline-block py-1 lg:py-2 px-2 lg:w-28 rounded-full text-[0.8rem] font-normal bg-state-success/10 text-state-success border border-solid border-state-success text-center ml-8 lg:ml-2`;
const LabelDanger = tw.span`inline-block py-1 lg:py-2 px-2 lg:w-28 rounded-full text-[0.8rem] font-normal bg-state-danger/10 text-state-danger border border-solid border-state-danger text-center ml-8 lg:ml-2`;

const HeaderDetail = ({
	pageType,
	pageParent,
	headingText,
	headingAccountText,
	headingUserAvatar,
	headingHasNotif,
	headingHasSearch,
	HeaderLogoImgAlt,
}) => {
	let connectedStatus = new URLSearchParams(window.location.search).get(
		"connected"
	);

	return (
		<Header className="header">
			<HeaderContent className="header-content">
				{pageType === "detail" ? (
					<>
						<Heading>
							<HeadingLink href={"/" + pageParent}>
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
			</HeaderContent>
		</Header>
	);
};

export default HeaderDetail;