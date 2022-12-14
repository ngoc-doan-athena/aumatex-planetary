import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container as ContainerBase } from "../components/Layouts";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
// import { BoxBase as Box } from "../components/Box/index.js";
import { TabBox } from "../components/Tabs/index.js";
import { Card as PortfolioCard } from "../components/Card/PortfolioCard.js";

const Container = tw(
	ContainerBase
)`h-screen lg:min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white w-full lg:w-auto flex flex-col lg:flex-row justify-center flex-1 relative`;
const MainContent = tw.div`flex-1 p-4 pt-0 lg:px-12 lg:pb-8 order-first lg:order-last overflow-y-scroll`;
const Grid = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4`;
export default ({
	headingText = "Auto Invest Portfolios",
	tabItems = [
		{
			tabTitle: "All portfolios",
			content: "",
		},
		{
			tabTitle: "My portfolios",
			content: "",
		},
	],
}) => {
	// const EmptyPortfolioList;
	return (
		<Container>
			<Content>
				<Sidebar />
				<MainContent>
					<Header
						pageUserLog="false"
						pageType="main"
						headingText={headingText}
						headingAccountText="My Account"
						headingUserAvatar="https://ui-avatars.com/api/?name=xavier+trevor&background=fdb04b&rounded=true&bold=true"
						headingHasNotif="true"
						headingHasSearch="true"
					/>
					<TabBox tabItems={tabItems} />
					<Grid>
						<PortfolioCard />
					</Grid>
				</MainContent>
			</Content>
		</Container>
	);
};