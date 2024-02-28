const MovieTitle = ({ movieDetails, movieRating }) => {
  const details = movieDetails;
  const rating = movieRating;

  const genres = details.genres.map((genre) => genre.name);
  const runtime = details.runtime;
  const releaseYear = details.release_date.split("-")[0];

  return (
    <div className="absolute width-[100%] aspect-video pt-[15%] px-16 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{details.title}</h1>
      <p className="w-3/5 pt-10 pb-2 text-xl">{details.overview}</p>
      <p className="text-[21px] opacity-70 pt-2 pb-3">
        IMDb {rating}&nbsp;&nbsp;&nbsp;&nbsp;{parseInt(runtime / 60)}&nbsp;h&nbsp;{runtime - parseInt(runtime / 60) * 60}
        &nbsp;min&nbsp;&nbsp;&nbsp;&nbsp;{releaseYear}
      </p>
      {genres.map((genre) => (
        <div className="inline">
          <span className="pr-2 text-xl font-bold underline underline-offset-2">{genre}</span>
          <span className="font-bold text-2xl pr-2">.</span>
        </div>
      ))}
      <div className="py-8">
        <button className="bg-white text-black py-4 px-8 mr-2 text-xl hover:bg-opacity-80">▶ Play</button>
      </div>
    </div>
  );
};

export default MovieTitle;
