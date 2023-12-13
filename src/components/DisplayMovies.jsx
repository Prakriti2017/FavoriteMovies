import "./DisplayMovies.css";
import formatDate from "../util/formatDate";

export default function DisplayMovies({ moviesInfo }) {
  return (
    <>
    <hr></hr>
      <table className="movies-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>Genre</th>
            <th>Studio Email</th>
          </tr>
        </thead>
        <tbody>
          {moviesInfo.map((movie) => (
            <tr key={movie.movieId}>
              <td>{movie.movieTitle}</td>
              <td>{formatDate(movie.releaseDate)}</td>
              <td>{movie.movieRating}</td>
              <td>{movie.genre}</td>
              <td>{movie.studioEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
