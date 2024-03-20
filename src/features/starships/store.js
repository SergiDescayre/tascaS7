import {configureStore} from "@reduxjs/toolkit"
import { starShipsSlice } from "./starShipSlice"
import { starAuthSlice } from "./starAuthSlice"
import { pilotsSlice } from "../pilots/pilotsSlice"


export default configureStore({
    reducer:{
        starShips:starShipsSlice.reducer,
        starAuth:starAuthSlice.reducer,
        pilots:pilotsSlice.reducer,
    }
})