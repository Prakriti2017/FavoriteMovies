import { useState } from "react"
import Input from "./Input"
import "./Movies.css"

export default function Movies({ onMoviesAdded }) {

    const genreOptions = ['Drama', 'Action', 'Animation', 'Comedy', 'Sci Fi', 'Historical', 'Horror']

    const [inputValue, setInputValue] = useState({
        movieTitle: '',
        releaseDate: '',
        movieRating: '',
        genre: '',
        studioEmail: ''
    })

    function handleInputChange(identifier, event) {
        setInputValue((prevInputs) => (
            {
                ...prevInputs,
                [identifier]: event.target.value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(inputValue)
    }

    return (
        <div id="movie-box">
            <form id="movie-form" onSubmit={handleSubmit}>
                <Input id="movie-title" label="Movie Title:" type="text" onChange={(event) => { handleInputChange('movieTitle', event) }} />
                <Input id="release-date" label="Release Date:" type="date" onChange={(event) => { handleInputChange('releaseDate', event) }} />
                <Input id="movie-rating" label="Movie Rating:" type="number" min={1} max={10} onChange={(event) => { handleInputChange('movieRating', event) }} />
                <label htmlFor="genre">Genre:</label>
                <select id="genre" onChange={(event) => { handleInputChange('genre', event) }}>
                    {
                        genreOptions.map((genre) => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))
                    }
                </select>
                <Input id="studio-email" label="Studio Email:" type="email" onChange={(event) => { handleInputChange('studioEmail', event) }} />
                <div className="form-actions">
                    <button type="submit"> Save </button>
                </div>
            </form>
        </div>
    )
}