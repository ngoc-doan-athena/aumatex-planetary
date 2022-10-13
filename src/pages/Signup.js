import React, { useState } from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

// import illustration and site logo
import illustration from "../images/xtrading-signup-illustration.svg";
import logo from "../images/logo-xtrading-text.svg";

// import modules
import { default as HeaderSignup } from "../components/Header";
import { Container as ContainerBase } from "../components/Layouts";
import { LogoByTheme as LogoToggle } from "../components/Logo";
import { SignupForm } from "../pages/authentication/Authentication.js";

// declare components
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

export default ({
	logoLinkUrl = "/",
	illustrationImageSrc = illustration,
	headingText = "Welcome to xTrading",
	subText = "Please create your own account to get started",
}) => (
	<Container>
		<Content>
			<LogoLink href={logoLinkUrl}>
				<LogoImage src={logo} />
			</LogoLink>
			<IllustrationContainer>
				<IllustrationImage imageSrc={illustrationImageSrc} />
			</IllustrationContainer>
			<MainContainer>
				<HeaderSignup
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
					<p tw="text-gray-600 text-sm">{subText}</p>
					<SignupForm />
				</MainContent>
			</MainContainer>
		</Content>
	</Container>
);