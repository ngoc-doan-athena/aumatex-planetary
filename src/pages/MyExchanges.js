import React, { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container as ContainerBase } from "../components/Layouts";
import Sidebar from "../components/SideBar/index.js";
import HeaderRoot from "../components/Header/HeaderRoot.js";
import { BoxBase as Box } from "../components/Box";
import Pagination from "../components/Pagination/index.js";
import Icon from "../components/Icon/index.js";
import FeatherIcon from "feather-icons-react";

import data from "../pages/myexchanges/exchanges.json";

const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white flex flex-col lg:flex-row justify-center flex-1 relative`;
const MainContent = tw.div`flex-1 px-12`;

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
		${tw`text-blue-900`}
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

let PageSize = 4;

export default ({ headingText = "My Exchanges" }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);
	return (
		<Container>
			<Content>
				<Sidebar />
				<MainContent>
					<HeaderRoot headingText={headingText} />
					<Box>
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
									>
										Wallet name
									</THeadCell>
									<THeadCell
										data-th="Creation date"
										aria-label="Creation date"
									>
										Creation date
									</THeadCell>
									<THeadCell
										data-th="Used on"
										aria-label="Used on"
									>
										Used on
									</THeadCell>
									<THeadCell
										data-th="Balance"
										aria-label="Balance"
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
										>
											<TBodyCell>
												<ExchangeIcon className="exchange-icon">
													<Icon
														icon="binance"
														size="32"
														fill="#fff"
													/>
												</ExchangeIcon>
											</TBodyCell>
											<TBodyCell>
												<ExchangeName className="exchange-name">
													{item.exchange_name}
												</ExchangeName>
											</TBodyCell>
											<TBodyCell>
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
											<TBodyCell>
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
											<TBodyCell>
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
											<TBodyCell>
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
															Disconnected
														</LabelDanger>
													)}
												</ExchangeStatus>
											</TBodyCell>
											<TBodyCell>
												<ExchangeControl className="exchange-control">
													{item.isConnected ===
													true ? (
														<ButtonControl className="button-secondary">
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
														<ButtonConnect className="button-primary">
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
						/>
					</Box>
					<AddExchange>
						<AddExchangeButton>
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