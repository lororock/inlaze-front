import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getCredits } from "../services/getData";

function Cast({ id }) {
  const [creditsData, setCreditsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getCredits(id);
        setCreditsData(data);
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

  if (!creditsData) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="flex">
      <main className="w-3/4 p-4 text-white space-y-8 bg-[#424242]">
        <div className="pb-20">
          <h2 className="text-4xl mb-4 font-bold text-white">CAST</h2>
          <div className="flex flex-wrap justify-between  gap-4">
            {creditsData.cast.slice(0, 7).map((cast, index) => {
              return (
                <div key={index}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                    alt=""
                    className="h-40 w-40 rounded-lg"
                  />
                  <h3>{cast.name}</h3>
                  <h3>{cast.character}</h3>
                  <h3>{cast.known_for_department}</h3>
                </div>
              );
            })}
          </div>
          <h2 className="text-4xl mb-4 font-bold text-white mt-20">
            Plot summary
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            illo reprehenderit eum? Voluptate fugiat molestias necessitatibus,
            laborum eaque ut dignissimos iure voluptatibus tempore accusantium
            eligendi beatae, numquam blanditiis quae, harum ea dolorem quaerat
            suscipit earum odio nisi ipsam! Eveniet porro dolor in qui incidunt
            maiores nostrum, dolores dicta, minus harum distinctio facilis culpa
            officia quia ipsam velit aliquid. Minus quae ullam id autem
            voluptate tenetur consequuntur aperiam rerum voluptatum neque,
            corrupti ipsa eum reiciendis quibusdam magni repudiandae dolor quos
            laudantium nostrum provident similique laborum? Quos sapiente velit
            ipsum, autem, iusto eveniet similique minus neque, voluptatum nisi
            illum totam. Aliquid porro minima asperiores et. Rem neque ducimus,
            atque placeat explicabo facilis tempora harum ut excepturi quod eos
            maiores inventore veniam esse exercitationem accusantium quasi
            itaque velit quam. Officiis quaerat unde debitis.
          </p>
        </div>
      </main>
      <aside className="text-white w-1/4 p-4 bg-[#303030] h-auto">
        {creditsData.crew.slice(0, 6).map((cast, index) => {
          return (
            <div key={index} className="mb-5">
              <h3>{cast.job}:</h3>
              <h4 className="text-sm text-gray-400">{cast.name}</h4>
              <h4 className="text-sm text-gray-400">
                {cast.known_for_department}
              </h4>
            </div>
          );
        })}
      </aside>
    </div>
  );
}
Cast.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Cast;
