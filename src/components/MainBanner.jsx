import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getMovies } from "../services/getData";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

function MainBanner() {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const getStrokeDashoffset = (percentage) => {
    return circumference - (percentage / 100) * circumference;
  };

  const getColor = (percentage) => {
    if (percentage >= 75) return "green";
    if (percentage >= 40) return "orange";
    return "red";
  };

  const getDarkColor = (color) => {
    switch (color) {
      case "green":
        return "#004d00";
      case "orange":
        return "#cc6600";
      case "red":
        return "#660000";
      default:
        return "gray";
    }
  };

  const [moviesData, setMoviesData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getMovies();
        setMoviesData(data);
      } catch (error) {
        console.error("Error al obtener los datos de la película:", error);
        setError(error);
      }
    };

    fetchMovieData();
  }, []);

  if (error) {
    return <div>Error al cargar los datos de la película.</div>;
  }

  if (!moviesData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="bg-black">
      <Swiper
        spaceBetween={30}
        pagination={{}}
        modules={[Pagination]}
        className="mySwiper"
      >
        {moviesData.results.slice(0, 6).map((movie, index) => {
          const percentage = Math.round(movie.vote_average * 10);
          const color = getColor(percentage);
          const darkColor = getDarkColor(color);

          return (
            <SwiperSlide key={index}>
              <section className="overflow-hidden h-[660px] bg-cover bg-top bg-no-repeat">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={`Image ${movie.title}`}
                  className="w-full h-full object-cover"
                />
                <div className="bg-black/30 h-full">
                  <div className="absolute bottom-0 left-0 w-full pt-4 flex justify-center lg:justify-around items-end bg-gradient-to-b from-transparent to-black">
                    <div>
                      <div className="w-2/4">
                        <div className="ltr:sm:text-left rtl:sm:text-right">
                          <h2 className="hidden max-w-lg text-white/90 md:mt-6 lg:block md:leading-relaxed lg:text-6xl mb-6">
                            {movie.title}
                          </h2>
                        </div>
                        <p className="hidden text-white text-xl mb-8 lg:block">
                          {movie.overview}
                        </p>
                        <div className="hidden lg:flex lg:justify-around">
                          <button className="text-white hover:text-yellow-400 cursor-pointer">
                            Trama
                          </button>
                          <button className="text-white hover:text-yellow-400 cursor-pointer">
                            Cast
                          </button>
                          <button className="text-white hover:text-yellow-400 cursor-pointer">
                            Gallery
                          </button>
                          <button className="text-white hover:text-yellow-400 cursor-pointer">
                            Info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mx-5 mb-10 text-center lg:mb-0">
                      <div className="flex items-center justify-center mb-8 cursor-default">
                        <svg
                          width="120"
                          height="120"
                          viewBox="0 0 120 120"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="60"
                            cy="60"
                            r={radius}
                            stroke={darkColor}
                            strokeWidth="5"
                            fill="none"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r={radius}
                            stroke={color}
                            strokeWidth="5"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={getStrokeDashoffset(percentage)}
                            strokeLinecap="round"
                            transform="rotate(-90 60 60)"
                          />
                          <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dy=".3em"
                            className="text-3xl font-bold"
                            fill="white"
                          >
                            {percentage}%
                          </text>
                        </svg>
                      </div>

                      <div className="flex space-x-16">
                        <svg
                          className="cursor-pointer"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 21.5L10.55 20.2C8.86667 18.6833 7.475 17.375 6.375 16.275C5.275 15.175 4.4 14.1917 3.75 13.325C3.1 12.4417 2.64167 11.6333 2.375 10.9C2.125 10.1667 2 9.41667 2 8.65C2 7.08334 2.525 5.775 3.575 4.725C4.625 3.675 5.93333 3.15 7.5 3.15C8.36667 3.15 9.19167 3.33333 9.975 3.7C10.7583 4.06667 11.4333 4.58334 12 5.25C12.5667 4.58334 13.2417 4.06667 14.025 3.7C14.8083 3.33333 15.6333 3.15 16.5 3.15C18.0667 3.15 19.375 3.675 20.425 4.725C21.475 5.775 22 7.08334 22 8.65C22 9.41667 21.8667 10.1667 21.6 10.9C21.35 11.6333 20.9 12.4417 20.25 13.325C19.6 14.1917 18.725 15.175 17.625 16.275C16.525 17.375 15.1333 18.6833 13.45 20.2L12 21.5ZM12 18.8C13.6 17.3667 14.9167 16.1417 15.95 15.125C16.9833 14.0917 17.8 13.2 18.4 12.45C19 11.6833 19.4167 11.0083 19.65 10.425C19.8833 9.825 20 9.23334 20 8.65C20 7.65 19.6667 6.81667 19 6.15C18.3333 5.48334 17.5 5.15 16.5 5.15C15.7167 5.15 14.9917 5.375 14.325 5.825C13.6583 6.25834 13.2 6.81667 12.95 7.5H11.05C10.8 6.81667 10.3417 6.25834 9.675 5.825C9.00833 5.375 8.28333 5.15 7.5 5.15C6.5 5.15 5.66667 5.48334 5 6.15C4.33333 6.81667 4 7.65 4 8.65C4 9.23334 4.11667 9.825 4.35 10.425C4.58333 11.0083 5 11.6833 5.6 12.45C6.2 13.2 7.01667 14.0917 8.05 15.125C9.08333 16.1417 10.4 17.3667 12 18.8Z"
                            fill="#F6F6F6"
                          />
                        </svg>

                        <svg
                          className="cursor-pointer"
                          width="29"
                          height="29"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.20837 23.875V7.20833C7.20837 6.63542 7.41237 6.14497 7.82035 5.73698C8.22834 5.32899 8.71879 5.125 9.29171 5.125H19.7084C20.2813 5.125 20.7717 5.32899 21.1797 5.73698C21.5877 6.14497 21.7917 6.63542 21.7917 7.20833V23.875L14.5 20.75L7.20837 23.875Z"
                            fill="#F6F6F6"
                          />
                        </svg>

                        <svg
                          className="cursor-pointer"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 22.5C17.1667 22.5 16.4583 22.2083 15.875 21.625C15.2917 21.0417 15 20.3333 15 19.5C15 19.3833 15.0083 19.2625 15.025 19.1375C15.0417 19.0125 15.0667 18.9 15.1 18.8L8.05 14.7C7.76667 14.95 7.45 15.1458 7.1 15.2875C6.75 15.4292 6.38333 15.5 6 15.5C5.16667 15.5 4.45833 15.2083 3.875 14.625C3.29167 14.0417 3 13.3333 3 12.5C3 11.6667 3.29167 10.9583 3.875 10.375C4.45833 9.79167 5.16667 9.5 6 9.5C6.38333 9.5 6.75 9.57083 7.1 9.7125C7.45 9.85417 7.76667 10.05 8.05 10.3L15.1 6.2C15.0667 6.1 15.0417 5.9875 15.025 5.8625C15.0083 5.7375 15 5.61667 15 5.5C15 4.66667 15.2917 3.95833 15.875 3.375C16.4583 2.79167 17.1667 2.5 18 2.5C18.8333 2.5 19.5417 2.79167 20.125 3.375C20.7083 3.95833 21 4.66667 21 5.5C21 6.33333 20.7083 7.04167 20.125 7.625C19.5417 8.20833 18.8333 8.5 18 8.5C17.6167 8.5 17.25 8.42917 16.9 8.2875C16.55 8.14583 16.2333 7.95 15.95 7.7L8.9 11.8C8.93333 11.9 8.95833 12.0125 8.975 12.1375C8.99167 12.2625 9 12.3833 9 12.5C9 12.6167 8.99167 12.7375 8.975 12.8625C8.95833 12.9875 8.93333 13.1 8.9 13.2L15.95 17.3C16.2333 17.05 16.55 16.8542 16.9 16.7125C17.25 16.5708 17.6167 16.5 18 16.5C18.8333 16.5 19.5417 16.7917 20.125 17.375C20.7083 17.9583 21 18.6667 21 19.5C21 20.3333 20.7083 21.0417 20.125 21.625C19.5417 22.2083 18.8333 22.5 18 22.5ZM18 6.5C18.2833 6.5 18.5208 6.40417 18.7125 6.2125C18.9042 6.02083 19 5.78333 19 5.5C19 5.21667 18.9042 4.97917 18.7125 4.7875C18.5208 4.59583 18.2833 4.5 18 4.5C17.7167 4.5 17.4792 4.59583 17.2875 4.7875C17.0958 4.97917 17 5.21667 17 5.5C17 5.78333 17.0958 6.02083 17.2875 6.2125C17.4792 6.40417 17.7167 6.5 18 6.5ZM6 13.5C6.28333 13.5 6.52083 13.4042 6.7125 13.2125C6.90417 13.0208 7 12.7833 7 12.5C7 12.2167 6.90417 11.9792 6.7125 11.7875C6.52083 11.5958 6.28333 11.5 6 11.5C5.71667 11.5 5.47917 11.5958 5.2875 11.7875C5.09583 11.9792 5 12.2167 5 12.5C5 12.7833 5.09583 13.0208 5.2875 13.2125C5.47917 13.4042 5.71667 13.5 6 13.5ZM18 20.5C18.2833 20.5 18.5208 20.4042 18.7125 20.2125C18.9042 20.0208 19 19.7833 19 19.5C19 19.2167 18.9042 18.9792 18.7125 18.7875C18.5208 18.5958 18.2833 18.5 18 18.5C17.7167 18.5 17.4792 18.5958 17.2875 18.7875C17.0958 18.9792 17 19.2167 17 19.5C17 19.7833 17.0958 20.0208 17.2875 20.2125C17.4792 20.4042 17.7167 20.5 18 20.5Z"
                            fill="#F6F6F6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-10 w-full pt-4 flex justify-center lg:hidden">
                    <div className="ltr:sm:text-left rtl:sm:text-right"></div>
                    <h2 className="max-w-lg text-white/90 truncate md:mt-6 lg:block md:leading-relaxed text-3xl mb-6">
                      {movie.title}
                    </h2>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="h-10 bg-black">s</div>
    </div>
  );
}

export default MainBanner;
