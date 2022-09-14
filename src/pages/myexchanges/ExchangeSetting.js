import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

import data from "./exchanges.json";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

// import recaptcha, Formik & Yup for form validation
import { useFormik } from "formik";
import * as Yup from "yup";

import Icon from "../../components/Icon/index.js";
import {
	InputBase as Input,
	InputPassword,
} from "../../components/Input/index.js"; // eslint-disable-next-line

// styling
const FormContainer = tw.div`w-full flex-1 mt-1`;
const Form = tw.form`max-w-[800px]`;
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
	${tw`mt-8 inline-block justify-self-end tracking-wide text-base font-semibold border-none text-black w-56 py-4 rounded-md focus:shadow-outline focus:outline-none text-center disabled:bg-none disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed disabled:pointer-events-none`}
`;
const RemoveButton = styled.button`
	${tw`mt-8 inline-block tracking-wide text-base font-semibold border border-solid border-state-danger bg-transparent text-state-danger w-56 py-4 mr-2 rounded-md focus:shadow-outline focus:outline-none text-center`}
`;

const Setting = ({
	submitButtonText = "Connect Exchange",
	removeButtonText = "Remove",
	textHint = "How to find it?",
	apiKeyText = "API Key",
	apiSecretText = "API Secret",
	accountNameText = "Account Name",
	tosHint = "By checking this box you have agreed to our",
	tosText = "Terms of Service",

	// handling input values
	formik = useFormik({
		initialValues: {
			apikey: "",
			apisecret: "",
			accountname: "",
		},
		validationSchema: Yup.object({
			apikey: Yup.string().required("This field is required."),
			apisecret: Yup.string().required("This field is required."),
		}),
		onSubmit: (values) => {
			window.location.href = "/myexchanges";
		},
	}),
}) => {
	return (
		<FormContainer>
			<Form onSubmit={formik.handleSubmit}>
				<FormBlock className="form-block">
					<InputLabel htmlFor="apikey" className="input-label">
						{apiKeyText}{" "}
						<span className="require" aria-hidden="true">
							*
						</span>
					</InputLabel>
					<div tw="flex flex-row items-center">
						<Input
							type="text"
							name="apikey"
							id="apikey"
							value={formik.values.apikey}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder=""
							className={
								"input" +
								(formik.errors.apikey && formik.touched.apikey
									? " is-invalid"
									: "")
							}
						/>
						<span tw="inline-block align-middle w-32 ml-2 mt-1">
							<a
								href="#"
								tw="text-primary-900"
								className="acr-primary"
							>
								{textHint}
							</a>
						</span>
					</div>
					{formik.errors.apikey && formik.touched.apikey && (
						<FormPrompt className="form-prompt">
							{formik.errors.apikey}
						</FormPrompt>
					)}
				</FormBlock>
				<FormBlock className="form-block">
					<InputLabel htmlFor="apisecret" className="input-label">
						{apiSecretText}{" "}
						<span className="require" aria-hidden="true">
							*
						</span>
					</InputLabel>
					<Input
						type="text"
						name="apisecret"
						id="apisecret"
						value={formik.values.apisecret}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder=""
						className={
							"input" +
							(formik.errors.apisecret && formik.touched.apisecret
								? " is-invalid"
								: "")
						}
					/>
					{formik.errors.apisecret && formik.touched.apisecret && (
						<FormPrompt className="form-prompt">
							{formik.errors.apisecret}
						</FormPrompt>
					)}
				</FormBlock>
				<FormBlock className="form-block">
					<InputLabel htmlFor="accountname" className="input-label">
						{accountNameText}
					</InputLabel>
					<Input
						type="text"
						name="accountname"
						id="accountname"
						value={formik.values.accountname}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="input"
					/>
				</FormBlock>
				<p tw="mt-4 mb-0 text-xs text-gray-600">
					<span tw="inline-block align-text-bottom">
						<input
							type="checkbox"
							name="tos"
							id="tos"
							className="input-checkbox"
							type="checkbox"
							checked
							onChange={formik.handleChange}
							tw="appearance-none border-solid border-2 border-gray-900 rounded-sm"
						/>
					</span>
					<InputLabel htmlFor="tos">
						{tosHint}{" "}
						<a
							href="/termsofservice"
							tw="text-primary-900"
							className="acr-primary"
						>
							{tosText}
						</a>
					</InputLabel>
				</p>
				<p tw="text-right">
					<RemoveButton type="button" className="button-danger">
						{removeButtonText}
					</RemoveButton>
					<SubmitButton
						type="submit"
						disabled={!(formik.isValid && formik.dirty)}
						className="button-primary"
					>
						{submitButtonText}
					</SubmitButton>
				</p>
			</Form>
		</FormContainer>
	);
};

export default Setting;