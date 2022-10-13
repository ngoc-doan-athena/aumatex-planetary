import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-next-line

import Icon from "../Icon/index.js";
import {
	InputBase as InputSearch,
	InputTextGroup,
	InputButton as InputSearchButton,
} from "../Input/index.js";

const HeaderSearchWrap = tw.div`relative ml-2 focus:w-auto`;
const Heading = tw.h2`m-0 inline-block align-middle`;
const InputBase = styled(
	InputSearch
)`
	${tw`bg-transparent border-gray-300 border border-solid border-gray-300 w-[50px]`}
	${(props) =>
		props.isFocus &&
		css`
			${tw`bg-white border-primary-500 w-[300px]`}
		`}
`;
const InputButton = tw(InputSearchButton)`mt-0 text-gray-900`;
const HeaderSearchBox = tw.div``;

const HeaderSearch = () => {
	const [stateIsFocus, setStateIsFocus] = useState(false);
	const [inputText, setInputText] = useState("");

	let inputHandler = (e) => {
		let lowerCase = e.target.value.toLowerCase();
		setInputText(lowerCase);
	};

	return (
		<HeaderSearchWrap>
			<InputTextGroup className="input-group">
				<InputBase
					type="text"
					id="globalSearch"
					name="globalSearch"
					value=""
					placeholder=""
					isFocus={stateIsFocus}
					onChange={inputHandler}
				/>
				<InputButton type="button" onClick={() => setStateIsFocus(!stateIsFocus)}>
					<Icon icon="search" />
				</InputButton>
			</InputTextGroup>
		</HeaderSearchWrap>
		// <SearchList input={inputText} />
	);
};

export default HeaderSearch;