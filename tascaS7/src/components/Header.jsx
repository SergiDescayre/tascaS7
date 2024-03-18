import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { setIsUserLogin } from "../features/starships/starAuthSlice";
import { useNavigate } from "react-router-dom";
import {getAuth,signOut} from "firebase/auth"
import appFirebase from "../credentials";

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
    <header className="flex flex-col items-center md:flex-row justify-between px-20">
      <div className=" w-[30%]"><span>xarxes socials icones</span> </div>
      <div className=" w-[30%]">
      <img className="w-[250px] mx-auto " src={logoStars} alt="" />
      </div>
    
      <div className="w-[30%] flex flex-col items-end  ">
        {isUserLogin ? (
          <button
            onClick={handleLogOut}
            className="mb-3  w-[150px]  bg-blue-500 text-white font-bold py-1 px-3 border border-blue-500 rounded hover:bg-black hover:text-blue-500 "
          >
            LOGOUT
          </button>
        ) : (
          <button
            onClick={handleSignUp}
            className="mb-3  w-[150px] bg-blue-500 text-white font-bold py-1 px-3 border border-blue-500 rounded hover:bg-black hover:text-blue-500 "
          >
            SIGN UP
          </button>
        )}
        {isUserLogin && <span className="text-blue-500 text-lg ">{userStar.email}</span>}
      </div>
    </header>
  );
};

export default Header;
