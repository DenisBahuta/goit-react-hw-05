import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
// import css from './App.css';

import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
              <Route path='cast' element={<MovieCast />} />
              <Route path='reviews' element={<MovieReviews />} />
            </Route>
            <Route path='*' element={<NotFoundPage to='/' replace />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
