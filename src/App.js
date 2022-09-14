import React from "react";
import {
	useParams, //eslint-disable-line
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import "../src/index.css";

import { css } from "styled-components/macro"; //eslint-disable-line

import MyExchangesPage from "./pages/MyExchanges.js";
import MyExchangesSettingPage from "./pages/myexchanges/MyExchangeSetting.js";
import MyExchangesCreatePage from "./pages/myexchanges/MyExchangeCreate.js";
import MyPortfolioPage from "./pages/MyPortfolio.js";
import MarketPage from "./pages/Market.js";
import BotsPage from "./pages/Bots.js";
import LoginPage from "./pages/Login.js";
import ForgotPasswordPage from "./pages/authentication/login/ForgotPassword.js";
import RenewPasswordPage from "./pages/authentication/login/RenewPassword.js";
import ChangedPasswordPage from "./pages/authentication/login/ChangedPassword.js";
import RegisterCompletePage from "./pages/authentication/signup/Complete.js";
import SignupPage from "./pages/Signup.js";
import MainLandingPage from "./MainLandingPage.js";
import ContactPage from "./pages/contact/index.js";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<MainLandingPage />} />
				<Route exact path="/login" element={<LoginPage />} />
				<Route exact path="/forgotpassword" element={<ForgotPasswordPage />} />
				<Route exact path="/renewpassword" element={<RenewPasswordPage />} />
				<Route exact path="/changedpassword" element={<ChangedPasswordPage />} />
				<Route exact path="/register-completed" element={<RegisterCompletePage />} />
				<Route exact path="/signup" element={<SignupPage />} />
				<Route exact path="/myexchanges" element={<MyExchangesPage />} />
				<Route exact path="/myexchanges/create" element={<MyExchangesCreatePage />} />
				<Route exact path="/myexchanges/setting/:id" element={<MyExchangesSettingPage />} />
				<Route exact path="/strategies/myportfolio" element={<MyPortfolioPage />} />
				<Route exact path="/market" element={<MarketPage />} />
				<Route exact path="/bots" element={<BotsPage />} />
				<Route exact path="/contact" element={<ContactPage />} />
			</Routes>
		</Router>
	);
}