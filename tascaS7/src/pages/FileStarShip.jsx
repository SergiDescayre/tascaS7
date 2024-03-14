import { useParams } from "react-router-dom"
import {useSelector} from "react-redux" 

const FileStarShip = () => {
    const {data,idImage} = useSelector((state => state.starShips))
    const param = useParams()
    const  starship = data.find(item=> item.name === param.name)


  return (
    <div>{starship.name} {idImage}
    <img src="https://starwars-visualguide.com/assets/img/starships/5.jpg"></img>
    </div>
    
  )
}

export default FileStarShip

//https://starwars-visualguide.com/assets/img/starships/5.jpg