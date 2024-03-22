import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
const {isUserLogin} = useSelector((state) => state.starAuth)
const active = false

    if(active){
        return <Navigate to="/login" replace/>
    }else{
        return <Outlet />
    }
}

export default ProtectedRoute