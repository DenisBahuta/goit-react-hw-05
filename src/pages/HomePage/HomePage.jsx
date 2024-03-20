import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  return (
    <main>
      <div>
        <h2>Trending today</h2>
        <MovieList />
      </div>
    </main>
  );
};

export default HomePage;
