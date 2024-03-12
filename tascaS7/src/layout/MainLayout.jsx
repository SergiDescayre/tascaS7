import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"

const MainLayout = () => {
  return (
    <div className="bg-gray-950 text-gray-500">
    <Header />
    <Navbar />
     
     <Outlet />
    </div>
  )
}

export default MainLayout
