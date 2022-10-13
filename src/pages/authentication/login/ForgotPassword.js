import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import illustration from "../../../images/xtrading-login-illustration.svg";
import logo from "../../../images/logo-xtrading-text.svg";
import FeatherIcon from "feather-icons-react";

import { default as HeaderLogin } from "../../../components/Header";
import { LogoByTheme as LogoToggle } from "../../../components/Logo"; // eslint-disable-next-line
import { Container as ContainerBase } from "../../../components/Layouts";
import { InputBase as Input } from "../../../components/Input";
import { Button } from "../../../components/Button";


import { ThemeContext } from "../../../helpers/ThemeContext";

// import recaptcha, Formik & Yup for form validation
import { useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white flex flex-col lg:flex-row justify-center flex-1 relative`;
const MainContainer = tw.div`lg:w-1/2 xl:w-1/2 p-3 sm:p-6 flex flex-col box-border justify-center justify-items-center content-center `;
const LogoLink = tw.a`absolute top-0 left-0 p-8 hidden lg:block`;
const LogoLinkContent = tw.a`p-8 pt-0 relative text-center block lg:hidden`;
const LogoImage = tw.img`mx-auto w-20`;
const MainContent = tw.div`flex flex-col items-center px-4`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold mt-0 mb-0 lg:mb-2`;
const SubText = tw.p`text-gray-600 text-xs`;
const FormContainer = tw.div`w-full flex-1 mt-1 text-center`;
const Form = tw.form`mx-auto max-w-xs text-left`;
const FormBlock = styled.div`
	${tw`first:mt-0 mt-4`}
	.input {
		${tw`mt-2`}
	}
`;
const FormPrompt = tw.p`transition duration-300 ease-in-out`;
const InputBase = tw(Input)`px-8 py-4 first:mt-0 mt-1 shadow-none`;
const InputLabel = styled.label`
	${tw`mt-6 text-sm text-gray-600`}
	.require {
		${tw`text-state-danger`}
	}
`;
const IllustrationContainer = tw.div`flex-1 bg-primary-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
	${(props) => `background-image: url("${props.imageSrc}");`}
	${tw`m-12 xl:m-16 w-3/4 max-w-lg bg-contain bg-center bg-no-repeat`}
`;

const SubmitButton = tw(Button)`mt-8 w-full`;


export default ({
	logoLinkUrl = "/",
	illustrationImageSrc = illustration,
	headingText = "Forgot your password?",
	subText = "Enter your email so we can assist you to retrieve it.",
	inputLabelEmail = "Email Address",
	submitButtonText = "Continue",
	backToHomeUrl = "/",
	backToHomeText = "Back to home page",
	// handling input values
	formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Please enter valid email format.")
				.required("This field is required."),
		}),
		onSubmit: (values) => {
			console.log("Info sent!");
			// history.push('/myexchanges');
		},
	}),
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
					<p tw="text-gray-600 text-xs">{subText}</p>
					<FormContainer>
						<Form onSubmit={formik.handleSubmit}>
							<FormBlock className="form-block">
								<InputLabel
									htmlFor="email"
									className="input-label"
								>
									{inputLabelEmail}{" "}
									<span
										className="require"
										aria-hidden="true"
									>
										*
									</span>
								</InputLabel>
								<Input
									type="text"
									name="email"
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder=""
									className={
										"input" +
										(formik.errors.email &&
										formik.touched.email
											? " is-invalid"
											: "")
									}
									autoComplete="username"
								/>
								{formik.errors.email &&
									formik.touched.email && (
										<p className="form-prompt">
											{formik.errors.email}
										</p>
									)}
							</FormBlock>
							<SubmitButton
								isPrimary
								type="submit"
								className="button-primary"
								textButton={submitButtonText}
							/>
						</Form>
						<p tw="mt-8 text-sm text-center">
							<Link
								to={backToHomeUrl}
								tw="text-black dark:text-white no-underline hover:underline inline-block"
							>
								<FeatherIcon icon="arrow-left" size="16" tw="inline-block align-middle mr-2" />
								{backToHomeText}
							</Link>
						</p>
					</FormContainer>
				</MainContent>
			</MainContainer>
		</Content>
	</Container>
);