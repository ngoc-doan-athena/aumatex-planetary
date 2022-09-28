import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";
import {
	InputBase as InputSearch,
	InputTextGroup,
	InputButton as InputSearchButton,
} from "../Input/index.js";

const HeaderSearchWrap = tw.div`relative ml-2 max-w-[370px] w-[50px] focus:w-auto`;
const Heading = tw.h2`m-0 inline-block align-middle`;
const InputBase = tw(InputSearch)`bg-transparent focus:bg-white border-transparent focus:border-white`;
const InputButton = tw(InputSearchButton)`mt-0 text-gray-900`;

const HeaderSearch = () => {
	return (
		<HeaderSearchWrap>
			<InputTextGroup className="input-group">
				<InputBase
					type="text"
					id="globalSearch"
					name="globalSearch"
					value=""
					placeholder=""
				/>
				<InputButton type="button">
					<Icon icon="search" />
				</InputButton>
			</InputTextGroup>
		</HeaderSearchWrap>
	);
};

export default HeaderSearch;