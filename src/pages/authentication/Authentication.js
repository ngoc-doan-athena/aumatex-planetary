import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import {
	InputBase as Input,
	InputPassword,
	InputCheckbox,
} from "../../components/Input/index.js";

// form validation
import Firebase from "firebase/compat/app";
import { useFormik } from "formik";
import * as Yup from "yup";
import Recaptcha from "react-google-recaptcha";

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
	${tw`mt-8 tracking-wide text-base font-semibold border-none text-black w-full py-4 rounded-md focus:shadow-outline focus:outline-none text-center disabled:bg-none disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed disabled:pointer-events-none`}
`;

const LoginForm = ({
	inputLabelEmail = "Email Address",
	inputLabelPassword = "Password",
	submitButtonText = "Continue",
	forgotPasswordText = "Forgot password?",
	forgotPasswordUrl = "/forgotpassword",
	signupPrompt = "Don't have an account?",
	signupText = "Sign up",
	signupUrl = "/signup",
}) => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			recaptcha: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Please enter valid email format.")
				.required("This field is required."),
			password: Yup.string().required("This field is required."),
			recaptcha: Yup.string().required(
				"Please complete the captcha test."
			),
		}),
		onSubmit: (values) => {
			window.location.href = "/myexchanges";
		},
	});
	return (
		<FormContainer>
			<Form onSubmit={formik.handleSubmit}>
				<FormBlock className="form-block">
					<InputLabel htmlFor="email" className="input-label">
						{inputLabelEmail}{" "}
						<span className="require" aria-hidden="true">
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
							(formik.errors.email && formik.touched.email
								? " is-invalid"
								: "")
						}
						autoComplete="username"
					/>
					{formik.errors.email && formik.touched.email && (
						<p className="form-prompt">{formik.errors.email}</p>
					)}
				</FormBlock>
				<FormBlock className="form-block">
					<InputLabel htmlFor="password" className="input-label">
						{inputLabelPassword}{" "}
						<span className="require" aria-hidden="true">
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
							(formik.errors.password && formik.touched.password
								? " is-invalid"
								: "")
						}
						autoComplete="current-password"
					/>

					{formik.errors.password && formik.touched.password && (
						<p className="form-prompt">{formik.errors.password}</p>
					)}
				</FormBlock>
				<FormBlock className="form-block">
					<div className="box-captcha" tw="flex justify-center">
						<Recaptcha
							sitekey="6Lc5nCkhAAAAAPf6YClkfVSILUdUJlJ2Fhr5kHl0"
							render="explicit"
							data-size="compact"
							verifyCallback={(response) => {
								formik.setFieldValue("recaptcha", response);
							}}
						/>
					</div>
					{formik.errors.recaptcha && formik.touched.recaptcha && (
						<FormPrompt className="form-prompt">
							{formik.errors.recaptcha}
						</FormPrompt>
					)}
				</FormBlock>

				<SubmitButton type="submit" className="button-primary">
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
	);
};

const SignupForm = ({
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
}) => {
	const formik = useFormik({
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
			let ref1 = Firebase.database()
				.ref()
				.child("users")
				.push();
			let key = ref1.key;
			values.id = key;
			ref1.set(values);

			window.location.href = "/register-completed";
		},
	});
	return (
		<FormContainer>
			<Form onSubmit={formik.handleSubmit}>
				<FormBlock className="form-block">
					<InputLabel htmlFor="username" className="input-label">
						{inputLabelUsername}{" "}
						<span className="require" aria-hidden="true">
							*
						</span>
					</InputLabel>
					<Input
						type="text"
						name="username"
						id="username"
						value={formik.values.username}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder=""
						className={
							"input" +
							(formik.errors.username && formik.touched.username
								? " is-invalid"
								: "")
						}
					/>
					{formik.errors.username && formik.touched.username && (
						<FormPrompt className="form-prompt">
							{formik.errors.username}
						</FormPrompt>
					)}
				</FormBlock>
				<FormBlock className="form-block">
					<InputLabel htmlFor="email" className="input-label">
						{inputLabelEmail}{" "}
						<span className="require" aria-hidden="true">
							*
						</span>
					</InputLabel>
					<Input
						type="email"
						name="email"
						id="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder=""
						className={
							"input" +
							(formik.errors.email && formik.touched.email
								? " is-invalid"
								: "")
						}
					/>
					{formik.errors.email && formik.touched.email && (
						<FormPrompt className="form-prompt">
							{formik.errors.email}
						</FormPrompt>
					)}
				</FormBlock>
				<FormBlock className="form-block">
					<InputLabel htmlFor="password" className="input-label">
						{inputLabelPassword}{" "}
						<span className="require" aria-hidden="true">
							*
						</span>
					</InputLabel>
					<InputPassword
						name="password"
						id="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder=""
						className={
							"input" +
							(formik.errors.password && formik.touched.password
								? " is-invalid"
								: "")
						}
						autoComplete="new-password"
					/>
					{formik.errors.password && formik.touched.password && (
						<FormPrompt className="form-prompt">
							{formik.errors.password}
						</FormPrompt>
					)}
				</FormBlock>
				<FormBlock className="form-block">
					<InputLabel
						htmlFor="confirmPassword"
						className="input-label"
					>
						{inputLabelConfirmPassword}{" "}
						<span className="require" aria-hidden="true">
							*
						</span>
					</InputLabel>
					<InputPassword
						name="confirmPassword"
						id="confirmPassword"
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
							<FormPrompt className="form-prompt">
								{formik.errors.confirmPassword}
							</FormPrompt>
						)}
				</FormBlock>

				<p className="input-checkbox-label" tw="mt-4 mb-0 text-xs text-gray-600">
					<InputCheckbox
							name="tos"
							id="tos"
							onChange={formik.handleChange}
							value="tos"
						/>
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
					<FormPrompt className="form-prompt">
						{formik.errors.tos}
					</FormPrompt>
				)}

				<SubmitButton type="submit" className="button-primary">
					{submitButtonText}
				</SubmitButton>
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
	);
};

export { SignupForm, LoginForm };
