import React from "react";
import { Outlet } from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container as ContainerBase } from "../components/Layouts";
import Sidebar from "../components/SideBar/index.js";
import Header from "../components/Header/index.js";


const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white flex flex-col lg:flex-row justify-center flex-1 relative`;
const MainContent = tw.div`flex-1 px-12`;

export default ({
	headingText = "My Exchanges",
}) => {
	return (
		<Container>
			<Content>
				<Sidebar />
				<MainContent>
					<Header headingText={headingText} />
					<Outlet />
				</MainContent>
			</Content>
		</Container>
	);
};