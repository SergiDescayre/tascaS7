import { useDispatch, useSelector } from "react-redux";
import { fetchStarShips } from "../redux/starShipsSlice";
import { useEffect } from "react";

const StarShips = () => {
    const dispatch = useDispatch()
    const {loading , starShips} = useSelector((state => state.starShips))
    useEffect(() => {
        dispatch(fetchStarShips())
    }, [])   
    if(loading){
        return (
            <div>Carregant...</div>
        )
    }if(starShips.results){
        return(
            <div>
                {starShips.results.map(item => item.name)}
            </div>
        )
    }
}

export default StarShips
