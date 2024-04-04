import { Navigate, Route, Routes } from "react-router-dom"
import NotFound from "../pages/NotFound"
import ProtectedRoute from "../utils/ProtectedRoute"
import Home from "../pages/Home"
import StarShips from "../pages/StarShips"
import FileStarShip from "../pages/FileStarShip"
import Login from "../pages/Login"

const routes = () => {
  return (
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
  )
}

export default routes
