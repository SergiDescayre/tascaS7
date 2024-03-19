import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux";
import { fetchStarships } from "../features/starships/starShipThunk";
import { useEffect,useState } from "react";



const MainLayout = () => {
  const {url ,next} = useSelector((state) => state.starShips);
  const dispatch = useDispatch()
   useEffect(() => {
        dispatch(fetchStarships(url))
    }, [url])   

  
  return (
    <div className="bg-black text-white">
    <Header />
    <Navbar />
     
    <Outlet />
    </div>
  )
}

export default MainLayout
