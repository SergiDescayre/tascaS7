import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPilots = createAsyncThunk(
    'pilots/fetchpilots',async (url) => {
        try {
            const response  = await fetch(url)
            const data = await response.json()
            return data
        } catch (error) {
            return error
        }
    }
)