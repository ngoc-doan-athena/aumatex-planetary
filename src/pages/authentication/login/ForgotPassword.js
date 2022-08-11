import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import illustration from "../../../images/xtrading-login-illustration.svg";
import logo from "../../../images/logo-xtrading-text.svg";

import { Container as ContainerBase } from "../../../components/Layouts";
import { InputBase as Input } from "../../../components/Input/index.js";

const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 text-black shadow flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-3 sm:p-6 flex flex-col box-border justify-center justify-items-center content-center `;
const LogoLink = tw.a`absolute top-0 left-0 p-8`;
const LogoImage = tw.img`mx-auto w-20`;
const MainContent = tw.div`mt-8 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold mt-0`;
const FormContainer = tw.div`w-full flex-1 mt-1`;
const Form = tw.form`mx-auto max-w-xs`;
const InputBase = tw(Input)`px-8 py-4 first:mt-0 mt-1 shadow-none`;
const SubmitButton = styled.button`
	${tw`mt-8 tracking-wide font-semibold border-none bg-gradient-to-b from-primary-300 to-primary-900 text-black w-full py-4 rounded-md hover:from-primary-900 hover:to-primary-300 transition ease-in-out duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
	.text {
		${tw`ml-3`}
	}
`;
const IllustrationContainer = tw.div`flex-1 bg-primary-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
	${(props) => `background-image: url("${props.imageSrc}");`}
	${tw`m-12 xl:m-16 w-3/4 max-w-lg bg-contain bg-center bg-no-repeat animate-bounce`}
`;

export default ({
	logoLinkUrl = "/",
	illustrationImageSrc = illustration,
	headingText = "Forgot your password?",
	subText = "Enter your email so we can assist you to retrieve it.",
	submitButtonText = "Continue",
	backToHomeUrl = "/",
	backToHomeText = "Back to home page",
}) => (
	<Container>
		<Content>
			<IllustrationContainer>
				<LogoLink href={logoLinkUrl}>
					<LogoImage src={logo} />
				</LogoLink>
				<IllustrationImage imageSrc={illustrationImageSrc} />
			</IllustrationContainer>
			<MainContainer>
				<MainContent>
					<Heading>{headingText}</Heading>
					<p tw="text-gray-600 text-xs">{subText}</p>
					<FormContainer>
						<Form>
							<label>
								<p tw="mt-8 text-sm text-gray-600">
									Email address{" "}
									<span tw="text-state-danger">*</span>
								</p>
								<Input
									type="email"
									placeholder=""
									onChange={() =>
										console.log("Email changed")
									}
									required
								/>
							</label>
							<SubmitButton type="submit">
								<span className="text">{submitButtonText}</span>
							</SubmitButton>
						</Form>
						<p tw="mt-8 text-sm text-center">
							<a
								href={backToHomeUrl}
								tw="text-black no-underline"
							>
								{backToHomeText}
							</a>
						</p>
					</FormContainer>
				</MainContent>
			</MainContainer>
		</Content>
	</Container>
);