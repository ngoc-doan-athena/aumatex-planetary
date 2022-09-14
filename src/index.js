import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebaseConfig';
import App from "./App";
import { ThemeProvider } from "./helpers/ThemeContext";
import Background from "./helpers/Background";
import Toggle from "./helpers/ThemeToggle";

Modal.setAppElement("#root");

firebase.initializeApp(firebaseConfig);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<ThemeProvider>
			<Background>
				<Toggle />
				<App />
			</Background>
		</ThemeProvider>
	</React.StrictMode>
);