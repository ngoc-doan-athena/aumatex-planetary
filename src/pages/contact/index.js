import React from "react";
import { Outlet } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container as ContainerBase } from "../../components/Layouts.js";
import Sidebar from "../../components/SideBar/index.js";

const Container = tw(
	ContainerBase
)`min-h-screen font-medium flex m-0 bg-gray-100`;

export default () => {
	return (
		<Container>
			<Sidebar />
			<Outlet />
		</Container>
	);
};