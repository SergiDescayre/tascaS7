import { configureStore } from "@reduxjs/toolkit";
import starShipsSlice from "./starShipsSlice";

export const store = configureStore({
  reducer: {
    starShips: starShipsSlice,
  },
});
