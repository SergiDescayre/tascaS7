import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStarShips = createAsyncThunk('starShips/fetchStarShips',
async () => {
  const response = await fetch("https://swapi.py4e.com/api/starships")
  const data = await response.json()
  return data
} )

const initialState = {
  loading:false,
  starShips : [],
  error : ""
}

const starShipsSlice = createSlice({
  name: "starShips",
  initialState,
  reducers: {},

  extraReducers(builder){
    builder.addCase(fetchStarShips.pending, (state) => {
      state.loading=true
    })
    builder.addCase(fetchStarShips.fulfilled,(state,action)=> {
      state.loading = false
      state.starShips = action.payload
      state.error = ""
    })
  }
});

export default starShipsSlice.reducer;
