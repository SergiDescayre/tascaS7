import {configureStore} from "@reduxjs/toolkit"
import { starShipsSlice } from "./starShipSlice"

export default configureStore({
    reducer:{
        starShips:starShipsSlice.reducer
    }
})