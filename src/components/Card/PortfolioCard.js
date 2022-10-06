import React, { useMemo } from "react";
import { render } from "react-dom";

import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import PropTypes from "prop-types";

import data from "cryptocurrency-icons/manifest.json";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import { BoxBase as Box } from "../Box/index.js";
import ChartTypePie from "../Chart/ChartConstruct.js";
import FeatherIcon from "feather-icons-react";

const BoxBase = tw(Box)`w-auto lg:p-3`;
const BoxHead = tw.div`border-0 border-b-2 border-solid border-b-gray-100`;
const BoxContent = tw.div`mt-2`;
const BoxFoot = tw.ul`list-none flex items-center m-0 p-0 mt-2 gap-2`;
const Title = tw.h4`text-[1.25rem] font-bold m-0`;
const PrimaryButton = tw.a`block tracking-wide w-full font-semibold border-none bg-primary-700 text-black w-full px-3 leading-[48px] rounded-md hover:bg-primary-900 transition ease-in-out duration-300 ease-in-out focus:shadow-outline focus:outline-none text-center box-border no-underline`;
const SecondaryButton = tw.a`block w-full px-3 leading-[44px] font-bold rounded bg-transparent border-2 border-solid border-gray-500 text-black dark:text-white hocus:border-primary-700 hocus:text-primary-700 shadow-none focus:outline-none transition duration-300 text-center box-border no-underline`;
const LabelAggressive = tw.span`inline-block align-middle py-1 px-2 rounded-full text-[0.8rem] border border-solid text-center bg-primary-700/10 text-primary-700 border-primary-700`;
const LabelConservative = tw.span`inline-block align-middle py-1 px-2 rounded-full text-[0.8rem] border border-solid text-center bg-blue-700/10 text-blue-700 border-blue-700`;

const CardConfig = [
	{
		id: "XTP001",
		title: "Total Market Cap Tracking",
		is_invested: true,
		strategy: "conservative",
		date_start: "within 24h",
		investors: 254,
		times_invested: 1503,
		value_start: 1000,
		value_current: 1000,
		coins_invested: [
			{
				symbol: "ETH",
				name: "Etherium",
				color: "#627eea",
				allocation: 10.46,
			},
			{
				symbol: "DOGE",
				name: "Dogecoin",
				color: "#c3a634",
				allocation: 10.43,
			},
			{
				symbol: "DOT",
				name: "Polkadot",
				color: "#e6007a",
				allocation: 10.27,
			},
			{
				symbol: "SOL",
				name: "Solana",
				color: "#66f9a1",
				allocation: 10.25,
			},
			{
				symbol: "BNB",
				name: "Binance Coin",
				color: "#f3ba2f",
				allocation: 10.12,
			},
			{
				symbol: "BTC",
				name: "Bitcoin",
				color: "#f7931a",
				allocation: 9.97,
			},
			{
				symbol: "ADA",
				name: "Cardano",
				color: "#0d1e30",
				allocation: 9.9,
			},
			{
				symbol: "SHIB",
				name: "SIBCoin",
				color: "#057bc1",
				allocation: 9.71,
			},
			{
				symbol: "XRP",
				name: "XRP",
				color: "#23292f",
				allocation: 9.64,
			},
			{
				symbol: "TRX",
				name: "TRON",
				color: "#ef0027",
				allocation: 9.25,
			},
		],
	},
	{
		id: "XTP002",
		title: "Large Cap 20",
		status: "Online",
		is_invested: false,
		strategy: "aggressive",
		date_start: "1 month ago",
		investors: 254,
		times_invested: 150246,
		value_start: 1000,
		value_current: 2400,
		coins_invested: [
			{
				symbol: "DOT",
				name: "Polkadot",
				allocation: 15.24,
				color: "#e6007a",
			},
			{
				symbol: "BNB",
				name: "Binance Coin",
				allocation: 10.46,
				color: "#f3ba2f",
			},
			{
				symbol: "XMR",
				name: "Monero",
				allocation: 10.04,
				color: "#ff6600",
			},
			{
				symbol: "TRX",
				name: "TRON",
				allocation: 7.35,
				color: "#ef0027",
			},
			{
				symbol: "XEM",
				name: "NEM",
				allocation: 7.17,
				color: "#67b2e8",
			},
			{
				symbol: "ZEC",
				name: "Zcash",
				allocation: 5.23,
				color: "#ecb244",
			},
			{
				symbol: "BTC",
				name: "Bitcoin",
				allocation: 5.03,
				color: "#f7931a",
			},
			{
				symbol: "FIL",
				name: "Filecoin [IOU]",
				allocation: 4.76,
				color: "#42c1ca",
			},
			{
				symbol: "DASH",
				name: "Dash",
				allocation: 4.55,
				color: "#008ce7",
			},
			{
				symbol: "NEO",
				name: "NEO",
				allocation: 3.93,
				color: "#58bf00",
			},
			{
				symbol: "ATOM",
				name: "Cosmos",
				allocation: 3.64,
				color: "#2e3148",
			},
			{
				symbol: "AAVE",
				name: "AAVE",
				allocation: 3.5,
				color: "#2ebac6",
			},
			{
				symbol: "MIOTA",
				name: "IOTA",
				allocation: 3.07,
				color: "#242424",
			},
			{
				symbol: "UNI",
				name: "Uniswap",
				allocation: 3.03,
				color: "#ff007a",
			},
			{
				symbol: "YFI",
				name: "yearn.finance",
				allocation: 2.81,
				color: "#006ae3",
			},
			{
				symbol: "WAVES",
				name: "Waves",
				allocation: 2.59,
				color: "#0155ff",
			},
			{
				symbol: "THETA",
				name: "Theta Network",
				allocation: 2.23,
				color: "#2ab8e6",
			},
			{
				symbol: "SNX",
				name: "Synthetix",
				allocation: 1.91,
				color: "#5fcdf9",
			},
			{
				symbol: "DOGE",
				name: "Dogecoin",
				allocation: 1.8,
				color: "#c3a634",
			},
			{
				symbol: "OMG",
				name: "OMG Network",
				allocation: 1.66,
				color: "#101010",
			},
		],
	},
];

