import { useDispatch } from "react-redux";
import MovieHeader from "./MovieHeader";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../../utils/constants";
import { addMovieTrailer, addMovieDetails, addMovieRating } from "../../utils/moviePageSlice";
import { useEffect } from "react";
import MovieContainer from "./MovieContainer";

const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US", API_OPTIONS);
    const json = await data.json();
    dispatch(addMovieDetails(json));

    const rating_data = await fetch("http://www.omdbapi.com/?i=" + json.imdb_id + "&apikey=299c01ab");
    const rating_json = await rating_data.json();
    dispatch(addMovieRating(rating_json.imdbRating));
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieTrailer = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  return (
    <div>
      <MovieHeader />
      <MovieContainer />
    </div>
  );
};

export default MoviePage;
