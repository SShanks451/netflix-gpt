import MovieTrailer from "./MovieTrailer";
import MovieTitle from "./MovieTitle";

const MovieContainer = ({ movieDetails, movieTrailer, movieRating }) => {
  return (
    <div className="bg-black ">
      <MovieTitle movieDetails={movieDetails} movieRating={movieRating} />
      <MovieTrailer movieTrailer={movieTrailer} />
    </div>
  );
};

export default MovieContainer;
