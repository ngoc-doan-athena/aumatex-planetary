import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";

import premiumImgSrc from "../../images/xtrading-banner-premium.svg";

const PremiumImg = tw.img`hidden lg:block mx-auto w-full`;
const SidebarPromoBox = tw.div`mt-auto`;

const SidebarPromo = ({PremiumImgAlt = "Unlock more bots, trade easier! Get PRO now!"}) => {
	return (
		<SidebarPromoBox className="sidebar__promo" tw="mt-auto">
			<Link to="/promotion" target="_blank">
				{" "}
				{/*TODO: dummy link*/}
				<PremiumImg
					src={premiumImgSrc}
					alt={PremiumImgAlt}
				/>
			</Link>
		</SidebarPromoBox>
	);
};

export default SidebarPromo;