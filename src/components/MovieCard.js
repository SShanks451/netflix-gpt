import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  if (!posterPath) return null;

  return (
    <div className="w-48 pr-4 m-2">
      <Link to={"/movies/" + movieId}>
        <img
          className="rounded-lg transition ease-in-out delay-100 hover:cursor-pointer hover:scale-125 hover:opacity-80 duration-300"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Card"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
