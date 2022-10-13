import React from "react";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import illustration from "../images/xtrading-login-illustration.svg";
import logo from "../images/logo-xtrading-text.svg";

import { Container as ContainerBase } from "../components/Layouts";
import { default as HeaderLogin } from "../components/Header";
import { LogoByTheme as LogoToggle } from "../components/Logo"; // eslint-disable-next-line
import { LoginForm } from "../pages/authentication/Authentication.js";

const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white flex flex-col lg:flex-row justify-center flex-1 relative`;
const MainContainer = tw.div`lg:w-1/2 xl:w-1/2 p-3 sm:p-6 flex flex-col box-border justify-center justify-items-center content-center `;
const LogoLink = tw.a`absolute top-0 left-0 p-8 hidden lg:block`;
const LogoLinkContent = tw.a`p-8 pt-0 relative text-center block lg:hidden`;
const LogoImage = tw.img`mx-auto w-20`;
const LogoByTheme = tw(LogoToggle)`mx-auto w-20`;
const MainContent = tw.div`flex flex-col items-center px-4`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold mt-0 mb-0 lg:mb-2`;
const SubText = tw.p`text-gray-600 text-xs`;
const IllustrationContainer = tw.div`flex-1 bg-primary-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
	${(props) => `background-image: url("${props.imageSrc}");`}
	${tw`m-12 xl:m-16 w-3/4 max-w-lg bg-contain bg-center bg-no-repeat`}
`;
const Header = tw(HeaderLogin)`absolute top-[1rem] right-[1rem]`;

export default ({
	logoLinkUrl = "/",
	illustrationImageSrc = illustration,
	headingText = "Welcome to xTrading",
	subText = "Please login to proceed",
}) => (
	<Container>
		<Content>
			<LogoLink href={logoLinkUrl}>
				<LogoImage src={logo} />
			</LogoLink>
			<IllustrationContainer>
				<IllustrationImage imageSrc={illustrationImageSrc} alt="" />
			</IllustrationContainer>
			<MainContainer>
				<HeaderLogin
					pageUserLog="true"
					pageType="main"
					headingHasNotif="false"
					headingHasSearch="false"
				/>
				<LogoLinkContent>
					<LogoToggle />
				</LogoLinkContent>
				<MainContent>
					<Heading>{headingText}</Heading>
					<SubText>{subText}</SubText>
					<LoginForm />
				</MainContent>
			</MainContainer>
		</Content>
	</Container>
);