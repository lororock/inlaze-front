import axiosInstance from "./axiosIntance";

export const getMovie = async (movieId) => {
  try {
    const response = await axiosInstance.get(`movie/${movieId}`);
    const movieData = response.data;
    return movieData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getCredits = async (movieId) => {
  try {
    const response = await axiosInstance.get(
      `movie/${movieId}/credits?language=en-US`
    );
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

export const getPopulars = async () => {
  try {
    const response = await axiosInstance.get(
      "movie/popular?language=en-US&page=1"
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const getNowPlaying = async () => {
  try {
    const response = await axiosInstance.get(
      "movie/now_playing?language=en-US&page=1"
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const getUpComing = async () => {
  try {
    const response = await axiosInstance.get(
      "movie/upcoming?language=en-US&page=1"
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const getTopRated = async () => {
  try {
    const response = await axiosInstance.get(
      "movie/top_rated?language=en-US&page=1"
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
    throw error;
  }
};
