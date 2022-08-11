import React from "react";
import "../src/index.css";
import tw from "twin.macro";

import { css } from "styled-components/macro"; //eslint-disable-line

import MyExchangesPage from "./pages/MyExchanges.js";
import MyPortfolioPage from "./pages/MyPortfolio.js";
import MarketPage from "./pages/Market.js";
import BotsPage from "./pages/Bots.js";
import LoginPage from "./pages/Login.js";
import ForgotPasswordPage from "./pages/authentication/login/ForgotPassword.js";
import RegisterCompletePage from "./pages/authentication/signup/Complete.js";
import SignupPage from "./pages/Signup.js";
import MainLandingPage from "./MainLandingPage.js";

// import component page
// import ComponentPage from "../src/ComponentPage.js";

import {
	useParams, //eslint-disable-line
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<MainLandingPage />} />
				<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/forgotpassword" element={<ForgotPasswordPage />} />
				<Route exact path="/register-completed" element={<RegisterCompletePage />} />
				<Route exact path="/signup" element={<SignupPage />} />
				<Route exact path="/myexchanges" element={<MyExchangesPage />} />
				<Route exact path="/strategies/myportfolio" element={<MyPortfolioPage />} />
				<Route exact path="/market" element={<MarketPage />} />
				<Route exact path="/bots" element={<BotsPage />} />
			</Routes>
		</Router>
	);
}