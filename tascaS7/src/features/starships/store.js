import {configureStore} from "@reduxjs/toolkit"
import { starShipsSlice } from "./starShipSlice"
import { starAuthSlice } from "./starAuthSlice"


export default configureStore({
    reducer:{
        starShips:starShipsSlice.reducer,
        starAuth:starAuthSlice.reducer
    }
})