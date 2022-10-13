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

import { Container as ContainerBase } from "../components/Layouts";
import Sidebar from "../components/SideBar/index.js";
import Header from "../components/Header/Header.js";
import { BoxBase as Box } from "../components/Box";
import Pagination from "../components/Pagination/index.js";
import Icon from "../components/Icon/index.js";
import {
	InputBase as Input,
	InputPassword,
} from "../components/Input/index.js"; // eslint-disable-next-line
import FeatherIcon from "feather-icons-react";

import data from "../pages/myexchanges/exchanges.json";

const Container = tw(
	ContainerBase
)`min-h-screen pb-8 lg:pb-0 font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white w-full lg:w-auto flex flex-col lg:flex-row justify-center flex-1 relative`;
const MainContent = tw.div`flex-1 p-4 pt-0 lg:px-12 lg:pb-8 order-first lg:order-last`;

const Table = tw.table`w-full border-separate`;
const THead = tw.thead``;
const THeadCell = tw.th`align-middle bg-gray-100 dark:bg-gray-dark dark:text-white py-3 px-1 lg:p-3 text-left first:w-12 last:w-28 first:rounded-l-md last:rounded-r-md`;
const TBody = tw.tbody`p-3`;
const TBodyRow = tw.tr`transition-all hover:bg-gray-100 dark:hover:bg-gray-dark`;
const TBodyCell = tw.td`align-middle py-3 px-1 lg:p-3 first:rounded-l-md last:rounded-r-md`;
const TRow = tw.tr`relative`;

const ExchangeIcon = styled.span`
	${tw`p-2 rounded-full inline-block leading-none text-[0px]`}
	svg {
		${tw`w-[20px] h-[20px] lg:w-auto lg:h-auto`}
	}
`;
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
const ExchangeDetail = tw.div`block text-[0.8rem] lg:hidden font-normal`;

const LabelSuccess = tw.span`inline-block py-2 px-2 lg:w-28 rounded-full text-[0px] lg:text-[0.8rem] bg-state-success/10 text-state-success border border-solid border-state-success text-center`;
const LabelDanger = tw.span`inline-block py-2 px-2 lg:w-28 rounded-full text-[0px] lg:text-[0.8rem] bg-state-danger/10 text-state-danger border border-solid border-state-danger text-center`;

const ButtonConnect = tw.a`tracking-wide block w-full border-none py-3 px-4 rounded-md no-underline leading-none box-border text-center text-black font-bold`;
const ButtonControl = styled.a`
	${tw`tracking-wide block w-full bg-transparent border border-solid border-gray-500 text-gray-500 hover:text-primary-900 hover:border-primary-900 py-2 px-2 rounded-md drop-shadow-none mr-3 last:mr-0 no-underline leading-none box-border text-center`}
	* {
		${tw`inline-block align-middle`}
	}
	svg {
		${tw`w-[16px] h-[16px] lg:w-auto lg:h-auto`}
	}
`;

const AddExchange = tw.div`relative mt-4`;
// const AddExchangeButton = tw.button`tracking-wide inline-block bg-transparent border border-solid border-primary-700 text-primary-700 hover:text-primary-900 hover:border-primary-900 p-3 rounded-md`;
const AddExchangeButton = styled.a`
	${tw`tracking-wide inline-block bg-transparent border border-solid border-primary-700 text-primary-700 hover:text-primary-900 hover:border-primary-900 p-3 rounded-md no-underline leading-none transition duration-300 ease-in-out w-full lg:w-auto box-border text-center`}
	* {
		${tw`inline-block align-middle`}
	}
`;

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
const SubmitButton = styled.a`
	${tw`mt-8 block no-underline tracking-wide text-base font-semibold border-none text-black w-full py-4 rounded-md focus:shadow-outline focus:outline-none text-center`}
`;

let PageSize = 5;

