import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink to="/" className="nav__item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipes" className="nav__item">
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav__item">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
