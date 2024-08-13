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
          await postConfirmToken(token);
        } catch (error) {
          return error
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
