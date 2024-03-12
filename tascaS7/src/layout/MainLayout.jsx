import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="bg-black text-gray-400  h-screen">

    <Navbar />
     
     <Outlet />
    </div>
  )
}

export default MainLayout
