import { createSlice } from "@reduxjs/toolkit";
import { fetchFilms } from "./filmsThunk";

const initialState = {
    data:[],
    isLoading: false,
    error:""
}

export const filmsSlice = createSlice({
    name:"films",
    initialState,
    reducers:{},

    extraReducers:(builder)=> {
        builder
        .addCase(fetchFilms.pending,(state)=> {
            state.isLoading=true
        })
        .addCase(fetchFilms.fulfilled,(state,action)=> {
            state.data = action.payload
            console.log(state.data)
            state.isLoading = false
        })
        .addCase(fetchFilms.rejected,(state,action)=>{
            state.error = action.errorMessage || "Something went wrong!"
            state.isLoading=false
        })
    }
})