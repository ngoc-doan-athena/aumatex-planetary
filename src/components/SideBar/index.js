import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";
import { LogoByTheme as LogoImage } from "../Logo";
import SidebarPromo from "../SideBar/SidebarPromo.js";

const LogoByTheme = tw(LogoImage)`mx-auto w-20`;
const SideBar = tw.aside`bg-white dark:bg-gray-black p-4 rounded-t-lg lg:rounded-r-lg drop-shadow-md flex flex-col`;
const SidebarLogo = tw.h1`text-center m-0`;
const SidebarMenu = tw.div`relative mt-4`;

const SideBarConfig = [
	{
		text: "Dashboard",
		icon: <Icon icon="market" />,
		to: "/",
		page: "dashboard",
	},
	{
		text: "Auto Invest",
		icon: <Icon icon="portfolio" />,
		to: "/strategies/myportfolio",
		page: "myportfolio",
	},
	{
		text: "My Exchanges",
		icon: <Icon icon="exchange" />,
		to: "/myexchanges",
		page: "exchanges",
	},
	{
		text: "Contact",
		icon: <Icon icon="mail" />,
		to: "/contact",
		page: "contact",
	},
];

const SideBarRoot = () => {

	const [activeIndex, setActiveIndex] = useState(0);
	// const [stepHeight, setStepHeight] = useState(0);
	const sidebarRef = useRef();
	const indicatorRef = useRef();
	const location = useLocation();

	useEffect(() => {
		setTimeout(() => {
			const sidebarItem = sidebarRef.current.querySelector(
				".sidebar__menu__item"
			);
		}, 50);
	}, []);

	useEffect(() => {
		const curPath = window.location.pathname.split("/")[1];
		const activeItem = SideBarConfig.findIndex(
			(item) => item.page === curPath
		);
		setActiveIndex(curPath.length === 0 ? 0 : activeItem);
	}, [location]);

	return (
		<SideBar className="sidebar">
			<SidebarLogo className="sidebar__logo">
				<LogoImage />
			</SidebarLogo>
			<SidebarMenu ref={sidebarRef} className="sidebar__menu">
				{SideBarConfig.map((item, index) => (
					<NavLink
						to={item.to}
						key={index}
						className="sidebar__menu__item"
						tw="flex items-center no-underline text-black block rounded-md p-3 my-2 text-gray-500 hover:text-primary-700 hover:bg-black dark:hover:bg-gray-dark hover:drop-shadow transition-all ease-in-out duration-150"
					>
						<span
							className="sidebar__menu__icon"
							tw="inline-block align-middle leading-none pr-2"
						>
							{item.icon}
						</span>
						<span
							className="sidebar__menu__text"
							tw="inline-block align-middle"
						>
							{item.text}
						</span>
					</NavLink>
				))}
			</SidebarMenu>
			<SidebarPromo />
		</SideBar>
	);
};

export default SideBarRoot;