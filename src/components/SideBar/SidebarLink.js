import React from "react";
import { NavLink as SidebarLink } from "react-router-dom";
import PropTypes from "prop-types";

import tw from "twin.macro";

const NavLink = tw(SidebarLink)`flex items-center no-underline text-black block rounded-md p-3 text-gray-500 hover:text-primary-700 hover:bg-black dark:hover:bg-gray-dark hover:drop-shadow transition-all ease-in-out duration-150`;

class SidebarLink extends React.Component {
	render() {
		var isActive =
			this.context.router.route.location.pathname === this.props.to;
		var className = isActive ? "is-active" : "";

		return (
			<NavLink className={className} {...this.props}>
				{this.props.children}
			</NavLink>
		);
	}
}

SidebarLink.contextTypes = {
	router: PropTypes.object,
};

export default SidebarLink;