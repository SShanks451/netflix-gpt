import { createSlice } from "@reduxjs/toolkit";

const moviePageSlice = createSlice({
  name: "moviePage",
  initialState: {
    movieDetails: null,
    movieTrailer: null,
    movieRating: null,
  },
  reducers: {
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addMovieRating: (state, action) => {
      state.movieRating = action.payload;
    },
  },
});

export const { addMovieDetails, addMovieTrailer, addMovieRating } = moviePageSlice.actions;

export default moviePageSlice.reducer;
