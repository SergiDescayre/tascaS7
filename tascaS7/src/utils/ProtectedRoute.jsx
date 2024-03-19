import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {

const {isUserLogin} = useSelector((state) => state.starAuth)
    if(!isUserLogin){
        return <Navigate to="/login" replace/>
    }
    
}

export default ProtectedRoute