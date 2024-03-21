import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchPilots } from "../features/pilots/pilotsThunk"
import { useState } from "react"


const Pilots = ({starship}) => {
  
    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const requests = starship.pilots.map(url =>
            fetch(url)
              .then(response => response.json())
              .catch(error => console.error('Error fetching data:', error))
          );
    
          try {
            const responses = await Promise.all(requests);
            setData(responses);
          } catch (error) {
            console.error('Error en Promise.all:', error);
          }
        };
    
        fetchData();
      }, [])

      console.log(data)
    
  return (
    <div>
        {data && data.map(pilot => {
            return <div key={pilot.name}>{pilot.name}</div>
        })}
    </div>
  )
}

export default Pilots
