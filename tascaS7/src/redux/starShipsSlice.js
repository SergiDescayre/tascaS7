import { createSlice } from "@reduxjs/toolkit";

const fechData = async () => {
  const response = await fetch("https://swapi.py4e.com/api/starships");
  const data = await response.json();
  return data;
};
const starShips = await fechData();

const starShipsSlice = createSlice({
  name: "starShips",
  initialState: starShips,
  reducers: {},
});

export default starShipsSlice.reducer;
