import { Link, useLocation } from "react-router-dom";
import css from "./ProductList.module.css";

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      {movies.map((movie) => (
        <div key={movie.id} className={css.cardWrapper}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <img src='https://via.placeholder.com/200x100' alt='' />
            <h3 className={css.movieName}>{movie.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
