import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { ThemeProvider } from './helpers/ThemeContext';
import Background from './helpers/Background';
import Toggle from './helpers/ThemeToggle';

import tw from "twin.macro";

const container = document.getElementById('root');
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
