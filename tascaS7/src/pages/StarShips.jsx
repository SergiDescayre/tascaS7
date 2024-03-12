import { useDispatch, useSelector } from "react-redux";
import { fetchStarships } from "../features/starships/starShipThunk";
import { useEffect } from "react";
import StarShipsCard from "../components/starShipsCard";

const StarShips = () => {
    const dispatch = useDispatch()
    const {isloading , data} = useSelector((state => state.starShips))
    useEffect(() => {
        dispatch(fetchStarships())
    }, [])   
    if(isloading){
        return (
            <div>Carregant...</div>
        )
    }if(data.results){
        return(
            <div className="p-3">
                {data.results.map(starData => <StarShipsCard key={starData.name} starData={starData} />)}
            </div>
        )
    }
}

export default StarShips
