import {configureStore} from "@reduxjs/toolkit"
import { starShipsSlice } from "./starships/starShipSlice"
import { starAuthSlice } from "./starships/starAuthSlice"
import { pilotsSlice } from "./pilots/pilotsSlice"
import {filmsSlice} from "./films/filmsSlice"



export default configureStore({
    reducer:{
        starShips:starShipsSlice.reducer,
        starAuth:starAuthSlice.reducer,
        pilots:pilotsSlice.reducer,
        films:filmsSlice.reducer
    }
})