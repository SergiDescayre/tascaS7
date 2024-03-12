import { NavLink } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className="flex justify-center border-t-2 border-b-2 border-gray-500  ">
      <NavLink to="/"
      className= {({ isActive }) => (isActive ? "border-l-2 border-r-2 border-b-[6px] border-gray-500 border-b-blue-500 p-3" : "border-r-2 border-l-2  border-gray-500 p-3" )}
      >
      <span className="px-7">HOME</span>
      
      </NavLink>
      <NavLink to="/starships"
      className={({ isActive }) => (isActive ? "border-l-2 border-r-2 border-b-[6px] border-gray-500 border-b-blue-500 p-3" : "border-r-2 border-l-2  border-gray-500 p-3" )}
      >
       <span className="px-7">STARSHIPS</span>
      </NavLink>
    </nav>
  )
}

export default Navbar


