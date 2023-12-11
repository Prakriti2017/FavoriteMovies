import { useState } from "react";

import Movies from "./components/Movies";
import DisplayMovies from "./components/DisplayMovies";

function App() {
  const [moviesInfo, setMovieInfo] = useState([]);

  function handleMoviesAdded(movieInfo) {
    setMovieInfo((prevInfo) => {
      const newMovieInfo = {
        movieId: Math.random(),
        ...movieInfo,
      };
      return [...prevInfo, newMovieInfo];
    });
  }

  return (
    <>
      <Movies onMoviesAdded={handleMoviesAdded} />
      <DisplayMovies moviesInfo={moviesInfo} />
    </>
  );
}

export default App;
