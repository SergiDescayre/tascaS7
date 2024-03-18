import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 isRegister:true,
 userStar:{},
 isUserLogin:false,
};

export const starAuthSlice = createSlice({
  name: "starAuth",
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.isRegister = action.payload;
    },
    setUserStar:(state,action)=>{
      state.userStar = action.payload;
    },
    isUserLogin: (state, action) => {
      state.isUserLogin = action.payload;
    },
  },
});


export const  {isLogin,setUserStar,isUserLogin}  = starAuthSlice.actions

