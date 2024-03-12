import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://swapi.py4e.com/api/starships"

export const fetchStarships = createAsyncThunk(
    'starShips/fetchStarships',async (url) => {
        try {
            const response =  await fetch(url)
            const data = await response.json()
            return data
        } catch (error) {
            return error
        }
    } 
)