import React from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";

const NotifWrap = tw.div`relative inline-block align-middle cursor-pointer`;
const NotifButton = tw.button`bg-transparent border-none p-3 text-center text-gray-900`;
const NotifDot = tw.span`block w-[5px] h-[5px] bg-state-danger rounded-full absolute right-[0.75rem] top-[0.75rem]`;

const HeaderNotif = ({hasNotif}) => {
	return (
		<NotifWrap >
			<NotifButton type="button">
				<Icon icon="bell" stroke="currentColor" fill="none" />
				{hasNotif === "true" && (
					<NotifDot />
				)}
			</NotifButton>
		</NotifWrap>
	)
};

export default HeaderNotif;