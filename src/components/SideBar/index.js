import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";
import { LogoByTheme as LogoImage } from "../Logo";
import SidebarPromo from "../SideBar/SidebarPromo.js";

const LogoByTheme = tw(LogoImage)`mx-auto w-20`;
const SideBar = tw.aside`bg-white dark:bg-gray-black box-border p-3 lg:p-4 rounded-t-lg lg:rounded-r-lg drop-shadow-md flex lg:flex-col sticky bottom-0 z-10`;
const SidebarLogo = tw.h1`hidden lg:block text-center m-0`;
const SidebarMenu = styled.div`
	${tw`relative lg:mt-4 flex items-stretch lg:block w-full lg:w-auto`}
`;

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
						tw="flex flex-1 items-center no-underline text-black block text-center lg:text-left rounded-md py-3 lg:p-3 lg:my-2 text-[0px] lg:text-[1rem] text-gray-500 lg:hover:text-primary-700 lg:hover:bg-black lg:dark:hover:bg-gray-dark hover:drop-shadow transition-all ease-in-out duration-150"
					>
						<span
							className="sidebar__menu__icon"
							tw="inline-block align-middle leading-none lg:pr-2"
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