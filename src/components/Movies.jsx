import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import "./Movies.css";
import { isEmail, isNotEmpty } from "../util/Validation";

const genreOptions = [
    "Drama",
    "Action",
    "Animation",
    "Comedy",
    "Sci Fi",
    "Historical",
    "Horror",
  ];

const DEFAULT_GENRE = genreOptions[0];

export default function Movies({ onMoviesAdded }) {

  const [inputValues, setInputValues] = useState({
    movieTitle: "",
    releaseDate: "",
    movieRating: "",
    genre: DEFAULT_GENRE,
    studioEmail: "",
  });

  const [didTouch, setDidTouch] = useState({
    movieTitle: false,
    releaseDate: false,
    movieRating: false,
    genre: true,
    studioEmail: false,
  });

  const emailIsInvalid =
  didTouch.studioEmail && !isEmail(inputValues.studioEmail) 

  const movieTitleIsInvalid = 
  didTouch.movieTitle && !isNotEmpty(inputValues.movieTitle);

  const releaseDateIsInvalid =
  didTouch.releaseDate && !isNotEmpty(inputValues.releaseDate);

  const movieRatingIsInvalid =
    didTouch.movieRating && !isNotEmpty(inputValues.movieRating);

  const isInputInvalid =
    !isEmail(inputValues.studioEmail) ||
    !isNotEmpty(inputValues.movieTitle) ||
    !isNotEmpty(inputValues.releaseDate) ||
    !isNotEmpty(inputValues.movieRating);

  function handleSubmit(event) {
    event.preventDefault();

    if (isInputInvalid) {
      return;
    }

    onMoviesAdded(inputValues);

    setInputValues({
      movieTitle: "",
      releaseDate: "",
      movieRating: "",
      genre: DEFAULT_GENRE,
      studioEmail: "",
    });

    setDidTouch({
      movieTitle: false,
      releaseDate: false,
      movieRating: false,
      genre: true,
      studioEmail: false,
    });
  }

  function handleInputBlur(identifier) {
    setDidTouch((prevTouch) => ({
      ...prevTouch,
      [identifier]: true,
    }));
  }

  function handleInputChange(identifier, event) {
    setInputValues((prevInputs) => ({
      ...prevInputs,
      [identifier]: event.target.value,
    }));
    setDidTouch((prevTouch) => ({
      ...prevTouch,
      [identifier]: true,
    }));
  }

  return (
    <form id="movie-form" onSubmit={handleSubmit}>
      <Input
        id="movie-title"
        label="Movie Title:"
        type="text"
        value={inputValues.movieTitle}
        onBlur={() => handleInputBlur("movieTitle")}
        onChange={(event) => handleInputChange("movieTitle", event)}
        error={movieTitleIsInvalid && "Please enter a movie Title."}
      />
      <Input
        id="release-date"
        label="Release Date:"
        type="date"
        value={inputValues.releaseDate}
        onBlur={() => handleInputBlur("releaseDate")}
        onChange={(event) => {
          handleInputChange("releaseDate", event);
        }}
        error={releaseDateIsInvalid && "Please enter a release date."}
      />
      <Input
        id="movie-rating"
        label="Movie Rating:"
        type="number"
        min="1"
        max="10"
        step="0.1"
        value={inputValues.movieRating}
        onBlur={() => handleInputBlur("movieRating")}
        onChange={(event) => handleInputChange("movieRating", event)}
        error={movieRatingIsInvalid && "Please enter a rating."}
      />
      <Select
        id="genre"
        label="Genre:"
        options={genreOptions}
        value={inputValues.genre}
        onChange={(event) => handleInputChange("genre", event)}
      />
      <Input
        id="studio-email"
        label="Studio Email:"
        type="email"
        value={inputValues.studioEmail}
        onBlur={() => handleInputBlur("studioEmail")}
        onChange={(event) => handleInputChange("studioEmail", event)}
        error={emailIsInvalid && "Please enter a valid email."}
      />
      <div className="form-actions">
        <button type="submit" disabled={isInputInvalid}>
          {" "}
          Save{" "}
        </button>
      </div>
    </form>
  );
}
