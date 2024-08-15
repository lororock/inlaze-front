import { useState, useEffect } from "react";
import { getPopulars } from "../services/getData";
import { getNowPlaying } from "../services/getData";
import { getUpComing } from "../services/getData";
import { getTopRated } from "../services/getData";

import Filters from "./Filters";
import Categoria from "./Categoria";
import Loaging from "./Loaging";
import PeliculaNotFind from "./PeliculaNotFind";

function Categorias() {
  const [popularsData, setPopularsData] = useState(null);
  const [playingsData, setPlayingsData] = useState(null);
  const [comingsData, setComingsData] = useState(null);
  const [ratedsData, setRatesData] = useState(null);
  const [isTokenPresent, setIsTokenPresent] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const token = localStorage.getItem("authToken");
      setIsTokenPresent(!!token);

      try {
        const populars = await getPopulars();
        const playing = await getNowPlaying();
        const coming = await getUpComing();
        const rated = await getTopRated();
        setPopularsData(populars);
        setPlayingsData(playing);
        setComingsData(coming);
        setRatesData(rated);
      } catch (error) {
        setError(error);
      }
    };

    fetchMoviesData();
  }, [setIsTokenPresent]);
  if (error) {
    return <PeliculaNotFind />;
  }

  if (!popularsData) {
    return <Loaging />;
  }
  return (
    <>
      <div className="block sm:flex bg-[#262626]">
        <Filters />
        <main className="w-full sm:w-3/4 p-4 text-white space-y-8 bg-[#424242]">
          <h2 className="text-2xl font-bold mb-4">Popular</h2>
          <Categoria moviesData={popularsData} />

          <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
          <Categoria moviesData={playingsData} />

          <h2 className="text-2xl font-bold mb-4">Upcoming</h2>
          <Categoria moviesData={comingsData} />

          <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
          <Categoria moviesData={ratedsData} />

          <h2 className="text-2xl font-bold mb-4">favorites</h2>
          {isTokenPresent ? (
            <>
              <Categoria moviesData={ratedsData} />
            </>
          ) : (
            <section>
              <div className="bg-[#1C1C1C] p-2 rounded min-h-96">
                <div className="rounded mb-2 w-full h-80 object-cover inset-0 flex items-center justify-center">
                  Iniciar sesión para ver favoritos
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}

export default Categorias;
