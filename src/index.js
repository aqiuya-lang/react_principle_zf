import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import NiceModal from "@ebay/nice-modal-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="divo">
    <NiceModal.Provider>
      <App />
    </NiceModal.Provider>
  </div>
);
