import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";

import Icon from "../Icon/index.js";
import { LogoByTheme } from "../Logo";
import SidebarPromo from "../SideBar/SidebarPromo.js";

const LogoImage = tw(LogoByTheme)`mx-auto w-20`;
const SideBar = tw.aside`bg-white dark:bg-gray-black box-border p-3 lg:p-4 rounded-t-lg lg:rounded-r-lg drop-shadow-md flex lg:flex-col fixed lg:static bottom-0 left-0 right-0 z-10`;
const SidebarLogo = tw.h1`hidden lg:block text-center m-0`;
const SidebarMenu = styled.div`
	${tw`relative lg:mt-4 flex items-stretch lg:block w-full lg:w-auto`}
`;
const SidebarLink = styled(NavLink)`
	${tw`flex flex-1 items-center no-underline text-black block text-center lg:text-left rounded-md py-3 lg:p-3 lg:my-2 text-[0px] lg:text-[1rem] text-gray-500 hover:text-black hover:bg-primary-700 hover:drop-shadow-md transition-all ease-in-out duration-150`}
	&.active {
		${tw`text-black font-bold bg-primary-700 drop-shadow-md hover:bg-primary-900`}
	}
`;
const SidebarLinkIcon = tw.span`inline-block align-middle leading-none lg:pr-2`;
const SidebarLinkText = tw.span`inline-block align-middle`;

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
		to: "/strategies",
		page: "strategies",
	},
	{
		text: "My Exchanges",
		icon: <Icon icon="exchange" />,
		to: "/myexchanges",
		page: "exchanges",
	},
	{
		text: "History",
		icon: <Icon icon="history" />,
		to: "/history",
		page: "history",
	},
	{
		text: "Contact",
		icon: <Icon icon="mail" />,
		to: "/contact",
		page: "contact",
	},
];

const SideBarRoot = () => {
	// const [activeIndex, setActiveIndex] = useState(0);
	const sidebarRef = useRef();
	const location = useLocation();

	return (
		<SideBar className="sidebar">
			<SidebarLogo className="sidebar__logo">
				<LogoImage />
			</SidebarLogo>
			<SidebarMenu ref={sidebarRef} className="sidebar__menu">
				{SideBarConfig.map((item, index) => (
					<SidebarLink
						to={item.to}
						key={index}
						className="sidebar__menu__item"
					>
						<SidebarLinkIcon className="sidebar__menu__icon">
							{item.icon}
						</SidebarLinkIcon>
						<SidebarLinkText className="sidebar__menu__text">
							{item.text}
						</SidebarLinkText>
					</SidebarLink>
				))}
			</SidebarMenu>
			<SidebarPromo />
		</SideBar>
	);
};

export default SideBarRoot;