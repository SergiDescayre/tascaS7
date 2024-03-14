import { useDispatch, useSelector } from "react-redux";
import { updateUrl } from "../features/starships/starShipSlice";
import StarShipsCard from "../components/starShipsCard";

const StarShips = () => {

    const {isloading , data, next} = useSelector((state => state.starShips))
    const dispatch = useDispatch()
    
    //carrego més naus al llistat
    const handleShow = () => {
        dispatch(updateUrl(next))
    }

    if(isloading){
        return (
            <div>Carregant...</div>
        )
    }if(data){
        return(
            <>
            <div className="p-3">
                {data.map(starData => <StarShipsCard key={starData.name} starData={starData} />)}
            </div>
            {
            next !== null && 
            <div className="flex justify-center py-5">
                <button className="border border-gray-500 rounded-md font-bold px-10 py-3 hover:bg-gray-700 text-blue-500" onClick={handleShow} >Show More</button>
            </div>
            }
            </>
        )
    }
}

export default StarShips
