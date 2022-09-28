import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-next-line

const TabWrapper = tw.div`relative`;
const TabSwitch = tw.div`w-full max-w-sm flex md:w-auto bg-white dark:bg-gray-black rounded-md p-2`;
const TabSwitchButton = styled.button`
	${tw`w-1/2 p-2 rounded-md focus:outline-none font-medium text-gray-500 bg-transparent border-0 transition duration-300 ease-in-out last:ml-2`}
	${(props) =>
		props.active &&
		tw`bg-gray-700/15 text-primary-900 font-bold`}
`;
const TabContainer = tw.div`relative`;
const Tab = styled.div`
	${tw`relative hidden`}
	${(props) => props.active && tw`block`}
`;

export const TabBox = ({ tabItems }) => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	return (
		<TabWrapper className="tab-box">
			<TabSwitch>
				{tabItems.map((item, index) => (
					<TabSwitchButton
						active={activeTabIndex === index}
						key={index}
						onClick={() => setActiveTabIndex(index)}
					>
						{item.tabTitle}
					</TabSwitchButton>
				))}
			</TabSwitch>
			<TabContainer>
				{tabItems.map((item, index) => (
					<Tab key={index} active={activeTabIndex === index}>
						{item.content}
					</Tab>
				))}
			</TabContainer>
		</TabWrapper>
	);
};