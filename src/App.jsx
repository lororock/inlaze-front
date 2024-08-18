import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Index from "./pages/Index";
import Pelicula from "./pages/Pelicula";
import NotFound from "./pages/NotFound";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  const [reloadCategorias, setReloadCategorias] = useState(false);
  const handleReloadCategorias = () => {
    setReloadCategorias((prev) => !prev);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header onReloadCategorias={handleReloadCategorias} />
              <Index onReload={reloadCategorias} />
            </>
          }
        />
        <Route
          path="/pelicula/:id"
          element={
            <>
              <Header />
              <Pelicula />
            </>
          }
        />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
