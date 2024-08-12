import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/getData";

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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold text-blue-500">
            Hello, Tailwind CSS in React!
          </h1>
        </div>
      </>
    );
  }
  
  export default Pelicula;
  