import { NavLink } from "react-router-dom";
const Navbar = () => {

  return (
    <div>
      <NavLink to="/"
      className={({ isActive }) => (isActive ? "font-bold" : undefined)}
      >
      Home
      </NavLink>
      <NavLink to="/starships"
      className={({ isActive }) => (isActive ? "font-bold" : undefined)}
      >
      Star Ships
      </NavLink>
    </div>
  )
}

export default Navbar


