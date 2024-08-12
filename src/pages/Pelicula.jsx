import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/getData";
import PeliculaBanner from "../components/PeliculaBanner";

function Pelicula() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getMovie(id);
        setMovieData(data);
        console.log(data);
      } catch (error) {
        console.error("Error al obtener los datos de la película:", error);
        setError(error);
      }
    };

    fetchMovieData();
  }, [id]);
  if (error) {
    return <div>Error al cargar los datos de la película.</div>;
  }

  if (!movieData) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <PeliculaBanner id={id} />
    </>
  );
}

export default Pelicula;
