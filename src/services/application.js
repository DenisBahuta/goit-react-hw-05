import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "b53f881ee0d71e8143f1e1c4cce07062";

// мой токен
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTNmODgxZWUwZDcxZTgxNDNmMWUxYzRjY2UwNzA2MiIsInN1YiI6IjY1ZjU0NDExZTAzOWYxMDE2NDAyZGIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XROtPY2StBOw7IGSIYbHxGdsP7kJCi9LqL82dygFQcs";

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

// Trending movies

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?language=en-US&api_key=${API_KEY}`,
    options
  );
  return data;
};

// Search movie

export const getSearchMovie = async (query) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&api_key=${API_KEY}`,
    options
  );
  return data;
};

// Movie details

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
    options
  );
  return data;
};

// Movie credits

export const getMovieCredits = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`,
    options
  );
  const actingCast = data.cast.filter(
    (actor) => actor.known_for_department === "Acting"
  );
  return actingCast;
};

// Movie reviews

export const getMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`,
    options
  );
  return data;
};

export const getImage = (image) => {
  if (!image || image === null || image === "") {
    return "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=1800";
  }
  return `https://image.tmdb.org/t/p/w500${image}`;
};
