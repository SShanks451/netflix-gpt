const VideoBackground = () => {
  const trailerVideo = "AmTUaFdTETc";

  return (
    <div>
      <iframe
        className="w-[100%] aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo + "?&autoplay=1&mute=1&controls=0&loop=1&playlist=" + trailerVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
