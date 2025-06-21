import React from "react";
import scss from "./HomeBanner.module.scss";
import banner from "../../assets/section 1.svg";
import { Typewriter } from "react-simple-typewriter";
import { GoDotFill } from "react-icons/go";
const HomeBanner = () => {
  return (
    <div id={scss.homebanner}>
      <div className="container">
        <div className={scss.bannerblock}>
          <div className={scss.bannertitle}>
            <p>Welcome to GreenShop</p>
            <div className={scss.banner}>
              <Typewriter
                words={["LET`S MAKE A BETTER PLANET"]}
                loop={true}
                // cursor={true}
                // cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={10}
                delaySpeed={2700}
              />
            </div>

            <h2>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </h2>
            <button className={scss.btn}>SHOP NOW</button>
          </div>
          <div className={scss.imgbox}>
            <img className={scss.small} src={banner} alt="" />
            <img className={scss.big} src={banner} alt="" />
          </div>
          <div className={scss.dot}>
            <h3>.</h3>
            <h3>.</h3>
            <h3>.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
