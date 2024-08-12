import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import Pelicula from "./pages/Pelicula";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pelicula/:id" element={<Pelicula />} />
      </Routes>
    </Router>
  );
};

export default App;
