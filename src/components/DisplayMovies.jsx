import './DisplayMovies.css'

export default function DisplayMovies({ moviesInfo }) {
  return (
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
            <td>{movie.releaseDate}</td>
            <td>{movie.movieRating}</td>
            <td>{movie.genre}</td>
            <td>{movie.studioEmail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
