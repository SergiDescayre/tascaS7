import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchPilots } from "../features/pilots/pilotsThunk"
import CardPilot from "./CardPilot"
import ImageNotFound from "./ImageNotFound"

const Pilots = ({starship}) => {

const {data, isLoading} = useSelector(state => state.pilots)
const dispatch = useDispatch()

useEffect(()=> {
  dispatch(fetchPilots(starship.pilots))
},[])

  if(isLoading){
    return <div>Carregant...</div>
  }else{
    return (
      <div className=" w-[85%] mx-auto mt-10">
        <span className="p-2 border-t border-b border-gray-500 block">
          PILOTS
        </span>
  
        {data.length > 0 ? data.map(pilot => <CardPilot  key={pilot.name} pilot={pilot} /> )
              : <ImageNotFound title="Pilots" />}
      </div>
    )
  }

  
}

export default Pilots
