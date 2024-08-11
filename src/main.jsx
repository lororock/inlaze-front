import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import MainBanner from "./components/MainBanner.jsx";
import Categorias from "./components/categorias.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainBanner />
    <Categorias />
  </StrictMode>
);
