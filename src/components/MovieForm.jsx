import Input from "./Input";
import Select from "./Select";
import useMovieForm from "../hooks/useMovieForm";
import "./MovieForm.css";
import { isEmail, isNotEmpty, isBetween } from "../util/validation.js";

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

export default function MovieForm({ onMoviesAdded }) {

  const {
    value: movieTitle,
    handleInputBlur: handleMovieTitleBlur,
    handleInputChange: handleMovieTitleChange,
    hasError:movieTitleHasError,
    reset: resetMovieTitle
  } = useMovieForm("", isNotEmpty)

  const {
    value: releaseDate,
    handleInputBlur: handleReleaseDateBlur,
    handleInputChange: handleReleaseDateChange,
    hasError:releaseDateHasError,
    reset: resetReleaseDate
  } = useMovieForm("",isNotEmpty);

  const {
    value: movieRating,
    handleInputBlur: handleMovieRatingBlur,
    handleInputChange: handleMovieRatingChange,
    hasError:movieRatingHasError,
    reset: resetMovieRating
  } = useMovieForm("", (value)=> isNotEmpty(value) && isBetween(value,0,10));

  const {
    value: genre,
    handleInputChange: handleGenreChange,
    reset: resetGenre
  } = useMovieForm(DEFAULT_GENRE);

  const {
    value: studioEmail,
    handleInputBlur: handleStudioEmailBlur,
    handleInputChange: handleStudioEmailChange,
    hasError:studioEmailHasError,
    reset: resetStudioEmail
  } = useMovieForm("", isEmail);

  const isAnyFieldEmptyAndUntouched =
  (!movieTitleHasError && movieTitle === '') ||
  (!releaseDateHasError && releaseDate === '') ||
  (!movieRatingHasError && movieRating === '') ||
  (!studioEmailHasError && studioEmail === '');

  const isInputInvalid = 
  movieRatingHasError || 
  releaseDateHasError ||
  movieRatingHasError ||
  studioEmailHasError

  function handleSubmit(event) {
    event.preventDefault();

    if (isInputInvalid || isAnyFieldEmptyAndUntouched) {
      return;
    }

    onMoviesAdded({
      movieTitle: movieTitle,
      releaseDate: releaseDate,
      movieRating: movieRating,
      genre: genre,
      studioEmail: studioEmail,
    });

    resetMovieTitle()
    resetMovieRating()
    resetReleaseDate()
    resetGenre()
    resetStudioEmail()

  }

  return (
    <form id="movie-form" onSubmit={handleSubmit}>
      <Input
        id="movie-title"
        label="Movie Title:"
        type="text"
        value={movieTitle}
        onBlur={handleMovieTitleBlur}
        onChange={handleMovieTitleChange}
        error={movieTitleHasError && "Please enter a movie Title."}
      />
      <Input
        id="release-date"
        label="Release Date:"
        type="date"
        value={releaseDate}
        onBlur={handleReleaseDateBlur}
        onChange={handleReleaseDateChange}
        error={releaseDateHasError && "Please enter a release date."}
      />
      <Input
        id="movie-rating"
        label="Movie Rating:"
        type="number"
        step="0.1"
        value={movieRating}
        onBlur={handleMovieRatingBlur}
        onChange={handleMovieRatingChange}
        error={movieRatingHasError && "Please enter a valid rating (0-10)."}
      />
      <Select
        id="genre"
        label="Genre:"
        options={genreOptions}
        value={genre}
        onChange={handleGenreChange}
      />
      <Input
        id="studio-email"
        label="Studio Email:"
        type="email"
        value={studioEmail}
        onBlur={handleStudioEmailBlur}
        onChange={handleStudioEmailChange}
        error={studioEmailHasError && "Please enter a valid email."}
      />
      <div className="form-actions">
        <button type="submit" disabled={isInputInvalid || isAnyFieldEmptyAndUntouched}>
          {" "}
          Save{" "}
        </button>
      </div>
    </form>
  );
}
