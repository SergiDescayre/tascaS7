import { createSlice } from "@reduxjs/toolkit";
import { fetchStarships } from "./starShipThunk";

const initialState = {
  data: [],
  url: "https://swapi.py4e.com/api/starships/?page=1",
  isLoading: false,
  error: null,
  next: "",
  idImage:""
};

export const starShipsSlice = createSlice({
  name: "starships",
  initialState,
  reducers: {
    updateUrl: (state, action) => {
      state.url = action.payload;
    },
    addIdImage: (state,action) => {
      state.idImage = action.payload;
      console.log(state.idImage)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStarships.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStarships.fulfilled, (state, action) => {
        state.data = [...state.data, ...action.payload.results];
        state.next = action.payload.next;
        state.isLoading = false;
      })
      .addCase(fetchStarships.rejected, (state, action) => {
        state.error = action.errorMessage || "Something went wrong!";
        state.isLoading = false;
      });
  },
});

export  const { updateUrl ,addIdImage} = starShipsSlice.actions;
