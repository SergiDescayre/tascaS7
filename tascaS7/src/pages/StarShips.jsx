import { useDispatch, useSelector } from "react-redux";

import { fetchStarships } from "../features/starships/starShipThunk";
import { useEffect ,useState } from "react";
import StarShipsCard from "../components/starShipsCard";

const StarShips = () => {

    const [url,setUrl] = useState("https://swapi.py4e.com/api/starships/?page=1")
   
    const dispatch = useDispatch()
    const {isloading , data, next} = useSelector((state => state.starShips))
    const [starShips , setStarShips] = useState(data)

    console.log(data)
    console.log(starShips)

    const AddStarShips = () => {
        setUrl(next)
        setStarShips([...starShips,...data])
        return starShips
    } 
    useEffect(() => {
        dispatch(fetchStarships(url))
       
    }, [url])   

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
            next !== null && <button onClick={AddStarShips}>Show More</button>
            }
            
            </>
        )

      
    }
}

export default StarShips
