import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import illustration from "../images/xtrading-login-illustration.svg";
import logo from "../images/logo-xtrading-text.svg";
import Icon from "../components/Icon/index.js";

import { Container as ContainerBase } from "../components/Layouts";
import {
	InputBase as Input,
	InputPassword,
} from "../components/Input/index.js";

// import recaptcha, Formik & Yup for form validation
import { useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

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
const Form = tw.form`mx-auto max-w-xs`;
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
const SubmitButton = styled.button`
	${tw`mt-8 tracking-wide text-base font-semibold border-none text-black w-full py-4 rounded-md focus:shadow-outline focus:outline-none text-center`}
`;
const IllustrationContainer = tw.div`flex-1 bg-primary-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
	${(props) => `background-image: url("${props.imageSrc}");`}
	${tw`m-12 xl:m-16 w-3/4 max-w-lg bg-contain bg-center bg-no-repeat`}
`;

export default ({
	logoLinkUrl = "/",
	illustrationImageSrc = illustration,
	headingText = "Welcome to xTrading",
	subText = "Please login to proceed",
	inputLabelEmail = "Email Address",
	inputLabelPassword = "Password",
	submitButtonText = "Continue",
	forgotPasswordText = "Forgot password?",
	forgotPasswordUrl = "/forgotpassword",
	signupPrompt = "Don't have an account?",
	signupText = "Sign up",
	signupUrl = "/signup",

	// handling input values
	formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().required("This field is required."),
			password: Yup.string().required("This field is required."),
		}),
		onSubmit: (values) => {
			console.log("Info sent!");
			// history.push('/myexchanges');
		},
	}),
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
					<Heading>{headingText}</Heading>
					<SubText>{subText}</SubText>
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
							<FormBlock className="form-block">
								<InputLabel
									htmlFor="password"
									className="input-label"
								>
									{inputLabelPassword}{" "}
									<span
										className="require"
										aria-hidden="true"
									>
										*
									</span>
								</InputLabel>
								<InputPassword
									name="password"
									value={formik.values.password}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder=""
									className={
										"input" +
										(formik.errors.password &&
										formik.touched.password
											? " is-invalid"
											: "")
									}
									autoComplete="current-password"
								/>

								{formik.errors.password &&
									formik.touched.password && (
										<p className="form-prompt">
											{formik.errors.password}
										</p>
									)}
							</FormBlock>

							<div
								className="box-captcha"
								tw="mt-4 flex justify-center"
							>
								<ReCAPTCHA
									sitekey="6Lc5nCkhAAAAAPf6YClkfVSILUdUJlJ2Fhr5kHl0"
									data-size="compact"
								/>
							</div>

							<SubmitButton
								type="submit"
								className="button-primary"
							>
								{submitButtonText}
							</SubmitButton>
						</Form>
						<p tw="mt-4 text-sm text-gray-600 text-center">
							{signupPrompt}{" "}
							<a
								href={signupUrl}
								tw="text-primary-900"
								className="acr-primary"
							>
								{signupText}
							</a>
						</p>
					</FormContainer>
				</MainContent>
			</MainContainer>
		</Content>
	</Container>
);