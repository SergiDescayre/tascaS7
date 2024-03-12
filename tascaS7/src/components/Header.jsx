import React from 'react'

import logoStars from "../assets/star-wars-2.svg"

const Header = () => {
  return (

    <header className="flex justify-around items-center">
        <div></div>
        <img  className="w-[450px] text-center -mt-12 ms-44"src={logoStars} alt="" />
        <div className="">
            <span className="text-xl">LOG IN</span>
            <span className="text-xl ps-4">SIGN UP</span>
        </div>
    </header>
  )
}

export default Header