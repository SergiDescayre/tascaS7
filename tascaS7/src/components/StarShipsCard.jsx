import { useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import {addIdImage} from "../features/starships/starShipSlice"

const StarShipsCard = ({starData}) => {
    const navigate = useNavigate()

    //recupero el número de nau de la url
    const idImage = starData.url.slice(37).slice(0,-1)

    const dispatch = useDispatch()

    const handleCard = (data) => {
        navigate(`/filestarship/${data.name}`)
        //guardo el numero de nau al store
        dispatch(addIdImage(idImage))
    }
  return (
    <>
    <section onClick={() => handleCard(starData)} className="bg-gray-900 w-[80%] mx-auto m-6 rounded-md p-4">
        <div>
            <span className='uppercase'>{starData.name}</span>
        </div>
        <div>
            <span>{starData.manufacturer} {idImage}</span>
            
        </div>
    </section>
    </>
  )
}

export default StarShipsCard