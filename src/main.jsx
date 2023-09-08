import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-c0h3mgq73t47bw5k.us.auth0.com"
    clientId="6QyAY75y3YEf39M6QVOTodgEwlnvcneJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
      <App />
  </BrowserRouter>
   </Auth0Provider>,
);
