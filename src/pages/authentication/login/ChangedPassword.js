import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import illustration from "../../../images/xtrading-login-illustration.svg";
import logo from "../../../images/logo-xtrading-text.svg";
import state from "../../../images/icon-state-success.svg";

import { Container as ContainerBase } from "../../../components/Layouts";

const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white flex flex-col lg:flex-row justify-center flex-1 relative`;
const MainContainer = tw.div`lg:w-1/2 xl:w-1/2 p-3 sm:p-6 flex flex-col box-border justify-center justify-items-center content-center `;
const LogoLink = tw.a`lg:absolute lg:top-0 lg:left-0 p-8 pb-2 relative text-center block`;
const LogoImage = tw.img`mx-auto w-20`;
const MainContent = tw.div`flex flex-col items-center px-4`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold mt-0 mb-0 lg:mb-2`;
const SubText = tw.p`text-gray-600 text-xs`;
const FormContainer = tw.div`w-full flex-1 mt-1`;
const Form = tw.div`mx-auto max-w-xs`;
const SubmitButton = styled.a`
	${tw`mt-8 block tracking-wide text-base font-semibold border-none text-black w-full py-4 rounded-md focus:shadow-outline focus:outline-none text-center no-underline`}
`;
const IllustrationContainer = tw.div`flex-1 bg-primary-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
	${(props) => `background-image: url("${props.imageSrc}");`}
	${tw`m-12 xl:m-16 w-3/4 max-w-lg bg-contain bg-center bg-no-repeat`}
`;
const State = tw.p`text-center mb-4`;
const StateIcon = tw.img`mx-auto w-20`;

export default ({
	logoLinkUrl = "/",
	illustrationImageSrc = illustration,
	headingText = "Password changed!",
	subText = "You have successfully changed your password.",
	buttonText = "Login",
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
				<MainContent>
					<FormContainer>
						<Form>
							<State>
								<StateIcon src={state} />
							</State>
							<Heading>{headingText}</Heading>
							<SubText>{subText}</SubText>
							<SubmitButton
								href="/login"
								className="button-primary"
							>
								{buttonText}
							</SubmitButton>
						</Form>
					</FormContainer>
				</MainContent>
			</MainContainer>
		</Content>
	</Container>
);