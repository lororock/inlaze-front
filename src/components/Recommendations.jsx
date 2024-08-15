import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getRecommendations } from "../services/getData";
import Loaging from "./Loaging";
import PeliculaNotFind from "./PeliculaNotFind";

function Recommnedation({ id }) {
  const [recommendationData, setRecommendationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const data = await getRecommendations(id);
        setRecommendationData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchMoviesData();
  }, [id]);
  if (error) {
    return <PeliculaNotFind />
  }

  if (!recommendationData) {
    return <Loaging />
  }
  return (
    <>
      <section>
        <div className="bg-[#1C1C1C] p-2  min-h-96">
        <h2 className="text-4xl font-bold text-white my-5 truncate">Recommendations</h2>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              1: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1244: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {recommendationData.results.map((movie, index) => {
              return (
                <SwiperSlide key={index}>
                  <section>
                    <div className="bg-[#1C1C1C] p-2 rounded min-h-96">
                      <Link to={`/pelicula/${movie.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                          alt={`Image ${index}`}
                          className="rounded mb-2 w-full h-80 object-cover"
                        ></img>
                      </Link>

                      <h3 className="text-lg text-white truncate">
                        {movie.title}
                      </h3>
                      <p className="text-gray-400">{movie.release_date}</p>
                    </div>
                  </section>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
Recommnedation.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Recommnedation;
