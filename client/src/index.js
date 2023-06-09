import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConciousProvider } from './context'
import { ThirdwebProvider } from "@thirdweb-dev/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={""}>
      <ConciousProvider>
        <App />
      </ConciousProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
