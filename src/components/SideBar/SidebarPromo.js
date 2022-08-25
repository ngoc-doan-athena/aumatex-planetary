import React from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";

import premiumImgSrc from "../../images/xtrading-banner-premium.svg";

const PremiumImg = tw.img`mx-auto w-full`;
const SidebarPromoBox = tw.div`mt-auto`;

const SidebarPromo = () => {
	return (
		<SidebarPromoBox className="sidebar__promo" tw="mt-auto">
			<Link to="/promotion" target="_blank">
				{" "}
				{/*TODO: dummy link*/}
				<PremiumImg
					src={premiumImgSrc}
					alt="Unlock more bots, trade easier! Get PRO now!"
				/>
			</Link>
		</SidebarPromoBox>
	);
};

export default SidebarPromo;