import React from "react";
import { render } from "react-dom";

import Highcharts from "highcharts/highstock";
import PieChart from "highcharts-react-official";
import PropTypes from "prop-types";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import { BoxBase as Box } from "../Box/index.js";

const BoxBase = tw(Box)`w-auto lg:p-3`;
const BoxHead = tw.div`border-0 border-b-2 border-solid border-b-gray-100`;
const BoxContent = tw.div`flex items-center mt-2`;
const BoxFoot = tw.ul`flex items-center mt-2 gap-2`;
const Title = tw.h4`font-bold m-0 pb-3`;

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
	series: [
		{
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
	],
	responsive: {
		rules: [
			{
				condition: {
					maxWidth: 200,
				},
				chartOptions: {
					series: [
						{},
						{
							id: "versions",
							dataLabels: {
								enabled: false,
							},
						},
					],
				},
			},
		],
	},
};

const CardConfig = [
	{
		title: "Total Market Cap Tracking",
		is_invested: true,
		strategy: "conservative",
		startDate: "within 24h",
		investors: "254",
		investTimes: "150",
		startValue: "1000",
		currentValue: "1000",
		pnlPercent: "0.00",
		pnlStatus: "equal",
		coinList: [
			{ name: "ETH", allocation: 10.46 },
			{ name: "DOGE", allocation: 10.43 },
			{ name: "DOT", allocation: 10.27 },
			{ name: "SOL", allocation: 10.25 },
			{ name: "BNB", allocation: 10.12 },
			{ name: "BTC", allocation: 9.97 },
			{ name: "ADA", allocation: 9.90 },
			{ name: "SHIB", allocation: 9.71 },
			{ name: "XRP", allocation: 9.64 },
			{ name: "TRX", allocation: 9.25 },
		],
		id: "XTP001"
	},
	{
		title: "NFT Gaming",
		is_invested: false,
		strategy: "aggressive",
		startDate: "2 days ago",
		investors: "12",
		investTimes: "45",
		startValue: "1000",
		currentValue: "800",
		pnlPercent: "-0.20",
		pnlStatus: "loss",
		coinList: [
			{ name: "SAND", allocation: 20.0 },
			{ name: "MANA", allocation: 20.0 },
			{ name: "AXS", allocation: 20.0 },
			{ name: "ENJ", allocation: 20.0 },
			{ name: "GHST", allocation: 20.0 },
		],
		id: "XTP002"
	},
	{
		title: "Large Cap 20",
		is_invested: false,
		strategy: "moderate",
		startDate: "1 month ago",
		investors: "254",
		investTimes: "150",
		startValue: "1000",
		currentValue: "2400",
		pnlPercent: "1.40",
		pnlStatus: "gain",
		coinList: [
			{ name: "DOT", allocation: 15.24 },
			{ name: "BNB", allocation: 10.46 },
			{ name: "XMR", allocation: 10.04 },
			{ name: "TRX", allocation: 7.35 },
			{ name: "XEM", allocation: 7.17 },
			{ name: "ZEC", allocation: 5.23 },
			{ name: "BTC", allocation: 5.03 },
			{ name: "FIL", allocation: 4.76 },
			{ name: "DASH", allocation: 4.55 },
			{ name: "NEO", allocation: 3.93 },
			{ name: "ATOM", allocation: 3.64 },
			{ name: "AAVE", allocation: 3.50 },
			{ name: "IOTA", allocation: 3.07 },
			{ name: "UNI", allocation: 3.03 },
			{ name: "YFI", allocation: 2.81 },
			{ name: "WAVES", allocation: 2.59 },
			{ name: "THETA", allocation: 2.23 },
			{ name: "SNX", allocation: 1.91 },
			{ name: "DOGE", allocation: 1.80 },
			{ name: "OMG", allocation: 1.66 },
		],
		id: "XTP003"
	},
];

// CardConfig.item[0].pnlPercent = (CardConfig.item[0].currentValue - CardConfig.item[0].startValue) / CardConfig.item[0].startValue * 100%;

const cardChart = () => (
	<PieChart highcharts={Highcharts} options={cardChartOpts} />
);

export const Card = () => {

	return (
		<>
		{CardConfig.map((item, index) => (
			<Box className="card-portfolio" status-is-invested={item.is_invested}>
				<BoxHead>
					<Title>{item.title}</Title>
					<p>{item.strategy}</p>
					<p>{item.startDate}</p>
					<p>{item.investors}</p>
				</BoxHead>
				<BoxContent>
					<cardChart />
					<p>PNL: <span className={"is-"+(item.pnlStatus)}>{item.pnlPercent}<small>%</small></span></p>
					<p>Times invested: {item.investTimes}</p>
					<ul>
						{item.coinList.map((coinListItem, index) => (
							<li>{coinListItem.name} ({coinListItem.allocation}%)</li>
						))}
					</ul>
				</BoxContent>
				<BoxFoot>
					<li></li>
				</BoxFoot>
			</Box>
		))}
		</>
	);
};
