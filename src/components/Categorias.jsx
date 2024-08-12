import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import Filters from "./Filters";
const percentage = 39;

function Categorias() {
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

  const color = getColor(percentage);
  const darkColor = getDarkColor(color);
  return (
    <>
      <div className="flex bg-[#262626]">
        <Filters />
        <main className="w-3/4 p-4 text-white space-y-8 bg-[#424242]">
          <h2 className="text-2xl font-bold mb-4">Popular</h2>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            pagination={{
            }}
            modules={[]}
            className="mySwiper"
          >
            <SwiperSlide>
              <section>
                <div className="bg-[#1C1C1C] p-2 rounded">
                  <img
                    src="https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
                    alt="Shrek 5"
                    className="rounded mb-2"
                  ></img>
                  <h3 className="text-lg">Shrek 5</h3>
                  <p className="text-gray-400">August 1, 2024</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-center cursor-default">
                      <svg
                        width="60"
                        height="60"
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
                    <div className="flex items-center space-x-2">
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
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section>
                <div className="bg-[#1C1C1C] p-2 rounded">
                  <img
                    src="https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
                    alt="Shrek 5"
                    className="rounded mb-2"
                  ></img>
                  <h3 className="text-lg">Shrek 5</h3>
                  <p className="text-gray-400">August 1, 2024</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-center cursor-default">
                      <svg
                        width="60"
                        height="60"
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
                    <div className="flex items-center space-x-2">
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
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide><SwiperSlide>
              <section>
                <div className="bg-[#1C1C1C] p-2 rounded">
                  <img
                    src="https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
                    alt="Shrek 5"
                    className="rounded mb-2"
                  ></img>
                  <h3 className="text-lg">Shrek 5</h3>
                  <p className="text-gray-400">August 1, 2024</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-center cursor-default">
                      <svg
                        width="60"
                        height="60"
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
                    <div className="flex items-center space-x-2">
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
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide><SwiperSlide>
              <section>
                <div className="bg-[#1C1C1C] p-2 rounded">
                  <img
                    src="https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
                    alt="Shrek 5"
                    className="rounded mb-2"
                  ></img>
                  <h3 className="text-lg">Shrek 5</h3>
                  <p className="text-gray-400">August 1, 2024</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-center cursor-default">
                      <svg
                        width="60"
                        height="60"
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
                    <div className="flex items-center space-x-2">
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
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide><SwiperSlide>
              <section>
                <div className="bg-[#1C1C1C] p-2 rounded">
                  <img
                    src="https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
                    alt="Shrek 5"
                    className="rounded mb-2"
                  ></img>
                  <h3 className="text-lg">Shrek 5</h3>
                  <p className="text-gray-400">August 1, 2024</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-center cursor-default">
                      <svg
                        width="60"
                        height="60"
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
                    <div className="flex items-center space-x-2">
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
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide><SwiperSlide>
              <section>
                <div className="bg-[#1C1C1C] p-2 rounded">
                  <img
                    src="https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
                    alt="Shrek 5"
                    className="rounded mb-2"
                  ></img>
                  <h3 className="text-lg">Shrek 5</h3>
                  <p className="text-gray-400">August 1, 2024</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-center cursor-default">
                      <svg
                        width="60"
                        height="60"
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
                    <div className="flex items-center space-x-2">
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
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide><SwiperSlide>
              <section>
                <div className="bg-[#1C1C1C] p-2 rounded">
                  <img
                    src="https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
                    alt="Shrek 5"
                    className="rounded mb-2"
                  ></img>
                  <h3 className="text-lg">Shrek 5</h3>
                  <p className="text-gray-400">August 1, 2024</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-center cursor-default">
                      <svg
                        width="60"
                        height="60"
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
                    <div className="flex items-center space-x-2">
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
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>

          <section>
            <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-800 p-2 rounded">
                <img
                  src="https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
                  alt="Lord of War"
                  className="rounded mb-2"
                ></img>
                <h3 className="text-lg">Lord of War</h3>
                <p className="text-gray-400">March 10, 2022</p>
                <div className="flex items-center justify-between mt-2">
                  <span>82%</span>
                  <div className="flex space-x-2">
                    <button className="bg-gray-700 p-1 rounded">❤️</button>
                    <button className="bg-gray-700 p-1 rounded">💾</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Upcoming</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-800 p-2 rounded">
                <img
                  src="oppenheimer.jpg"
                  alt="Oppenheimer"
                  className="rounded mb-2"
                ></img>
                <h3 className="text-lg">Oppenheimer</h3>
                <p className="text-gray-400">August 2, 2024</p>
                <div className="flex items-center justify-between mt-2">
                  <span>94%</span>
                  <div className="flex space-x-2">
                    <button className="bg-gray-700 p-1 rounded">❤️</button>
                    <button className="bg-gray-700 p-1 rounded">💾</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Categorias;
