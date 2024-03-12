import { createSlice } from "@reduxjs/toolkit";
import { fetchStarships } from "./starShipThunk";

const initialState = {
    data:[],
    isLoading: false,
    error: null,
}


const starShipsSlice = createSlice({
 name: "starships",
 initialState,
 reducers:{},
 extraReducers: (builder) =>{
    builder
    .addCase(fetchStarships.pending, (state)=>{
        state.isLoading=true;
    })
    .addCase(fetchStarships.fulfilled, (state, action)=> {
       state.data = action.payload; 
       state.isLoading =false;
    })
    .addCase(fetchStarships.rejected, (state,action)=>{
     state.error = action.errorMessage || 'Something went wrong!';
     state.isLoading = false;
   });
 }
})


export default starShipsSlice.reducer