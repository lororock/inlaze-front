import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { postConfirmToken } from "../services/userAuth.js";

import MainBanner from "../components/MainBanner.jsx";
import Categorias from "../components/Categorias.jsx";

function Index({ onReload }) {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token"); // Ajusta esto según cómo esté estructurado el URL

    if (token) {
      localStorage.setItem("authToken", token);
      const fetchTokenData = async () => {
        try {
          await postConfirmToken(token);
        } catch (error) {
          return error;
        }
      };

      fetchTokenData();
    }
  }, [location.search]);
  return (
    <>
      <MainBanner />
      <Categorias key={onReload} />
    </>
  );
}

Index.propTypes = {
  onReload: PropTypes.bool.isRequired,
};

export default Index;
