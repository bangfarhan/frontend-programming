// import createSlice: untuk membuat slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

/**
 * Buat slice: untuk menghasilkan action dan reducers.
 * Menerima param object: name, initialState, reducers
 */
const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    /**
     * action addMovie menerima 2 param: state dan action.
     * state berisi state movies saat ini.
     * action berisi payload atau data yang dikirim.
     */
    addMovie(state, action) {
      /**
       * Redux membolehkan untuk mengubah data array (mutate).
       * Cukup push untuk menambahkan data movie.
       */
      state.movies.push(action.payload);
    },
    //membuat reducer updateMovies gunanya untuk update movies
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

/**
 * Slice menghasilkan action dan reducers
 * Nama action diambil dari nama reducer
 */
const { addMovie, updateMovies } = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;

// Export reducers dan actions
export default moviesReducer;
export { addMovie, updateMovies };
