import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImage } from "../../services/application";
import { getMovieReviews } from "../../services/application";
import css from "./MovieReviews.module.css";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await getMovieReviews(movieId);

        setMovieReviews(data.results);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <div className={css.mainReviews}>
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {!isLoading &&
          !isError &&
          (movieReviews.length ? (
            <ul className={css.reviewsList}>
              {movieReviews.map((review) => (
                <li className={css.reviewItem} key={review.id}>
                  <div className={css.reviewContent}>
                    <img
                      className={css.reviewImg}
                      src={getImage(review.author_details.avatar_path)}
                      width='120'
                      alt={review.author}
                    />
                    <h3 className={css.reviewAuthor}>{review.author}</h3>
                  </div>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={css.infoMessage}>
              We don`t have any reviews for this movie.
            </p>
          ))}
      </div>
    </div>
  );
};

export default MovieReviews;
