import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../services/getData";
import PeliculaBanner from "../components/PeliculaBanner";
import Cast from "../components/Cast";
import Recommnedations from "../components/Recommendations";
import PeliculaNotFind from "../components/PeliculaNotFind";
import Loaging from "../components/Loaging";

function Pelicula() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getMovie(id);
        setMovieData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovieData();
  }, [id]);
  if (error) {
    return <PeliculaNotFind />;
  }

  if (!movieData) {
    return <Loaging />;
  }

  return (
    <>
      <PeliculaBanner id={id} />
      <Cast id={id} />
      <Recommnedations id={id} />
    </>
  );
}

export default Pelicula;
