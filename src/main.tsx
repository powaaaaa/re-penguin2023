import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>TODOのなかまたち</title>
        <link rel="icon" type="image/png" href="./favicon.png"></link>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
