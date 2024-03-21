import { createSlice } from "@reduxjs/toolkit";
import { fetchPilots } from "./pilotsThunk";

const initialState = {
    data:[],
    error:"",
    isLoading:false,
}

export const pilotsSlice = createSlice({
    name:"pilots",
    initialState,
    reducers:{

    },

    extraReducers:(builder) => {
        builder
        .addCase(fetchPilots.pending,(state)=> {
            state.isLoading=true
        })
        .addCase(fetchPilots.fulfilled, (state,action)=> {
            state.data = action.payload
            state.isLoading = false
        })
        .addCase(fetchPilots.rejected,(state,action)=> {
            state.error = action.errorMessage || "Something went wrong!"
            state.isLoading = false
        })
    }

    
})