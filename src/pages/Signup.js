import React, { useState } from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

// import illustration and site logo
import illustration from "../images/xtrading-signup-illustration.svg";
import logoLight from "../images/logo-xtrading-text.svg";
import logoDark from "../images/logo-xtrading-text-dark.svg";

// import modules
import Icon from "../components/Icon/index.js";
import { Container as ContainerBase } from "../components/Layouts";
import {
	InputBase as Input,
	InputPassword,
} from "../components/Input/index.js";

// import Formik & Yup for form validation
import { useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// declare const
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
const InputBase = tw(Input)`px-8 py-4 mt-2 shadow-none`;
const InputLabel = styled.label`
	${tw`mt-6 text-sm text-gray-600`}
	.require {
		${tw`text-state-danger`}
	}
`;

const SubmitButton = tw.button`mt-8 tracking-wide border-none w-full p-4 rounded-md focus:shadow-outline focus:outline-none text-center`;
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
	inputLabelUsername = "Username",
	inputLabelEmail = "Email Address",
	inputLabelPassword = "Password",
	inputLabelConfirmPassword = "Confirm Password",
	agreementPrompt = "I have read and agreed to the",
	tosText = "Terms of Service",
	tosUrl = "/termsofservice",
	privacyText = "Privacy Policy",
	privacyPolicyUrl = "/privacy",
	submitButtonText = "Continue",
	signInPrompt = "Already have an account?",
	signInText = "Sign In",
	signInUrl = "/login",

	// handling input values
	formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
			tos: false,
		},

		validationSchema: Yup.object({
			username: Yup.string().required("This field is required."),
			email: Yup.string()
				.email("Please enter valid email format.")
				.required("This field is required."),
			// .test('Unique Email', 'This email is already in use', function(value) {
			// 	return new Promise((resolve, reject) => {
			// 		axios.get(`http://localhost:3000/api/u/user/${value}/available`)
			// 			.then((res) => {
			// 				resolve(true)
			// 			})
			// 			.catch((error) => {
			// 				if (error.response.data.content === "This email has already been taken.") {
			// 					resolve(false);
			// 				}
			// 			})
			// 	})
			// }),
			password: Yup.string()
				.required("This field is required.")
				.min(8, "Password should have at least 8 characters.")
				.matches(
					/(?=.*[A-Za-z])+/,
					"Password must contain uppercase and lowercase characters."
				)
				.matches(
					/(?=.*[A-Z])+/,
					"Password must contain at least one uppercase character."
				)
				.matches(
					/(?=.*[a-z])+/,
					"Password must contain at least one lowercase character."
				)
				.matches(
					/(?=.*\d)+/,
					"Password must contain at least one number."
				)
				.matches(
					/(?=.*[@$!%*#?&])+/,
					"Password must contain at least one special character."
				),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref("password")], "Passwords should match.")
				.required("This field is required."),
			tos: Yup.boolean().oneOf(
				[true],
				"You must accept the terms and conditions."
			),
		}),
		onSubmit: (values) => {
			console.log("Info sent!");
			// history.push('/myexchanges');
		},
		// onSubmit: (values, actions) => {
		// 	sleep(300)
		// 		.then(() => {
		// 			actions.setStatus();
		// 			actions.setSubmitting();
		// 			actions.resetForm();
		// 			actions.setStatus({
		// 				username: "",
		// 				email: "",
		// 				password: "",
		// 				confirmPassword: "",
		// 				tos: true,
		// 				serverError: "",
		// 			});
		// 		})
		// 		.catch(() => {
		// 			actions.setStatus({
		// 				serverError: "500 Internal Server Error",
		// 			});
		// 		});
		// },
	}),
}) => (
	<Container>
		<Content>
			<LogoLink href={logoLinkUrl}>
				<LogoImage src={logoLight} />
			</LogoLink>
			<IllustrationContainer>
				<IllustrationImage imageSrc={illustrationImageSrc} />
			</IllustrationContainer>
			<MainContainer>
				<MainContent>
					<Heading>{headingText}</Heading>
					<p tw="text-gray-600 text-sm">{subText}</p>
					<FormContainer>
						<Form onSubmit={formik.handleSubmit}>
							<FormBlock className="form-block">
								<InputLabel
									htmlFor="username"
									className="input-label"
								>
									{inputLabelUsername}{" "}
									<span
										className="require"
										aria-hidden="true"
									>
										*
									</span>
								</InputLabel>
								<Input
									type="text"
									name="username"
									value={formik.values.username}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder=""
									className={
										"input" +
										(formik.errors.username &&
										formik.touched.username
											? " is-invalid"
											: "")
									}
								/>
								{formik.errors.username &&
									formik.touched.username && (
										<p className="form-prompt">
											{formik.errors.username}
										</p>
									)}
							</FormBlock>
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
									type="email"
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
									autoComplete="new-password"
								/>
								{formik.errors.password &&
									formik.touched.password && (
										<p className="form-prompt">
											{formik.errors.password}
										</p>
									)}
							</FormBlock>
							<FormBlock className="form-block">
								<InputLabel
									htmlFor="confirmPassword"
									className="input-label"
								>
									{inputLabelConfirmPassword}{" "}
									<span
										className="require"
										aria-hidden="true"
									>
										*
									</span>
								</InputLabel>
								<InputPassword
									name="confirmPassword"
									value={formik.values.confirmPassword}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									placeholder=""
									className={
										"input" +
										(formik.errors.confirmPassword &&
										formik.touched.confirmPassword
											? " is-invalid"
											: "")
									}
									autoComplete="new-password"
								/>
								{formik.errors.confirmPassword &&
									formik.touched.confirmPassword && (
										<p className="form-prompt">
											{formik.errors.confirmPassword}
										</p>
									)}
							</FormBlock>

							<p tw="mt-4 mb-0 text-xs text-gray-600">
								<span tw="inline-block align-text-bottom">
									<input
										type="checkbox"
										name="tos"
										id="tos"
										className="input-checkbox"
										tw="appearance-none border-solid border-2 border-gray-900 rounded-sm"
									/>
								</span>
								<InputLabel htmlFor="tos">
									{agreementPrompt}{" "}
									<a
										href={tosUrl}
										tw="text-primary-900"
										className="acr-primary"
									>
										{tosText}
									</a>{" "}
									and{" "}
									<a
										href={privacyPolicyUrl}
										tw="text-primary-900"
										className="acr-primary"
									>
										{privacyText}
									</a>
								</InputLabel>
							</p>
							{formik.errors.tos && formik.touched.tos && (
								<p className="form-prompt">
									{formik.errors.tos}
								</p>
							)}

							{/*<Link to="/myexchanges">*/}
							<SubmitButton
								type="submit"
								className="button-primary"
							>
								{submitButtonText}
							</SubmitButton>
							{/*</Link>*/}
						</Form>
						<p tw="mt-4 text-sm text-gray-600 text-center">
							{signInPrompt}{" "}
							<a
								href={signInUrl}
								tw="text-primary-900"
								className="acr-primary"
							>
								{signInText}
							</a>
						</p>
					</FormContainer>
				</MainContent>
			</MainContainer>
		</Content>
	</Container>
);