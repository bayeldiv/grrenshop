import React from "react";
import scss from "./SideBar.module.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import sale from "../../assets/Super Sale Banner.svg";
function valuetext(value) {
  return `${value}°C`;
}

const SideBar = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id={scss.sidebar}>
      <div className="container">
        <div className={scss.sidebar}>
          <h1>Categories</h1>
          <div className={scss.sideblock}>
            <div className={scss.plants}>
              <h2>House Plants</h2>
              <h2>Potter Plants</h2>
              <h2>Seeds</h2>
              <h2>Small Plants</h2>
              <h2>Big Plants</h2>
              <h2>Succulents</h2>
              <h2>Succulents</h2>
              <h2>Gardening</h2>
              <h2>Accessories</h2>
            </div>
            <div className={scss.numbers}>
              <p>(98)</p>
              <p>(18)</p>
              <p>(28)</p>
              <p>(68)</p>
              <p>(12)</p>
              <p>(45)</p>
              <p>(76)</p>
              <p>(83)</p>
              <p>(33)</p>
            </div>
          </div>
          <div className={scss.price}>
            <h2>Price Range</h2>
            <Box sx={{ width: 250 }}>
              <Slider
                style={{ color: "#46a358" }}
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
            <p>
              Price: <span>$39-$1230</span>
            </p>
            <button className={scss.btn}>Filter</button>
            <div className={scss.size}>
              <h4>Size</h4>
              <div className={scss.paragraper}>
                <div className={scss.parag}>
                  <p>Small</p>
                  <p>Medium</p>
                  <p>large</p>
                </div>
                <div className={scss.span}>
                  <span>(78)</span>
                  <span>(19)</span>
                  <span>(33)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={scss.sale}>
          <img src={sale} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
