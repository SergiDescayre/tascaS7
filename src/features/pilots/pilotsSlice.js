import { createSlice } from "@reduxjs/toolkit";
import { fetchPilots } from "./pilotsThunk";

const initialState = {
    data:[],
    dataFiltered:[],
    url:"https://swapi.dev/api/people/?page=1",
    next:"",
    error:"",
    isLoading:false,
    idImage:""
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
            state.data = [...state.data,...action.payload.results]
            state.next = action.payload.next
            state.isLoading = false
        })
        .addCase(fetchPilots.rejected,(state,action)=> {
            state.error = action.errorMessage || "Something went wrong!"
            state.isLoading = false
        })
    }

    
})