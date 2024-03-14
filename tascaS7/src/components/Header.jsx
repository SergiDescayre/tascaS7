import React from 'react'

import logoStars from "../assets/star-wars-2.svg"

const Header = () => {
  return (

    <header className="flex flex-col items-center md:flex-row justify-between px-20">
        <div>xarxes socials icones</div>
        <img  className="w-[250px] text-center "src={logoStars} alt="" />
        <div className="flex flex-col text-center gap-2 md:flex-row md:gap-4">
            <span className="text-xs md:text-sm">LOG IN</span>
            <span className="text-xs md:text-sm mb-3">SIGN UP</span>
        </div>
    </header>
  )
}

export default Header