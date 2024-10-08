import { useEffect, useState } from "react";
import { getGenres } from "../services/getData";
import PeliculaNotFind from "./PeliculaNotFind";
import Loaging from "./Loaging";

function Filters() {
  const [genresData, setGenresData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenresData = async () => {
      try {
        const genres = await getGenres();
        setGenresData(genres);
      } catch (error) {
        setError(error);
      }
    };

    fetchGenresData();
  }, []);
  if (error) {
    return <PeliculaNotFind />;
  }

  if (!genresData) {
    return <Loaging />;
  }
  return (
    <>
      <aside className="text-white w-full p-4 bg-[#303030] h-auto flex flex-wrap justify-between sm:block sm:w-1/4">
        <h2 className="font-bold mb-2">Search</h2>
        <div className="mb-4 w-full p-2 flex items-center justify-around rounded-t-md bg-[#1C1C1C] border-b-[1px] text-white">
          <input
            type="text"
            placeholder="Keywords"
            className="w-[90%] bg-[#1C1C1C]"
          ></input>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1644_1004)">
              <path
                d="M15.8048 14.862L11.8254 10.8827C12.9098 9.5564 13.443 7.86407 13.3147 6.15571C13.1863 4.44736 12.4062 2.85369 11.1358 1.70435C9.8654 0.555014 8.20183 -0.0620646 6.48919 -0.0192434C4.77656 0.0235778 3.1459 0.723023 1.93451 1.93442C0.723114 3.14581 0.0236694 4.77647 -0.0191518 6.4891C-0.0619731 8.20174 0.555106 9.86531 1.70445 11.1357C2.85379 12.4061 4.44745 13.1862 6.15581 13.3146C7.86416 13.4429 9.5565 12.9098 10.8828 11.8253L14.8621 15.8047C14.9878 15.9261 15.1562 15.9933 15.331 15.9918C15.5058 15.9903 15.673 15.9202 15.7966 15.7966C15.9203 15.6729 15.9904 15.5057 15.9919 15.3309C15.9934 15.1561 15.9262 14.9877 15.8048 14.862ZM6.66677 12C5.61193 12 4.58079 11.6872 3.70372 11.1012C2.82666 10.5151 2.14308 9.68219 1.73941 8.70765C1.33574 7.73311 1.23012 6.66076 1.43591 5.62619C1.6417 4.59163 2.14965 3.64132 2.89553 2.89544C3.64141 2.14956 4.59172 1.64161 5.62628 1.43582C6.66085 1.23003 7.7332 1.33565 8.70774 1.73932C9.68228 2.14298 10.5152 2.82657 11.1013 3.70363C11.6873 4.58069 12.0001 5.61184 12.0001 6.66667C11.9985 8.08067 11.4361 9.43631 10.4362 10.4362C9.4364 11.436 8.08077 11.9984 6.66677 12Z"
                fill="#F6F6F6"
              />
            </g>
            <defs>
              <clipPath id="clip0_1644_1004">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="mb-4 w-full">
          <h2 className="font-bold mb-2">Sort By</h2>
          <select className="w-full p-2 rounded bg-[#1C1C1C] text-white">
            <option selected disabled>
              Categories
            </option>
            <option>Title A-Z</option>
            <option>Popularity Ascending</option>
            <option>Popularity Descending</option>
            <option>Rating Ascending</option>
            <option>Rating Decending</option>
            <option>Rating Date Ascending</option>
            <option>Rating Date Decending</option>
          </select>
        </div>
        <div className="mb-4 w-full">
          <h2 className="font-bold mb-2">Genres</h2>
          <select className="w-full p-2 rounded bg-[#1C1C1C] text-white">
            <option value="28" selected disabled>
              ____________
            </option>
            {genresData.genres.map((genre, index) => {
              return (
                <option key={index} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full">
          <h2 className="font-bold mb-2">User Score</h2>
          <input
            type="range"
            min="0"
            max="10"
            className="w-full bg-[#1C1C1C] custom-range"
          ></input>
          <div className="flex justify-between text-xs text-white mt-1">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Filters;
