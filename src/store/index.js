// Import configure store: untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

/**
 * Membuat store menggunakan configureStore.
 * Menerima param object: reducer.
 * Tambahkan Slice Reducer Movies ke Store.
 */
const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

// Export Store
export default store;
