import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPilots } from "../features/pilots/pilotsThunk"
import CardPilot from "./CardPilot"
import ImageNotFound from "./ImageNotFound"
import HeadersCards from "./HeadersCards"

const Pilots = ({ starship }) => {

  const { data, isLoading } = useSelector(state => state.pilots)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPilots(starship.pilots))
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="mx-auto mt-10">
        <HeadersCards title={"PILOTS"} />
        <div className="mt-5 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.length > 0 ? data.map(pilot => <CardPilot key={pilot.name} pilot={pilot} />)
            : <ImageNotFound title="Pilots" />}
        </div>
      </div>
    )
  }


}

export default Pilots
