import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { postConfirmToken } from "../services/userAuth.js";

import MainBanner from "../components/MainBanner.jsx";
import Categorias from "../components/categorias.jsx";

function Index() {
  const location = useLocation();
  const [confirmToken, setConfirmToken] = useState(null);

  useEffect(() => {
    const path = location.search;
    const token = path.substring("/verify/".length);

    localStorage.setItem("authToken", token);
    const fetchMovieData = async () => {
      try {
        const data = await postConfirmToken(token);
        setConfirmToken(data);
        console.log(confirmToken);
      } catch (error) {
        console.error("Error al obtener los datos de la película:", error);
      }
    };

    fetchMovieData();
  });
  return (
    <>
      <MainBanner />
      <Categorias />
    </>
  );
}

export default Index;
