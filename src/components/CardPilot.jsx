import React from 'react'

const CardPilot = ({ pilot }) => {

  const extractNumber = (url) => {
    return url.slice(33).slice(0, -1)
  }
  return (
    <div className="">
      <div className="rounded-md overflow-hidden bg-gray-900">
        <img className="border-b-4 border-red-500" src={`https://starwars-visualguide.com/assets/img/characters/${extractNumber(pilot.url)}.jpg`}></img>
        <div className='p-3 text-center'>
        <span className="uppercase">{pilot.name}</span>
        </div>
      </div>
    </div>
  )
}

export default CardPilot


//https://starwars-visualguide.com/assets/img/characters/13.jpg