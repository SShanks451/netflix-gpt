import MovieTrailer from "./MovieTrailer";
import MovieTitle from "./MovieTitle";

const MovieContainer = () => {
  return (
    <div className="bg-black">
      <MovieTitle />
      <MovieTrailer />
    </div>
  );
};

export default MovieContainer;
