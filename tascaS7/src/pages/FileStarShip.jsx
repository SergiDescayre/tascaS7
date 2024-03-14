import { useParams } from "react-router-dom"
import {useSelector} from "react-redux" 

const FileStarShip = () => {
    const {data} = useSelector((state => state.starShips))
    const param = useParams()
    const  starship = data.find(item=> item.name === param.name)
  return (
    <div>{starship.name}</div>
  )
}

export default FileStarShip