export default ({ headingText = "My Exchanges" }) => {
	const [
		setupExchangeShown,
		setSetupExchangeShown,
		editExchangeShown,
		setEditExchangeShown,
	] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	const handleClick = (event) => {
		setSetupExchangeShown((current) => !current);
	};

	return (
		<Container>
			<Content>
				<Sidebar />
				<MainContent>
					<Header
						pageUserLog="false"
						pageType="main"
						headingText={headingText}
						headingAccountText="My Account"
						headingUserAvatar="https://ui-avatars.com/api/?name=xavier+trevor&background=fdb04b&rounded=true&bold=true"
						headingHasNotif="true"
						headingHasSearch="false"
					/>
					<Box tw="pt-2 lg:pt-4">
						<Table className="table-data">
							<THead>
								<TRow>
									<THeadCell
										data-th=""
										aria-label="Icon"
									></THeadCell>
									<THeadCell
										data-th="Exchange"
										aria-label="Exchange"
									>
										Exchange
									</THeadCell>
									<THeadCell
										data-th="Wallet name"
										aria-label="Wallet name"
										tw="hidden lg:table-cell"
									>
										Wallet name
									</THeadCell>
									<THeadCell
										data-th="Creation date"
										aria-label="Creation date"
										tw="hidden lg:table-cell"
									>
										Creation date
									</THeadCell>
									<THeadCell
										data-th="Used on"
										aria-label="Used on"
										tw="hidden lg:table-cell"
									>
										Used on
									</THeadCell>
									<THeadCell
										data-th="Balance"
										aria-label="Balance"
										tw="hidden lg:table-cell"
									>
										Balance
									</THeadCell>
									<THeadCell
										data-th="Status"
										aria-label="Status"
									>
										Status
									</THeadCell>
									<THeadCell
										data-th=""
										aria-label="Settings"
									></THeadCell>
								</TRow>
							</THead>
							<TBody>
								{currentTableData.map((item, index) => {
									return (
										<TBodyRow
											key={index}
											data-exchange-id={item._id}
											data-connect={item.isConnected}
											loading="lazy"
										>
											<TBodyCell>
												<ExchangeIcon
													className={
														"exchange-icon exchange-icon-" +
														item.exchange_icon
													}
												>
													<Icon
														icon={
															item.exchange_icon
														}
														size="32"
														fill="#fff"
													/>
												</ExchangeIcon>
											</TBodyCell>
											<TBodyCell>
												<ExchangeName className="exchange-name">
													{item.exchange_name}
													{item.isConnected ===
													true ? (
														<ExchangeDetail>
															<span tw="text-gray-900">
																{item.balance}
															</span>{" "}
															-{" "}
															<a
																href={
																	item.portfolio_url
																}
																tw="text-blue-900"
															>
																{
																	item.portfolio_name
																}
															</a>
														</ExchangeDetail>
													) : (
														""
													)}
												</ExchangeName>
											</TBodyCell>
											<TBodyCell tw="hidden lg:table-cell">
												<ExchangeApi className="wallet-name">
													{item.isConnected ===
													true ? (
														<span>
															{item.wallet_id}
														</span>
													) : (
														<span>-</span>
													)}
												</ExchangeApi>
											</TBodyCell>
											<TBodyCell tw="hidden lg:table-cell">
												<ExchangeDate className="exchange-date">
													{item.isConnected ===
													true ? (
														<span>
															{item.create_date}
														</span>
													) : (
														<span>-</span>
													)}
												</ExchangeDate>
											</TBodyCell>
											<TBodyCell tw="hidden lg:table-cell">
												<ExchangePlace className="exchange-place">
													{item.isConnected ===
													true ? (
														<a
															href={
																item.portfolio_url
															}
														>
															{
																item.portfolio_name
															}
														</a>
													) : (
														<span>-</span>
													)}
												</ExchangePlace>
											</TBodyCell>
											<TBodyCell tw="hidden lg:table-cell">
												<ExchangeBalance className="exchange-balance">
													{item.isConnected ===
													true ? (
														<span>
															{item.balance}
														</span>
													) : (
														<span>-</span>
													)}
												</ExchangeBalance>
											</TBodyCell>
											<TBodyCell>
												<ExchangeStatus className="exchange-status">
													{item.isConnected ===
													true ? (
														<LabelSuccess className="label-success">
															Connected
														</LabelSuccess>
													) : (
														<LabelDanger className="label-danger">
															Error
														</LabelDanger>
													)}
												</ExchangeStatus>
											</TBodyCell>
											<TBodyCell>
												<ExchangeControl className="exchange-control">
													{item.isConnected ===
													true ? (
														<ButtonControl
															href={
																"/myexchanges/setting/" +
																item._id +
																"?connected=true"
															}
															className="button-secondary"
														>
															<FeatherIcon
																icon="settings"
																stroke="currentColor"
																size="20"
															/>{" "}
															<span>
																Settings
															</span>
														</ButtonControl>
													) : (
														<ButtonConnect
															href={
																"/myexchanges/setting/" +
																item._id +
																"?connected=false"
															}
															className="button-primary"
														>
															Connect
														</ButtonConnect>
													)}
												</ExchangeControl>
											</TBodyCell>
										</TBodyRow>
									);
								})}
							</TBody>
						</Table>
						<Pagination
							className="pagination-bar"
							currentPage={currentPage}
							totalCount={data.length}
							pageSize={PageSize}
							onPageChange={(page) => setCurrentPage(page)}
							tw="mt-4"
						/>
					</Box>
					<AddExchange>
						{/*<AddExchangeButton onClick={handleClick}>
							<FeatherIcon
								icon="plus"
								stroke="currentColor"
								size="20"
							/>{" "}
							<span>Add New Exchange</span>
						</AddExchangeButton>*/}
						<AddExchangeButton href="/myexchanges/create">
							<FeatherIcon
								icon="plus"
								stroke="currentColor"
								size="20"
							/>{" "}
							<span>Add New Exchange</span>
						</AddExchangeButton>
					</AddExchange>
				</MainContent>
			</Content>
		</Container>
	);
};