import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx"; 
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import About from "./pages/About.jsx";
import "./index.css";
import { StrictMode } from "react";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>
);
