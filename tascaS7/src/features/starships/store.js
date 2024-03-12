import {configureStore} from "@reduxjs/toolkit"
import starShipSlice from "./starShipSlice"

export const store = configureStore({
    reducer:{
        starShips:starShipSlice
    }
})