const cardChartOpts = {
	chart: {
		type: "pie",
		height: 150,
		width: 150,
		plotBackgroundColor: null,
		plotBorderWidth: 0,
		plotShadow: false,
	},
	credits: {
		enabled: false,
	},
	exporting: {
		enabled: false,
	},
	plotOptions: {
		pie: {
			borderWidth: 0,
			shadow: false,
			center: ["50%", "50%"],
			dataLabels: false,
			states: {
				hover: {
					brightness: 0.01,
					halo: {
						size: 0,
					},
				},
			},
		},
	},
	title: false,
	tooltip: {
		valueSuffix: "%",
		backgroundColor: "#fff",
		borderRadius: "8",
		borderWidth: 0,
	},
	series: {
		name: "Invested",
		data: [
				{
					y: 61.04,
					name: "BTC",
					color: "#f7931a",
				},
				{
					y: 9.47,
					name: "LTC",
					color: "#345D9D",
				},
				{
					y: 9.32,
					name: "ETH",
					color: "#627eea",
				},
				{
					y: 8.15,
					name: "DASH",
					color: "#1c75bc",
				},
			],
		size: "100%",
		innerSize: "60%",
	},
};

// class PieChartWrap extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	// componentDidMount() {
// 	// 	fetch("../../data/portfoliodata.json")
// 	// 		.then((response) => response.ok && response.json())
// 	// 		.then((data) => {
// 	// 			let newData = JSON.stringify(data);
// 	// 			for (let i = 0; i < data.coins_invested.length; i++) {
// 	// 				newData.push({
// 	// 					y: data.coins_invested[i].allocation,
// 	// 					color: data.coins_invested[i].color,
// 	// 					name: data.coins_invested[i].name,
// 	// 				});
// 	// 			}
// 	// 			cardChartOpts.series[0].data = newData;

// 	// 			this.setState({ data: newData });
// 	// 		})
// 	// 		.catch((error) => console.error(error.message));
// 	// }

// 	render() {
// 		return <ChartTypePie highcharts={Highcharts} options={cardChartOpts} />;
// 	}
// }

