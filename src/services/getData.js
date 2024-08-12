import axiosInstance from "./axiosIntance";

const movieId = "106646";

export const getMovie = async () => {
  try {
    const response = await axiosInstance.get(`movie/${movieId}`);
    const movieData = response.data;
    return movieData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getMovies = async () => {
  try {
    const response = await axiosInstance.get(
      "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const getGenders = async () => {
  try {
    const response = await axiosInstance.get("genre/movie/list?language=en");
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Rechazar la promesa si ocurre un error
  }
};
