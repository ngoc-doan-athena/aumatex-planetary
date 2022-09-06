import React, { useState, useMemo } from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

// import recaptcha, Formik & Yup for form validation
import { useFormik } from "formik";
import * as Yup from "yup";

import { Container as ContainerBase } from "../../components/Layouts";
import Sidebar from "../../components/SideBar/index.js";
import HeaderDetail from "../../components/Header/HeaderDetail.js";
import Icon from "../../components/Icon/index.js";
import {
	InputBase as Input,
	InputPassword,
} from "../../components/Input/index.js"; // eslint-disable-next-line

const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white flex flex-col lg:flex-row justify-center flex-1 relative`;
const MainContent = tw.div`flex-1 px-12 pb-8`;

const Table = tw.table`w-full border-separate `;
const THead = tw.thead``;
const THeadCell = tw.th`align-middle bg-gray-100 dark:bg-gray-dark dark:text-white p-3 text-left first:w-12 last:w-28 first:rounded-l-md last:rounded-r-md`;
const TBody = tw.tbody`p-3`;
const TBodyRow = tw.tr`transition-all hover:bg-gray-100 dark:hover:bg-gray-dark`;
const TBodyCell = tw.td`align-middle p-3 first:rounded-l-md last:rounded-r-md`;
const TRow = tw.tr`relative`;

const ExchangeIcon = tw.span`p-2 rounded-full bg-currency-bnb inline-block leading-none text-[0px]`;
const ExchangeName = tw.span`font-bold`;
const ExchangeApi = tw.span`relative`;
const ExchangeDate = tw.span`relative`;
const ExchangePlace = styled.span`
	${tw`relative`}
	a {
		${tw`text-blue-900 hover:text-primary-900`}
	}
`;
const ExchangeBalance = tw.span`relative`;
const ExchangeStatus = tw.span`relative`;
const ExchangeControl = tw.div`relative`;

const LabelSuccess = tw.span`inline-block py-2 px-2 w-28 rounded-full bg-state-success/10 text-state-success border border-solid border-state-success text-center`;
const LabelDanger = tw.span`inline-block py-2 px-2 w-28 rounded-full bg-state-danger/10 text-state-danger border border-solid border-state-danger text-center`;

const ButtonConnect = tw.button`tracking-wide block w-full border-none py-2 px-4 rounded-md`;
const ButtonControl = tw.button`tracking-wide block w-full bg-transparent border border-solid border-gray-500 text-gray-500 hover:text-primary-900 hover:border-primary-900 py-1 px-2 rounded-md drop-shadow-none mr-3 last:mr-0`;

const AddExchange = tw.div`relative mt-4`;
const AddExchangeButton = tw.button`tracking-wide inline-block bg-transparent border border-solid border-primary-700 text-primary-700 hover:text-primary-900 hover:border-primary-900 p-3 rounded-md`;

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
	${tw`mt-8 inline-block justify-self-end tracking-wide text-base font-semibold border-none text-black w-56 py-4 rounded-md focus:shadow-outline focus:outline-none text-center disabled:bg-none disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed pointer-events-none`}
`;
const RemoveButton = styled.button`
	${tw`mt-8 inline-block tracking-wide text-base font-semibold border border-solid border-state-danger bg-transparent text-state-danger w-56 py-4 mr-2 rounded-md focus:shadow-outline focus:outline-none text-center`}
`;

let PageSize = 4;

export default ({
	headingText = "Exchange Setup",
	submitButtonText = "Connect Exchange",
	removeButtonText = "Remove",

	
}) => {
	return (
		<Container>
			<Content>
				<Sidebar />
				<MainContent>
					<HeaderDetail headingText={headingText} />
					<FormContainer>
						<Form>
							<FormBlock className="form-block">
								<InputLabel
									htmlFor="apikey"
									className="input-label"
								>
									API Key{" "}
									<span
										className="require"
										aria-hidden="true"
									>
										*
									</span>
								</InputLabel>
								<div tw="flex flex-row items-center">
									<Input
										type="text"
										name="apikey"
										id="apikey"
										value=""
										placeholder=""
										className="input"
									/>
									<span tw="inline-block align-middle w-32 ml-2 mt-1">
										<a
											href="#"
											tw="text-primary-900"
											className="acr-primary"
										>
											How to find it?
										</a>
									</span>
								</div>
							</FormBlock>
							<FormBlock className="form-block">
								<InputLabel
									htmlFor="apisecret"
									className="input-label"
								>
									API Secret{" "}
									<span
										className="require"
										aria-hidden="true"
									>
										*
									</span>
								</InputLabel>
								<Input
									type="text"
									name="apisecret"
									id="apisecret"
									value=""
									placeholder=""
									className="input"
								/>
							</FormBlock>
							<FormBlock className="form-block">
								<InputLabel
									htmlFor="accountname"
									className="input-label"
								>
									Account name
								</InputLabel>
								<Input
									type="text"
									name="accountname"
									id="accountname"
									value=""
									placeholder=""
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
										checked
										tw="appearance-none border-solid border-2 border-gray-900 rounded-sm"
									/>
								</span>
								<InputLabel htmlFor="tos">
									By checking this box you have agreed to our{" "}
									<a
										href="/termsofservice"
										tw="text-primary-900"
										className="acr-primary"
									>
										Terms of service
									</a>
								</InputLabel>
							</p>
							<p tw="text-right">
								<RemoveButton
									type="button"
									className="button-danger"
								>
									{removeButtonText}
								</RemoveButton>
								<SubmitButton
									type="submit"
									disabled
									className="button-primary"
								>
									{submitButtonText}
								</SubmitButton>
							</p>
						</Form>
					</FormContainer>
				</MainContent>
			</Content>
		</Container>
	);
};