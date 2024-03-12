import { useNavigate } from "react-router-dom"

const StarShipsCard = ({starData}) => {
    const navigate = useNavigate()
    
    const handleCard = (data) => {
        navigate(`/filestarship/${data.name}`)
    }
  return (
    <>
    <section onClick={() => handleCard(starData)} className="bg-gray-900 w-[80%] mx-auto m-6 rounded-md p-4">
        <div>
            <span className='uppercase'>{starData.name}</span>
        </div>
        <div>
            <span>{starData.manufacturer}</span>
        </div>
    </section>
    </>
  )
}

export default StarShipsCard