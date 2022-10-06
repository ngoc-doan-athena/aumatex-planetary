import React, { useMemo } from "react";
import PropTypes from "prop-types";
import data from "cryptocurrency-icons/manifest.json";

import tw from "twin.macro";

const CoinIcon = tw.span`inline-block text-center rounded-full`;

// export const Coin = ({coinSvg, coinName, coinBg}) => {

// 	return (
// 		<CoinIcon style={backgroundColor:{coinBg}}>
// 			<img src={coinSvg} alt={coinName} />
// 		</CoinIcon>
// 	)
// };