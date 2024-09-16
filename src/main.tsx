import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "../src/routes/Router";
import { AuthProvider } from "./auth/Auth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
