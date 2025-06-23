import React, { useEffect } from "react";
import scss from "./ListPlants.module.scss";
import { BsChevronDown } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

import { SlBasketLoaded } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { useShop } from "../../context/ProductContext";
const ListPlants = () => {
  const { readShop, data, deleteShop } = useShop();
  useEffect(() => {
    readShop();
  }, []);
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
          {data.map((item, index) => (
            <div key={index}>
              <div className={scss.plant}>
                <img src={item.image} alt="" />
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
                  <p onClick={() => deleteShop(item._id)}>
                    <MdDeleteOutline />
                  </p>
                </div>
                <p>{item.name}</p>
                <h1>{`${item.price} $`}</h1>
                <h1>{item.category}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPlants;
