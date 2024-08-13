import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import MainBanner from "../components/MainBanner.jsx";
import Categorias from "../components/categorias.jsx";

function Index() {
  const location = useLocation();

  useEffect(() => {
    const path = location.search;
    const token = path.substring('/verify/'.length);

    if (token) {
      localStorage.setItem("authToken", token);
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
