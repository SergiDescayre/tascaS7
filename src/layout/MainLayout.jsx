import { Routes,Route} from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Home from "../pages/Home";
import Login from "../pages/Login";
import StarShips from "../components/StarShips";
import { useDispatch, useSelector } from "react-redux";
import { fetchStarships } from "../features/starships/starShipThunk";
import FileStarShip from "../pages/FileStarShip";
import { useEffect } from "react";
import ProtectedRoute from "../utils/ProtectedRoute";


const MainLayout = () => {
  const {url ,next} = useSelector((state) => state.starShips);
  const dispatch = useDispatch()
   useEffect(() => {
        dispatch(fetchStarships(url))
    }, [url])  
    

  
  return (
    <div className="text-white">
    <Header />
    <Navbar />
    <div className="w-[85%] md:w-[90%] lg:w-[75%] mx-auto">
    <Routes>
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Home />}/>
      <Route path="/starShips" element={<StarShips />}/>
      <Route path="/filestarship/:name" element={<FileStarShip/>}/>
    </Route>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </div>
    </div>
  )
}

export default MainLayout
