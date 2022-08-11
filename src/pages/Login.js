import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import illustration from "../images/xtrading-login-illustration.svg";
import logo from "../images/logo-xtrading-text.svg";
import Icon from "../components/Icon/index.js";

import { Container as ContainerBase } from "../components/Layouts";
import { InputBase as Input } from "../components/Input/index.js";
// import SimpleReactValidator from "simple-react-validator";
import ReCAPTCHA from "react-google-recaptcha";

// import Formik & Yup for form validation
import { useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// const { theme } = React.useContext(ThemeContext);

const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-1/2 p-3 sm:p-6 flex flex-col box-border justify-center justify-items-center content-center `;
const LogoLink = tw.a`absolute top-0 left-0 py-4 px-8`;
const LogoImage = tw.img`mx-auto w-20`;
const MainContent = tw.div`mt-8 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold mt-0`;
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

// class FormValidate extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			togglePassword: false,
// 		};
// 		this.validator = new SimpleReactValidator({
// 			autoForceUpdate: this,
// 			className: "form-prompt",
// 			messages: {
// 				required: "This field is required.",
// 				email: "Please enter a valid email address.",
// 				regex:
// 					"Password has to be between 8-30 characters, and contains at least one uppercase letter, one lowercase letter and a number",
// 			},
// 			validators: {
// 				password: {
// 					message:
// 						"Password has to be between 8-30 characters, and contains at least one uppercase letter, one lowercase letter and a number",
// 					rule: function(val, params, validator) {
// 						return validator.helpers
// 							.testRegex(
// 								val,
// 								/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i
// 							)
// 							.size(val, params[1]);
// 					},
// 				},
// 			},
// 		});
// 		this.onTogglePassword = this.onTogglePassword.bind(this);
// 	}

// 	submitForm() {
// 		if (this.validator.allValid()) {
// 			alert("You submitted the form successfully!");
// 			// const account = users.find((user) => user.username === username);
// 			// if (account && account.password === password) {
// 			// 	setauthenticated(true);
// 			localStorage.setItem("authenticated", true);
// 			// }
// 		} else {
// 			this.validator.showMessages();
// 		}
// 	}

// 	handleBlur(event) {
// 		const target = event.target;

// 		if (this.validator.fieldValid()) {
// 			return true;
// 			if (target.classList.contains("is-warning")) {
// 				target.classList.remove("is-warning");
// 			}
// 		} else {
// 			this.validator.showMessageFor(target.name);
// 			target.classList.add("is-warning");
// 		}
// 	}

// 	handleInputChange(event) {
// 		const target = event.target;
// 		const value =
// 			target.type === "checkbox" ? target.checked : target.value;
// 		const name = target.name;
// 		this.setState({
// 			[name]: value,
// 		});
// 	}

// 	onTogglePassword(e) {
// 		this.setState({ togglePassword: !this.state.togglePassword });
// 		// this.setValues();
// 	}

// 	render() {
// 		const inputLabelEmail = "Email Address",
// 			inputLabelPassword = "Password",
// 			submitButtonText = "Continue",
// 			forgotPasswordText = "Forgot password?",
// 			forgotPasswordUrl = "/forgotpassword";

// 		return (
// 			<>
// 				<div className="form-group">
// 					<div className="form-block">
// 						<label
// 							htmlFor="email"
// 							tw="mt-4 block text-sm text-gray-600"
// 						>
// 							{inputLabelEmail}{" "}
// 							<span tw="text-state-danger" aria-hidden="true">
// 								*
// 							</span>
// 						</label>
// 						<Input
// 							className="form-control"
// 							type="email"
// 							name="email"
// 							value={this.state.email}
// 							onChange={this.handleInputChange.bind(this)}
// 							onBlur={this.handleBlur.bind(this)}
// 							placeholder=""
// 							autocomplete="username"
// 							spellcheck="none"
// 							tw="mt-2"
// 						/>
// 						{this.validator.message(
// 							"email",
// 							this.state.email,
// 							"required|email"
// 						)}
// 					</div>
// 					<div className="form-block" mt="mt-2">
// 						<label
// 							htmlFor="password"
// 							tw="mt-4 block text-sm text-gray-600"
// 						>
// 							{inputLabelPassword}{" "}
// 							<span tw="text-state-danger" aria-hidden="true">
// 								*
// 							</span>
// 						</label>
// 						<div className="input-group" tw="relative mt-2">
// 							<Input
// 								type={
// 									this.state.togglePassword
// 										? "text"
// 										: "password"
// 								}
// 								name="password"
// 								value={this.state.password}
// 								onChange={this.handleInputChange.bind(this)}
// 								onBlur={this.handleBlur.bind(this)}
// 								placeholder=""
// 								autocomplete="current-password"
// 								spellcheck="none"
// 							/>
// 							<button
// 								onClick={this.onTogglePassword}
// 								type="button"
// 								tw="bg-transparent border-none px-3 py-3 text-gray-500 absolute right-0 top-0"
// 							>
// 								{this.state.togglePassword ? (
// 									<Icon icon="eye-off" />
// 								) : (
// 									<Icon icon="eye" />
// 								)}
// 							</button>
// 						</div>
// 						{this.validator.message(
// 							"password",
// 							this.state.password,
// 							[
// 								"required",
// 								{
// 									regex:
// 										"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
// 								},
// 							]
// 						)}
// 					</div>
// 				</div>

// 				<p tw="mt-2 text-xs text-gray-600">
// 					<a
// 						href={forgotPasswordUrl}
// 						tw="text-primary-900"
// 						className="acr-primary"
// 					>
// 						{forgotPasswordText}
// 					</a>
// 				</p>

// 				<div className="box-captcha" tw="mt-4 flex justify-center">
// 					<ReCAPTCHA
// 						sitekey="6Lc5nCkhAAAAAPf6YClkfVSILUdUJlJ2Fhr5kHl0"
// 						data-size="compact"
// 						// data-theme={theme === `dark` ? `dark` : `light`}
// 					/>
// 				</div>

// 				<SubmitButton
// 					type="submit"
// 					name="action"
// 					className="button-primary"
// 					onClick={this.submitForm.bind(this)}
// 				>
// 					{submitButtonText}
// 				</SubmitButton>
// 			</>
// 		);
// 	}
// }

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
						<p tw="mt-8 text-sm text-gray-600 text-center">
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
