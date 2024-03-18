import { createSlice } from "@reduxjs/toolkit";
import appFirebase from "../../credentials";
import {getAuth,onAuthStateChanged } from "firebase/auth"
const auth = getAuth(appFirebase)

const initialState = {
 auth
};

export const starAuthSlice = createSlice({
  name: "starAuth",
  initialState,
  reducers: {},
});


