import Routes from "../routes/routes";
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import { useDispatch, useSelector } from "react-redux";
import { fetchStarships } from "../features/starships/starShipThunk";
import { useEffect } from "react";
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
      <Routes />
      </div>
    </div>
  )
}

export default MainLayout
