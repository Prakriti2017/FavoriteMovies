export default function DisplayMovies({ moviesInfo }) {
    return (
        <table>
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
                {
                    moviesInfo.map((movie) => (
                        <tr>
                            <td>{movie.enteredMovieTitle}</td>
                            <td>{movie.enteredReleaseDate}</td>
                            <td>{movie.enteredMovieRating}</td>
                            <td>{movie.enteredGenre}</td>
                            <td>{movie.enteredStudioEmail}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}