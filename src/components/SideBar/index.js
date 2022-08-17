import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from 'react-router-dom';

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import { ThemeContext } from "../../helpers/ThemeContext";

import Icon from "../Icon/index.js";
import logoLight from "../../images/logo-xtrading-text.svg";
import logoDark from "../../images/logo-xtrading-text-dark.svg";
import premium from "../../images/xtrading-banner-premium.svg";

const LogoImage = tw.img`mx-auto w-20`;
const PremiumImage = tw.img`mx-auto w-full`;

const SideBarConfig = [
	{
		text: "Dashboard",
		icon: <Icon icon="market" />,
		to: "/",
		section: "dashboard",
	},
	{
		text: "Auto Invest",
		icon: <Icon icon="portfolio" />,
		to: "/strategies/myportfolio",
		section: "myportfolio",
	},
	{
		text: "My Exchanges",
		icon: <Icon icon="exchange" />,
		to: "/myexchanges",
		section: "exchanges",
	},
	{
		text: "Contact",
		icon: <Icon icon="mail" />,
		to: "/contact",
		section: "contact",
	},
];

const SideBarRoot = () => {
	const { theme } = React.useContext(ThemeContext);

	const [activeIndex, setActiveIndex] = useState(0);
	const [stepHeight, setStepHeight] = useState(0);
	const sidebarRef = useRef();
	const indicatorRef = useRef();
	const location = useLocation();

	useEffect(() => {
		setTimeout(() => {
			const sidebarItem = sidebarRef.current.querySelector(
				".sidebar__menu__item"
			);
			indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
			setStepHeight(sidebarItem.clientHeight);
		}, 50);
	}, []);

	useEffect(() => {
		const curPath = window.location.pathname.split("/")[1];
		const activeItem = SideBarConfig.findIndex(
			(item) => item.section === curPath
		);
		setActiveIndex(curPath.length === 0 ? 0 : activeItem);
	}, [location]);

	return (
		<aside
			className="sidebar"
			tw="bg-white dark:bg-gray-black p-4 rounded-r-lg drop-shadow-md flex flex-col"
		>
			<h1 className="sidebar__logo" tw="text-center m-0">
				<LogoImage src={theme === "dark" ? logoDark : logoLight} alt="xTrading" />
			</h1>
			<div ref={sidebarRef} className="sidebar__menu" tw="relative">
				<div
					ref={indicatorRef}
					className="sidebar__menu__indicator"
					style={{
						transform: `translateX(-50%) translateY(${activeIndex *
							stepHeight}px)`,
					}}
				></div>
				{SideBarConfig.map((item, index) => (
					<Link
						to={item.to}
						key={index}
						tw="flex items-center no-underline text-black block rounded-md p-3 text-gray-500 hover:text-primary-700 hover:bg-black dark:hover:bg-gray-dark hover:drop-shadow transition-all ease-in-out duration-150"
						className={`sidebar__menu__item ${
								activeIndex === index ? "is-active" : " "
							}`}
					>
						<span
							className="sidebar__menu__item__icon"
							tw="inline-block align-middle leading-none pr-2"
						>
							{item.icon}
						</span>
						<span
							className="sidebar__menu__item__text"
							tw="inline-block align-middle"
						>
							{item.text}
						</span>
					</Link>
				))}
			</div>
			<div className="sidebar__promo" tw="mt-auto">
				<Link to="/promotion" target="_blank">
					{" "}
					{/*TODO: dummy link*/}
					<PremiumImage
						src={premium}
						alt="Unlock more bots, trade easier! Get PRO now!"
					/>
				</Link>
			</div>
		</aside>
	);
};

export default SideBarRoot;