import React, { useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../../assets/Vector.svg";
import { CiSearch } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.logo}>
            <img src={logo} alt="" />
            <h1>GREENSHOP</h1>
          </div>
          <Link to="/post">
            <li className={scss.create}>+</li>
          </Link>
          <div className={scss.nav}>
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
              <button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {" "}
                <CiLogin />
                login
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={() => navigate(`/login`)}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
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
