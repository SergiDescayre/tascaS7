import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://swapi.py4e.com/api/starships"

export const fetchStarships = createAsyncThunk(
    'starShips/fetchStarships',async () => {
        try {
            const response =  await fetch(URL)
            const data = await response.json()
            return data
        } catch (error) {
            return error
        }
    } 
)