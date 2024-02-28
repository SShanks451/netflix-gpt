const VideoTitle = () => {
  return (
    <div className="absolute w-[100%] aspect-video pt-[20%] px-24 text-white bg-gradient-to-r from-black">
      <h1 className="-mt-8 text-6xl font-bold">ONE PIECE FILM RED</h1>
      <p className="py-6 text-md w-3/5">
        Uta — the most beloved singer in the world. Her voice, which she sings with while concealing her true identity, has been described as
        “otherworldly.” She will appear in public for the first time at a live concert. As the venue fills with all kinds of Uta fans — excited
        pirates, the Navy watching closely, and the Straw Hats led by Luffy who simply came to enjoy her sonorous performance — the voice that the
        whole world has been waiting for is about to resound.
      </p>
      <div className="">
        <button className="bg-white text-black py-4 px-8 mr-2 text-xl hover:bg-opacity-80">▶ Play</button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
