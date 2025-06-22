import React from "react";
import scss from "./ListPlants.module.scss";
import { BsChevronDown } from "react-icons/bs";
import img1 from "../../assets/image 1.svg";
import img23 from "../../assets/image2.svg";
import img2 from "../../assets/image 3.svg";
import img3 from "../../assets/image 4.svg";
import img4 from "../../assets/image 5.svg";
import img5 from "../../assets/image 6.svg";
import img6 from "../../assets/image 7.svg";
import img7 from "../../assets/image 8.svg";
import img8 from "../../assets/image 8.svg";

import { SlBasketLoaded } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
const ListPlants = () => {
  return (
    <div id={scss.list}>
      <div className="container">
        <div className={scss.list}>
          <div className={scss.text}>
            <h1>All Plants</h1>
            <h1>New Arrivals</h1>
            <h1>Sale</h1>
          </div>
          <div className={scss.sort}>
            <p>Short by: Default Sorting</p>
            <p>
              <BsChevronDown />
            </p>
          </div>
        </div>
        <div className={scss.plants}>
          <div className={scss.plant}>
            <img src={img1} alt="" />
            <h2>13% OFF</h2>
            <div className={scss.plantbox}>
              <p>
                <SlBasketLoaded />
              </p>
              <p>
                <MdFavoriteBorder />
              </p>
              <p>
                <IoIosSearch />
              </p>
            </div>
            <p>Barberton Daisy</p>
            <h1>$119.00</h1>
          </div>
          <div className={scss.plant}>
            <img src={img23} alt="" />
            <h2>13% OFF</h2>
            <div className={scss.plantbox}>
              <p>
                <SlBasketLoaded />
              </p>
              <p>
                <MdFavoriteBorder />
              </p>
              <p>
                <IoIosSearch />
              </p>
            </div>
            <p>Barberton Daisy</p>
            <h1>$119.00</h1>
          </div>
          <div className={scss.plant}>
            <img src={img4} alt="" />
            <h2>13% OFF</h2>
            <div className={scss.plantbox}>
              <p>
                <SlBasketLoaded />
              </p>
              <p>
                <MdFavoriteBorder />
              </p>
              <p>
                <IoIosSearch />
              </p>
            </div>
            <p>Barberton Daisy</p>
            <h1>$119.00</h1>
          </div>
          <div className={scss.plant}>
            <img src={img5} alt="" />
            <h2>13% OFF</h2>
            <div className={scss.plantbox}>
              <p>
                <SlBasketLoaded />
              </p>
              <p>
                <MdFavoriteBorder />
              </p>
              <p>
                <IoIosSearch />
              </p>
            </div>
            <p>Barberton Daisy</p>
            <h1>$119.00</h1>
          </div>
          <div className={scss.plant}>
            <img src={img6} alt="" />
            <h2>13% OFF</h2>
            <div className={scss.plantbox}>
              <p>
                <SlBasketLoaded />
              </p>
              <p>
                <MdFavoriteBorder />
              </p>
              <p>
                <IoIosSearch />
              </p>
            </div>
            <p>Barberton Daisy</p>
            <h1>$119.00</h1>
          </div>
          <div className={scss.plant}>
            <img src={img7} alt="" />
            <h2>13% OFF</h2>
            <div className={scss.plantbox}>
              <p>
                <SlBasketLoaded />
              </p>
              <p>
                <MdFavoriteBorder />
              </p>
              <p>
                <IoIosSearch />
              </p>
            </div>
            <p>Barberton Daisy</p>
            <h1>$119.00</h1>
          </div>
          <div className={scss.plant}>
            <img src={img8} alt="" />
            <h2>13% OFF</h2>
            <div className={scss.plantbox}>
              <p>
                <SlBasketLoaded />
              </p>
              <p>
                <MdFavoriteBorder />
              </p>
              <p>
                <IoIosSearch />
              </p>
            </div>
            <p>Barberton Daisy</p>
            <h1>$119.00</h1>
          </div>
          <div className={scss.plant}>
            <img src={img2} alt="" />
            <h2>13% OFF</h2>
            <div className={scss.plantbox}>
              <p>
                <SlBasketLoaded />
              </p>
              <p>
                <MdFavoriteBorder />
              </p>
              <p>
                <IoIosSearch />
              </p>
            </div>
            <p>Barberton Daisy</p>
            <h1>$119.00</h1>
          </div>
          <div className={scss.plant}>
            <img src={img3} alt="" />
            <h2>13% OFF</h2>
            <div className={scss.plantbox}>
              <p>
                <SlBasketLoaded />
              </p>
              <p>
                <MdFavoriteBorder />
              </p>
              <p>
                <IoIosSearch />
              </p>
            </div>
            <p>Barberton Daisy</p>
            <h1>$119.00</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPlants;
