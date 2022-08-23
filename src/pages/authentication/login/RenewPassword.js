import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import illustration from "../../../images/xtrading-login-illustration.svg";
import logo from "../../../images/logo-xtrading-text.svg";
import logoDark from "../../../images/logo-xtrading-text-dark.svg";
import Icon from "../../../components/Icon/index.js";

import { Container as ContainerBase } from "../../../components/Layouts";
import {
	InputBase as Input,
	InputPassword,
} from "../../../components/Input/index.js";

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
const SubmitButton = styled.a`
	${tw`mt-8 block no-underline tracking-wide text-base font-semibold border-none text-black w-full py-4 rounded-md focus:shadow-outline focus:outline-none text-center`}
`;
const IllustrationContainer = tw.div`flex-1 bg-primary-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
	${(props) => `background-image: url("${props.imageSrc}");`}
	${tw`m-12 xl:m-16 w-3/4 max-w-lg bg-contain bg-center bg-no-repeat`}
`;

const LogoContent = () => {
	const { theme } = React.useContext(ThemeContext);
	const logoLinkUrl = "/";

	return (
		<LogoLinkContent href={logoLinkUrl}>
			<LogoImage src={theme === "dark" ? logoDark : logo} />
		</LogoLinkContent>
	);
};

export default ({
	logoLinkUrl = "/",
	illustrationImageSrc = illustration,
	headingText = "Change your password",
	subText = "Enter your new password.",
	inputLabelPassword = "New Password",
	inputLabelConfirmPassword = "Confirm Password",
	submitButtonText = "Continue",

	// handling input values
	formik = useFormik({
		initialValues: {
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
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
				<LogoContent />
				<MainContent>
					<Heading>{headingText}</Heading>
					<SubText>{subText}</SubText>
					<FormContainer>
						<Form onSubmit={formik.handleSubmit}>
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

							{/*<SubmitButton
								type="submit"
								className="button-primary"
							>
								{submitButtonText}
							</SubmitButton>*/}
							<SubmitButton
								href="/changedpassword"
								className="button-primary"
							>
								{submitButtonText}
							</SubmitButton>
						</Form>
					</FormContainer>
				</MainContent>
			</MainContainer>
		</Content>
	</Container>
);