import React from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import HomeBanner from "../../home/homeBanner/HomeBanner";
import SideBar from "../../home/sidebar/SideBar";
import ListPlants from "../../home/listPlants/ListPlants";
const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <HomeBanner />
        <div className="container">
          <div className={scss.side}>
            <SideBar />
            <ListPlants />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
