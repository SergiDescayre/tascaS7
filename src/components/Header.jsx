import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { setIsUserLogin } from "../features/starships/starAuthSlice";
import { useNavigate } from "react-router-dom";
import {getAuth,signOut} from "firebase/auth"
import appFirebase from "../credentials";

import Facebook from "../assets/Facebook.png"
import Instagram from "../assets/Instagram.png"
import Twitter from "../assets/Twitter.png"


import logoStars from "../assets/star-wars-2.svg";


const Header = () => {
  const dispatch = useDispatch()
  const auth = getAuth(appFirebase)
  const navigate = useNavigate();
  const { isUserLogin, userStar } = useSelector((state) => state.starAuth);

  const handleSignUp = () => {
    navigate("/login");
  };

  const handleLogOut = async () => {
    navigate("/login")
    dispatch(setIsUserLogin(false))
    await  signOut(auth)
    
   
  }


  return (
    <header className="grid grid-cols-1 md:grid-cols-3 items-center">
      <div className="flex gap-4 justify-center mt-3">
    
      <a href="https://www.facebook.com/starwars.es/?locale=es_ES" target="_blank"><img  className="w-6 cursor-pointer hover:scale-150 transition ease-in-out delay-100" src={Facebook}></img></a>
      <a href="https://www.instagram.com/starplusla/?hl=es" target="_blank"><img  className="w-6 cursor-pointer hover:scale-150 transition ease-in-out delay-100" src={Instagram}></img></a>
      <a href="https://twitter.com/starwars" target="_blank"><img  className="w-6 cursor-pointer hover:scale-150 transition ease-in-out delay-100" src={Twitter}></img></a>

       </div>
      <div className=" ">
      <img className="w-[250px] mx-auto " src={logoStars} alt="logo" />
      </div>
    
      <div className=" flex flex-col items-center">
        {isUserLogin ? (
          <button
            onClick={handleLogOut}
            className="mb-3  w-[100px]  bg-blue-500 text-white font-bold py-1 px-3 border border-blue-500 rounded hover:bg-black hover:text-blue-500 "
          >
            LOGOUT
          </button>
        ) : (
          <button
            onClick={handleSignUp}
            className="mb-3  w-[100px] bg-blue-500 text-white font-bold py-1 px-3 border border-blue-500 rounded hover:bg-black hover:text-blue-500 "
          >
            SIGN UP
          </button>
        )}
        {isUserLogin && <span className="text-blue-500 mb-3">{userStar.email}</span>}
      </div>
    </header>
  );
};

export default Header;
