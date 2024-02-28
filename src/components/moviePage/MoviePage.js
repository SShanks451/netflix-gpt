import MovieHeader from "./MovieHeader";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect, useState } from "react";
import MovieContainer from "./MovieContainer";
import Shimmer from "./Shimmer";

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [movieRating, setMovieRating] = useState(null);

  const getMovieDetails = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US", API_OPTIONS);
    const json = await data.json();
    setMovieDetails(json);
    // dispatch(addMovieDetails(json));

    const rating_data = await fetch("http://www.omdbapi.com/?i=" + json.imdb_id + "&apikey=299c01ab");
    const rating_json = await rating_data.json();
    setMovieRating(rating_json.imdbRating);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieTrailer = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    setMovieTrailer(trailer);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  if (!movieDetails || !movieTrailer || !movieRating) return <Shimmer />;

  return (
    <div>
      <MovieHeader />
      <MovieContainer movieDetails={movieDetails} movieTrailer={movieTrailer} movieRating={movieRating} />
    </div>
  );
};

export default MoviePage;
