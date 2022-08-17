import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import illustration from "../images/xtrading-signup-illustration.svg";
import logo from "../images/logo-xtrading-text.svg";
import Icon from "../components/Icon/index.js";

import { Container as ContainerBase } from "../components/Layouts";
import { InputBase as Input } from "../components/Input/index.js";
import Checkbox from "../components/Input/Checkbox.js";

import SimpleReactValidator from "simple-react-validator";

const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-1/2 p-3 sm:p-6 flex flex-col box-border justify-center justify-items-center content-center `;
const LogoLink = tw.a`absolute top-0 left-0 p-8`;
const LogoImage = tw.img`mx-auto w-20`;
const MainContent = tw.div`mt-8 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold mt-0`;
const FormContainer = tw.div`w-full flex-1 mt-1`;
const FormBlock = tw.div`first:mt-0 mt-2`;
const Form = tw.form`mx-auto max-w-xs`;
const InputBase = tw(Input)`px-8 py-4 mt-2 shadow-none`;
const InputLabel = tw.p`mt-6 text-sm text-gray-600`;
const SubmitButton = styled.button`
	${tw`mt-8 tracking-wide border-none w-full p-4 rounded-md focus:shadow-outline focus:outline-none text-center`}
`;
const IllustrationContainer = tw.div`flex-1 bg-primary-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
	${(props) => `background-image: url("${props.imageSrc}");`}
	${tw`m-12 xl:m-16 w-3/4 max-w-lg bg-contain bg-center bg-no-repeat`}
`;

class FormValidate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			togglePassword: false,
		};
		this.validator = new SimpleReactValidator({
			autoForceUpdate: this,
			className: "form-prompt",
			messages: {
				required: "This field is required.",
				email: "Please enter a valid email address.",
				regex:
					"Password has to be between 8-30 characters, and contains at least one uppercase letter, one lowercase letter and a number",
				in: "The passwords need to match.",
			},
		});
		this.onTogglePassword = this.onTogglePassword.bind(this);
	}

	submitForm() {
		if (this.validator.allValid()) {
			alert("You submitted the form successfully!");
		} else {
			this.validator.showMessages();
		}
	}

	handleInputChange(event) {
		const target = event.target;
		const value =
			target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	onTogglePassword(e) {
		this.setState({ togglePassword: !this.state.togglePassword });
	}

	render() {
		const inputLabelConfirmPassword = "Confirm Password",
			submitButtonText = "Sign Up",
			agreementPrompt = "I have read and agreed to the",
			tosText = "Terms of Service",
			tosUrl = "/termsofservice",
			privacyText = "Privacy Policy",
			privacyPolicyUrl = "/privacy";

		return (
			<>
				<div className="form-group">
					<FormBlock className="form-block">
						<label
							htmlFor="username"
							tw="mt-4 block text-sm text-gray-600"
						>
							Username{" "}
							<span tw="text-state-danger" aria-hidden="true">
								*
							</span>
						</label>
						<Input
							className="form-control"
							type="text"
							name="username"
							id="username"
							value={this.state.username}
							onChange={this.handleInputChange.bind(this)}
							onBlur={() =>
								this.validator.showMessageFor("username")
							}
							placeholder=""
							tw="mt-2"
						/>
						{this.validator.message(
							"username",
							this.state.username,
							"required"
						)}
					</FormBlock>
					<FormBlock className="form-block">
						<label
							htmlFor="email"
							tw="mt-4 block text-sm text-gray-600"
						>
							Email Address{" "}
							<span tw="text-state-danger" aria-hidden="true">
								*
							</span>
						</label>
						<Input
							className="form-control"
							type="email"
							name="email"
							id="email"
							value={this.state.email}
							onChange={this.handleInputChange.bind(this)}
							onBlur={() =>
								this.validator.showMessageFor("email")
							}
							placeholder=""
							tw="mt-2"
						/>
						{this.validator.message(
							"email",
							this.state.email,
							"required|email"
						)}
					</FormBlock>
					<FormBlock className="form-block">
						<label
							htmlFor="password"
							tw="mt-4 block text-sm text-gray-600"
						>
							Password{" "}
							<span tw="text-state-danger" aria-hidden="true">
								*
							</span>
						</label>
						<div className="input-group" tw="relative mt-2">
							<Input
								type={
									this.state.togglePassword
										? "text"
										: "password"
								}
								name="password"
								id="password"
								value={this.state.password}
								onChange={this.handleInputChange.bind(this)}
								onBlur={() =>
									this.validator.showMessageFor("password")
								}
								placeholder=""
								autocomplete="new-password"
							/>
							<button
								onClick={this.onTogglePassword}
								type="button"
								tw="bg-transparent border-none px-3 py-3 text-gray-500 absolute right-0 top-0"
							>
								{this.state.togglePassword ? (
									<Icon icon="eye-off" />
								) : (
									<Icon icon="eye" />
								)}
							</button>
						</div>
						{this.validator.message(
							"password",
							this.state.password,
							[
								"required",
								{
									regex:
										"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
								},
							]
						)}
					</FormBlock>
					<FormBlock className="form-block">
						<label
							htmlFor="confirmPassword"
							tw="mt-4 block text-sm text-gray-600"
						>
							{inputLabelConfirmPassword}{" "}
							<span tw="text-state-danger" aria-hidden="true">
								*
							</span>
						</label>
						<div className="input-group" tw="relative mt-2">
							<Input
								type={
									this.state.togglePassword
										? "text"
										: "password"
								}
								name="confirmPassword"
								id="confirmPassword"
								value={this.state.confirmPassword}
								onChange={this.handleInputChange.bind(this)}
								onBlur={() =>
									this.validator.showMessageFor(
										"confirmPassword"
									)
								}
								placeholder=""
								autocomplete="new-password"
							/>
							<button
								onClick={this.onTogglePassword}
								type="button"
								tw="bg-transparent border-none px-3 py-3 text-gray-500 absolute right-0 top-0"
							>
								{this.state.togglePassword ? (
									<Icon icon="eye-off" />
								) : (
									<Icon icon="eye" />
								)}
							</button>
						</div>
						{this.validator.message(
							"confirmPassword",
							this.state.confirmPassword,
							`required|in:${this.state.password}`
						)}
					</FormBlock>
				</div>

				<p tw="mt-4 text-xs text-gray-600">
					<input
						type="checkbox"
						name="agree"
						id="agree"
						className="input-checkbox"
						tw="appearance-none border-solid border-2 border-gray-900 rounded-sm"
					/>
					{/*<Checkbox />*/}
					<label htmlFor="agree">
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
					</label>
				</p>

				<SubmitButton
					type="submit"
					className="button-primary"
					onClick={this.submitForm.bind(this)}
				>
					{submitButtonText}
				</SubmitButton>
			</>
		);
	}
}

export default ({
	logoLinkUrl = "/",
	illustrationImageSrc = illustration,
	headingText = "Welcome to xTrading",
	subText = "Please create your own account to get started",
	signInPrompt = "Already have an account?",
	signInText = "Sign In",
	signInUrl = "/login",
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
						<Form>
							<FormValidate />
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


/*<PasswordCheck
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
</PasswordCheck>*/