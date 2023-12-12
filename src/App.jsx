import { useState } from "react";

import MovieForm from "./components/MovieForm";
import DisplayMovies from "./components/DisplayMovies";

function App() {
  const [moviesInfo, setMoviesInfo] = useState([]);

  function handleMoviesAdded(movieInfo) {
    setMoviesInfo((prevInfo) => {
      const newMovieInfo = {
        movieId: Math.random(),
        ...movieInfo,
      };
      return [...prevInfo, newMovieInfo];
    });
  }

  return (
    <>
      <MovieForm onMoviesAdded={handleMoviesAdded} />
      <DisplayMovies moviesInfo={moviesInfo} />
    </>
  );
}

export default App;
