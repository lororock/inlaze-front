import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { putFavorite } from "../services/userAuth";

import "swiper/css";

function Categoria({ moviesData }) {
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

  const addfavorite = async (id) => {
    try {
      const data = await putFavorite(id);
      console.log(data);
      
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
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
        {moviesData.results.map((movie, index) => {
          const percentage = Math.round(movie.vote_average * 10);
          const color = getColor(percentage);
          const darkColor = getDarkColor(color);

          return (
            <SwiperSlide key={index}>
              <section>
                <div className="bg-[#1C1C1C] p-2 rounded min-h-96">
                  <Link to={`/pelicula/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={`Image ${movie.title}`}
                      className="rounded mb-2 w-full h-80 object-cover"
                    ></img>
                  </Link>

                  <h3 className="text-lg truncate">{movie.title}</h3>
                  <p className="text-gray-400">{movie.release_date}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-center cursor-default">
                      <div className="flex flex-col items-center">
                        <h6 className="mb-1">Rating</h6>
                        <svg
                          width="40"
                          height="40"
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
                    </div>
                    <div className="flex flex-col items-center">
                      <h6 className="mb-1">Favorites</h6>
                      <svg
                        onClick={() => addfavorite(movie.id)}
                        width="40"
                        height="40"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.4375 9.17969C23.4375 16.0156 13.3018 21.5488 12.8701 21.7773C12.7563 21.8385 12.6292 21.8706 12.5 21.8706C12.3708 21.8706 12.2436 21.8385 12.1299 21.7773C11.6982 21.5488 1.5625 16.0156 1.5625 9.17969C1.56431 7.57444 2.20279 6.03546 3.33788 4.90038C4.47296 3.76529 6.01194 3.12681 7.61719 3.125C9.63379 3.125 11.3994 3.99219 12.5 5.45801C13.6006 3.99219 15.3662 3.125 17.3828 3.125C18.9881 3.12681 20.527 3.76529 21.6621 4.90038C22.7972 6.03546 23.4357 7.57444 23.4375 9.17969Z"
                          fill="#F6F6F6"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col items-center">
                      <h6 className="mb-1">Save</h6>

                      <svg
                        className="cursor-pointer text-center"
                        width="40"
                        height="40"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.20837 23.875V7.20833C7.20837 6.63542 7.41237 6.14497 7.82035 5.73698C8.22834 5.32899 8.71879 5.125 9.29171 5.125H19.7084C20.2813 5.125 20.7717 5.32899 21.1797 5.73698C21.5877 6.14497 21.7917 6.63542 21.7917 7.20833V23.875L14.5 20.75L7.20837 23.875Z"
                          fill="#F6F6F6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

Categoria.propTypes = {
  moviesData: PropTypes.array.isRequired,
};

export default Categoria;
