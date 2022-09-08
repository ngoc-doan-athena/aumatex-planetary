import React from "react";
import { Outlet } from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container as ContainerBase } from "../components/Layouts";
import Sidebar from "../components/SideBar/index.js";
import HeaderRoot from "../components/Header/HeaderRoot.js";
import { BoxBase as Box} from "../components/Box/index.js";

const Container = tw(
	ContainerBase
)`h-screen lg:min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white w-full lg:w-auto flex flex-col lg:flex-row justify-center flex-1 relative`;
const MainContent = tw.div`flex-1 p-4 pt-0 lg:px-12 lg:pb-8 order-first lg:order-last`;

export default ({
	headingText = "My Portfolio",
}) => {
	return (
		<Container>
			<Content>
				<Sidebar />
				<MainContent>
					<HeaderRoot headingText={headingText} />
					<Box />
				</MainContent>
			</Content>
		</Container>
	);
};