import { useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [buttons, setButtons] = useState(false);


  const open = () => {
    setButtons(!buttons);
  };

  return (
    <div className="nav_class" >
      <img src="../src/assets/logo.svg" alt="" />
      <img 
        onClick={open}
        className="burguer_menu"
        src="../src/assets/icon-menu.svg"
        alt=""
      />
      <nav className={buttons ? "nav show" : "nav"}>
        <img
          onClick={open}
          className="close_img"
          src="../src/assets/icon-menu-close.svg"
          alt=""
        />
        <ul className="unordered_class">
          <li className="links_class">
            <a className="list_name" href="">
              Home
            </a>
          </li>
          <li className="links_class">
            <a className="list_name" href="">
              New
            </a>
          </li>
          <li className="links_class">
            <a className="list_name" href="">
              Popular
            </a>
          </li>
          <li className="links_class">
            <a className="list_name" href="">
              Trending
            </a>
          </li>
          <li className="links_class">
            <a className="list_name" href="">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
