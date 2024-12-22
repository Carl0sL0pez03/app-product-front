import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN_AUTH0!}
      clientId={process.env.REACT_APP_CLIENT_AUTH0!}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
