import React from "react";
import { Outlet } from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container as ContainerBase } from "../components/Layouts";
import Sidebar from "../components/SideBar/index.js";
import HeaderRoot from "../components/Header/HeaderRoot.js";
import { BoxBase as Box } from "../components/Box/index.js";
import Icon from "../components/Icon/index.js";
import FeatherIcon from "feather-icons-react";

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
const ButtonControl = tw.button`tracking-wide block w-full bg-transparent border border-solid border-gray-500 text-gray-500 hover:text-primary-700 hover:border-primary-700 py-1 px-2 rounded-md drop-shadow-none mr-3 last:mr-0`;

export default ({ headingText = "My Exchanges" }) => {
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
								<TBodyRow data-connect="true">
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
											Binance
										</ExchangeName>
									</TBodyCell>
									<TBodyCell>
										<ExchangeApi className="exchange-api">
											XTR API
										</ExchangeApi>
									</TBodyCell>
									<TBodyCell>
										<ExchangeDate className="exchange-date">
											Dec 22, 2022
										</ExchangeDate>
									</TBodyCell>
									<TBodyCell>
										<ExchangePlace className="exchange-place">
											<a href="/myportfolio">Portfolio</a>
										</ExchangePlace>
									</TBodyCell>
									<TBodyCell>
										<ExchangeBalance className="exchange-balance">
											$2,000
										</ExchangeBalance>
									</TBodyCell>
									<TBodyCell>
										<ExchangeStatus className="exchange-status">
											<LabelSuccess className="label-success">
												Connected
											</LabelSuccess>
										</ExchangeStatus>
									</TBodyCell>
									<TBodyCell>
										<ExchangeControl className="exchange-control">
											<ButtonControl className="button-secondary">
												<FeatherIcon
													icon="settings"
													stroke="currentColor"
													size="20"
												/>{" "}
												<span>Settings</span>
											</ButtonControl>
										</ExchangeControl>
									</TBodyCell>
								</TBodyRow>
								<TBodyRow data-connect="false">
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
											Binance
										</ExchangeName>
									</TBodyCell>
									<TBodyCell>
										<ExchangeApi className="exchange-api">
											-
										</ExchangeApi>
									</TBodyCell>
									<TBodyCell>
										<ExchangeDate className="exchange-date">
											-
										</ExchangeDate>
									</TBodyCell>
									<TBodyCell>
										<ExchangePlace className="exchange-place">
											-
										</ExchangePlace>
									</TBodyCell>
									<TBodyCell>
										<ExchangeBalance className="exchange-balance">
											-
										</ExchangeBalance>
									</TBodyCell>
									<TBodyCell>
										<ExchangeStatus className="exchange-status">
											<LabelDanger className="label-danger">
												Disconnected
											</LabelDanger>
										</ExchangeStatus>
									</TBodyCell>
									<TBodyCell>
										<ExchangeControl className="exchange-control">
											<ButtonConnect className="button-primary">
												Connect
											</ButtonConnect>
										</ExchangeControl>
									</TBodyCell>
								</TBodyRow>
							</TBody>
						</Table>
					</Box>
				</MainContent>
			</Content>
		</Container>
	);
};