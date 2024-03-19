import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b53f881ee0d71e8143f1e1c4cce07062";

// мой токен
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTNmODgxZWUwZDcxZTgxNDNmMWUxYzRjY2UwNzA2MiIsInN1YiI6IjY1ZjU0NDExZTAzOWYxMDE2NDAyZGIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XROtPY2StBOw7IGSIYbHxGdsP7kJCi9LqL82dygFQcs";

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

export const getTrendingMovies = async (timeWindow) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/${timeWindow}?language=en-US&api_key=${API_KEY}`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Search movie

export const getSearchMovie = async (query, page) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}&api_key=${API_KEY}`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Movie details

export const getMovieDetails = async (movie_id) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movie_id}?language=en-US&api_key=${API_KEY}`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Movie credits

export const getMovieCredits = async (movie_id) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movie_id}/credits?language=en-US&api_key=${API_KEY}`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Movie reviews

export const getMovieReviews = async (movie_id) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movie_id}/reviews?language=en-US&page=1&api_key=${API_KEY}`,
      options
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
