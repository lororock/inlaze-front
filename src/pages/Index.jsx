import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { postConfirmToken } from "../services/userAuth.js";

import MainBanner from "../components/MainBanner.jsx";
import Categorias from "../components/categorias.jsx";

function Index() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token"); // Ajusta esto según cómo esté estructurado el URL
  
    if (token) {
      localStorage.setItem("authToken", token);
      const fetchMovieData = async () => {
        try {
          const data = await postConfirmToken(token);
          console.log(data);
        } catch (error) {
          console.error("Error al obtener los datos de la película:", error);
        }
      };
  
      fetchMovieData();
    }
  }, [location.search]);
  return (
    <>
      <MainBanner />
      <Categorias />
    </>
  );
}

export default Index;
