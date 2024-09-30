// index.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // For React 18
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css"; // Ensure this line imports styles.css
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
