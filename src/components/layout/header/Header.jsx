import React, { useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../../assets/Vector.svg";
import { CiSearch } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
const Header = () => {
  const [click, setClick] = useState(false);
  const [create, setCreate] = useState(false);
  return (
    <header>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.logo}>
            <img src={logo} alt="" />
            <h1>GREENSHOP</h1>
          </div>
          <div className={scss.nav}>
            <Link to="/post">
              <li>+</li>
            </Link>
            <Link to="/">
              <li>Home</li>
            </Link>

            <li>Shop</li>
            <li>Plant Care</li>
            <li>Blogs</li>
          </div>
          <div className={scss.logblock}>
            <p className={scss.search}>
              <CiSearch
                onClick={() => setClick(true)}
                style={{
                  fontSize: "clamp(0.875rem, 0.661rem + 0.81vw, 1.313rem)",
                  fontWeight: "700",
                }}
              />
            </p>
            <p>
              <SlBasketLoaded
                style={{
                  fontSize: "clamp(0.875rem, 0.661rem + 0.81vw, 1.313rem)",
                  fontWeight: "700",
                }}
              />
            </p>
            <div className={scss.login}>
              <button>
                <CiLogin />
                Login
              </button>
            </div>
            <h5>
              <BiUser />
            </h5>
            <h6>
              <RxHamburgerMenu />
            </h6>
          </div>
        </div>
        <input
          className={scss.inp}
          style={{ display: click ? "flex" : "none" }}
          type="text"
          placeholder="search plants,seeds..."
        />
      </div>
    </header>
  );
};

export default Header;
