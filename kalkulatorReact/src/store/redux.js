import { configureStore } from "@reduxjs/toolkit";
import kalkulator from "../kalkulator/kalkulator";
const store = configureStore({
  reducer: { kalkulator},
});
export default store;
