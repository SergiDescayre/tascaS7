import { NavLink } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className=" w-[85%] mx-auto grid grid-cols-1 md:w-[100%] md:flex md:justify-center text-center   border-b-2 border-gray-500  ">
      <NavLink to="/"
      className= {({ isActive }) => (isActive ? " border-b-[4px] border-gray-500 border-b-blue-500 p-3" : "  border-gray-500 p-3" )}
      >
      <span className="px-7 text-xs">HOME</span>
      
      </NavLink>
      <NavLink to="/starships"
      className={({ isActive }) => (isActive ? "border-b-[4px] border-gray-500 border-b-blue-500 p-3" : "  border-gray-500 p-3" )}
      >
       <span className="px-7 text-xs">STARSHIPS</span>
      </NavLink>
    </nav>
  )
}

export default Navbar


