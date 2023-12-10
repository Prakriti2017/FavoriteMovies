import { useRef } from "react";

import "./Movies.css"

export default function Movies({ onMoviesAdded }) {

    const genreOptions = [
        {
            label: 'Drama',
            value: 'Drama'
        },
        {
            label: 'Action',
            value: 'Action'
        },
        {
            label: 'Animation',
            value: 'Animation'
        },
        {
            label: 'Comedy',
            value: 'Comedy'
        },
        {
            label: 'Sci Fi',
            value: 'Scie Fi'
        },
        {
            label: 'Historical',
            value: 'Historical'
        },
        {
            label: 'Horror',
            value: 'Horror'
        }

    ];

    const movieTitle = useRef()
    const releaseDate = useRef()
    const movieRating = useRef()
    const genre = useRef()
    const studioEmail = useRef()


    function handleSave() {
        const enteredMovieTitle = movieTitle.current.value
        const enteredReleaseDate = releaseDate.current.value
        const enteredMovieRating = movieRating.current.value
        const enteredGenre = genre.current.value
        const enteredStudioEmail = studioEmail.current.value

        onMoviesAdded(
            {
                enteredMovieTitle: enteredMovieTitle,
                enteredMovieRating: enteredMovieRating,
                enteredReleaseDate: enteredReleaseDate,
                enteredGenre: enteredGenre,
                enteredStudioEmail: enteredStudioEmail
            }
        )
    }

    return (
        <div id="movie-box">
            <form id="movie-form" onSubmit={(e) => {
                e.preventDefault()
                handleSave()
            }}>
                <label>Movie Title:</label>
                <input ref={movieTitle} type="text" />
                <label>Release Date:</label>
                <input ref={releaseDate} type="date" />
                <label>Movie Rating:</label>
                <input ref={movieRating} type="number" min="1" max="10" />
                <label>Genre:</label>
                <select ref={genre}>
                    {
                        genreOptions.map((genre)=>(
                            <option value={genre.value}>{genre.label}</option>
                        ))
                    }
                </select>
                <label>Studio Email:</label>
                <input ref={studioEmail} type="email" />
                <button type="submit"> Save </button>
            </form>
        </div>
    )
}