export const Card = () => {
	return (
		<>
			{CardConfig.map((item, index) => (
				<Box
					className="card-portfolio"
					status-is-invested={item.is_invested}
					key={index}
				>
					<BoxHead>
						<Title>{item.title}</Title>
						<p tw="mt-2 mb-4 mx-0 inline-block align-middle">
							{item.strategy === "aggressive" ? (
								<LabelAggressive
									aggressive
									className="is-aggressive"
								>
									{item.strategy.charAt(0).toUpperCase() +
										item.strategy.slice(1)}
								</LabelAggressive>
							) : (
								<LabelConservative
									conservative
									className="is-conservative"
								>
									{item.strategy.charAt(0).toUpperCase() +
										item.strategy.slice(1)}
								</LabelConservative>
							)}
						</p>
						<p tw="mt-2 mb-4 mx-0 inline-block align-middle ml-3 text-gray-700 text-[0.8rem]">
							<FeatherIcon
								icon="watch"
								size="16"
								tw="align-text-bottom"
							/>{" "}
							{item.date_start}
						</p>
						<p tw="mt-2 mb-4 mx-0 inline-block align-middle ml-3 text-gray-700 text-[0.8rem]">
							<FeatherIcon
								icon="users"
								size="16"
								tw="align-text-bottom"
							/>{" "}
							{item.investors.toLocaleString("en-US", {
								maximumFractionDigits: 2,
							})}{" "}
							Investors
						</p>
					</BoxHead>
					<BoxContent>
						<div
							className="card-summary"
							tw="flex flex-wrap items-center gap-2"
						>
							<div className="card-chart" tw="w-full lg:w-auto">
								<PieChart highcharts={Highcharts} options={cardChartOpts} />
							</div>
							<p tw="bg-gray-100 dark:bg-gray-dark rounded-md p-3 flex-1">
								<small tw="text-gray-700">PNL</small>
								{item.value_current > item.value_start ? (
									<span
										className="is-gain"
										tw="text-[1.5rem] font-bold block text-state-success"
									>
										{(
											(((item.value_current -
												item.value_start) /
												item.value_start) *
												100) /
											100
										).toFixed(2)}
										<small tw="text-[0.8rem]">%</small>
									</span>
								) : item.value_current < item.value_start ? (
									<span
										className="is-loss"
										tw="text-[1.5rem] font-bold block text-state-danger"
									>
										{(
											(((item.value_current -
												item.value_start) /
												item.value_start) *
												100) /
											100
										).toFixed(2)}
										<small tw="text-[0.8rem]">%</small>
									</span>
								) : (
									<span
										className="is-equal"
										tw="text-[1.5rem] font-bold block"
									>
										{(
											(((item.value_current -
												item.value_start) /
												item.value_start) *
												100) /
											100
										).toFixed(2)}
										<small tw="text-[0.8rem]">%</small>
									</span>
								)}
							</p>
							<p tw="bg-gray-100 dark:bg-gray-dark rounded-md p-3 flex-1">
								<small tw="text-gray-700">Times invested</small>
								<span tw="text-[1.5rem] font-bold block text-blue-700">
									{item.times_invested.toLocaleString(
										"en-US",
										{
											maximumFractionDigits: 2,
										}
									)}
								</span>
							</p>
						</div>
						<div className="card-coinlist" tw="flex items-center">
							<ul
								className="card-coinlist-list"
								tw="flex m-0 p-0 items-center"
							>
								{item.coins_invested
									.slice(0, 7)
									.map((coinListItem, index) => (
										<li
											tw="flex items-center text-[0.8rem] ml-4 first:ml-0"
											key={index}
										>
											<span
												tw="w-[0.4rem] h-[0.4rem] inline-block rounded-full align-middle mr-2"
												style={{
													backgroundColor:
														coinListItem.color,
												}}
											></span>
											<span>{coinListItem.symbol}</span>
										</li>
									))}
							</ul>
							{item.coins_invested.length > 7 && (
								<p
									className="card-coinlist-remain"
									tw="text-[0.8rem] text-gray-700 m-0 ml-auto"
								>
									<span
										tw="w-[0.4rem] h-[0.4rem] inline-block rounded-full align-middle mr-1"
										style={{
											backgroundColor: "#EDF0F4",
										}}
									></span>
									<span tw="text-black">
										+ {item.coins_invested.length - 5}
									</span>{" "}
									more
								</p>
							)}
						</div>
					</BoxContent>
					<BoxFoot tw="mt-4">
						{item.is_invested === true ? (
							<li tw="w-full">
								<PrimaryButton href="#">
									View performance
								</PrimaryButton>
							</li>
						) : (
							<>
								<li tw="w-1/2">
									<SecondaryButton href="#">
										Explore
									</SecondaryButton>
								</li>
								<li tw="w-1/2">
									<PrimaryButton href="#">
										Invest
									</PrimaryButton>
								</li>
							</>
						)}
					</BoxFoot>
				</Box>
			))}
		</>
	);
};