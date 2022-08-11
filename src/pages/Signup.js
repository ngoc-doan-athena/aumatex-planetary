import React, { useState } from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

// import illustration and site logo
import illustration from "../images/xtrading-signup-illustration.svg";
import logo from "../images/logo-xtrading-text.svg";

// import modules
import Icon from "../components/Icon/index.js";
import { Container as ContainerBase } from "../components/Layouts";
import { InputBase as Input } from "../components/Input/index.js";

// import Formik & Yup for form validation
import { useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// declare const
const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white flex justify-center flex-1 relative`;
const MainContainer = tw.div`lg:w-1/2 xl:w-1/2 p-3 sm:p-6 flex flex-col box-border justify-center justify-items-center content-center `;
const LogoLink = tw.a`absolute top-0 left-0 p-8`;
const LogoImage = tw.img`mx-auto w-20`;
const MainContent = tw.div`mt-8 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold mt-0`;
const FormContainer = tw.div`w-full flex-1 mt-1`;
const FormBlock = styled.div`
	${tw`first:mt-0 mt-4`}
	.input {
		${tw`mt-2`}
	}
`;
const Form = tw.form`mx-auto max-w-sm`;
const InputBase = tw(Input)`px-8 py-4 mt-2 shadow-none`;
const InputLabel = styled.label`
	${tw`mt-6 text-sm text-gray-600`}
	.require {
		${tw`text-state-danger`}
	}
`;
const PasswordCheck = styled.div`
	${tw`mt-4 p-4 rounded-md box-border bg-white dark:bg-gray-black`}
	p {
		${tw`font-bold mt-0`}
	}
	ul {
		${tw`list-none m-0 p-0`}
	}
	li ul {
		${tw`pl-8`}
	}
	.icon-password-check {
		${tw`inline-block align-middle mr-2`}
	}
	.is-success {
		${tw`text-state-success`}
	}
	.is-fail {
		${tw`text-state-danger`}
	}
`;
const SubmitButton = tw.button`mt-8 tracking-wide border-none w-full p-4 rounded-md focus:shadow-outline focus:outline-none text-center`;
const IllustrationContainer = tw.div`flex-1 bg-primary-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
	${(props) => `background-image: url("${props.imageSrc}");`}
	${tw`m-12 xl:m-16 w-3/4 max-w-lg bg-contain bg-center bg-no-repeat`}
`;

const InputPassword = ({ ...field }) => {
	const [showPassword, togglePassword] = useState(false);

	return (
		<div className="input-group" tw="relative">
			<Input type={showPassword ? "text" : "password"} {...field} />
			<button
				onClick={() => togglePassword(!showPassword)}
				type="button"
				tw="bg-transparent border-none px-3 py-3 text-gray-500 absolute right-0 top-0 mt-2"
			>
				{showPassword ? <Icon icon="eye-off" /> : <Icon icon="eye" />}
			</button>
		</div>
	);
};

// const PasswordCondition = props => {
//   const [length, lengthMin] = useState(false);
//   const [number, hasNumber] = useState(false);
//   const [uppercase, upperCase] = useState(false);
//   const [lowercase, lowerCase] = useState(false);
//   const [special, specChar] = useState(false);
// };

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
		// validate: {
		// 	values.password.length < 8 ? lengthMin(false) : lengthMin(true),
		// 	!/\d/.test(values.password) ? number(false) : number(true),
		// 	!/[A-Z]/.test(values.password) ? uppercase(false) : uppercase(true),
		// 	!/[a-z]/.test(values.password) ? lowercase(false) : lowercase(true),
		// 	!/[@$!%*#?&]/.test(values.password) ? specChar(false) : specChar(true),
		// },
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
				.matches(
					/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
					"Password must contain at least 8 letters, uppercase and lowercase characters, numbers, and a special character."
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
				<LogoImage src={logo} />
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
								<PasswordCheck
									className={
										"box-password-check" +
										(formik.errors.password &&
										formik.touched.password
											? " block"
											: " hidden")
									}
								>
									<p>Password must contain:</p>
									<ul>
										{/*<li className={lengthMin ? "is-success" : "is-fail"}>
											<span className="icon-password-check">
												{lengthMin ? 
													<Icon
													icon="check"
													fill="none"
													stroke="currentColor"
													/> : 
													<Icon
													icon="x"
													stroke="currentColor"
												/>}
												
											</span>
											At least 8 characters
										</li>*/}
										<li className="is-success">
											<span className="icon-password-check">
												<Icon
													icon="check"
													fill="none"
													stroke="currentColor"
												/>
											</span>
											At least 8 characters
										</li>
										<li className="is-fail">
											<span className="icon-password-check">
												<Icon
													icon="x"
													stroke="currentColor"
												/>
											</span>
											At least 3 of the following
											conditions:
											<ul tw="list-none">
												<li className="is-success">
													<span className="icon-password-check">
														<Icon
															icon="check"
															fill="none"
															stroke="currentColor"
														/>
													</span>
													Lowercase letters [a-z]
												</li>
												<li className="is-fail">
													<span className="icon-password-check">
														<Icon
															icon="x"
															stroke="currentColor"
														/>
													</span>
													Uppercase letters [A-Z]
												</li>
												<li className="is-success">
													<span className="icon-password-check">
														<Icon
															icon="check"
															fill="none"
															stroke="currentColor"
														/>
													</span>
													Numbers [0-9]
												</li>
												<li className="is-fail">
													<span className="icon-password-check">
														<Icon
															icon="x"
															stroke="currentColor"
														/>
													</span>
													Special characters
													[@$!%*#?&]
												</li>
											</ul>
										</li>
									</ul>
								</PasswordCheck>
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
								<span tw="inline-block align-text-bottom"><input
									type="checkbox"
									name="tos"
									id="tos"
									className="input-checkbox"
									tw="appearance-none border-solid border-2 border-gray-900 rounded-sm"
								/></span>
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
						<p tw="mt-8 text-sm text-gray-600 text-center">
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