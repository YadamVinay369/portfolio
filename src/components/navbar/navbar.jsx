import React, { useState } from "react";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./navbar.scss";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "PROJECTS", to: "/portfolio" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleIcon = () => {
    setToggle(!toggle);
  };

  // Function to close the navbar when a menu item is clicked
  const handleMenuItemClick = () => {
    setToggle(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggle ? "active" : ""}`}>
          {data.map((item, key) => (
            <li
              key={key}
              className="navbar__container__menu__item"
              onClick={handleMenuItemClick} // Close navbar on item click
            >
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggle ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
