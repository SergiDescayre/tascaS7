import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Home from "../pages/Home";
import Login from "../pages/Login";
import StarShips from "../pages/StarShips";
import NotFound from "../pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchStarships } from "../features/starships/starShipThunk";
import FileStarShip from "../pages/FileStarShip";
import { useEffect } from "react";
import ProtectedRoute from "../utils/ProtectedRoute";
import { setIsUserLogin,setUserStar,isLogin } from "../features/starships/starAuthSlice";



const MainLayout = () => {

  const comprovateUserLocal = () => {
    if(JSON.parse(localStorage.getItem("user"))){
      dispatch(setIsUserLogin(true))
      dispatch(setUserStar(JSON.parse(localStorage.getItem("user"))))
    }
  }
  const { url } = useSelector((state) => state.starShips);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStarships(url))
    comprovateUserLocal()
  }, [url])
  
  return (
    <div className="text-white">
     
      <div className="w-[85%] md:w-[90%] lg:w-[75%] mx-auto">
      <Header />
      <Navbar />
        <Routes>
        <Route  path="/not_found" element={<NotFound />}/>
        <Route path="*" element={<Navigate to="/not_found"/>}/>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/starships" element={<StarShips />} />
            <Route path="/filestarship/:name" element={<FileStarShip />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default MainLayout
