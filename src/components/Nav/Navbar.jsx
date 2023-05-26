import { useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [buttons, setButtons] = useState(false);

  const open = () => {
    setButtons(!buttons);
  };

  return (
    <div className="nav_class">
      <img src="/logo.svg" alt="" />
      <img
        onClick={open}
        className="burguer_menu"
        src="/icon-menu.svg"
        alt=""
      />
      <div className={buttons ? "nav" : "nav hidden"}>
        <nav className="menu_class">
          <img
            onClick={open}
            className="close_img"
            src="/icon-menu-close.svg"
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
    </div>
  );
};

export default Navbar;
