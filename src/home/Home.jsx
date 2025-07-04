import HomeBanner from "./homeBanner/HomeBanner";
import SideBar from "./sidebar/SideBar";
import ListPlants from "./listPlants/ListPlants";
import Login from "../authentication/Login";

const Home = () => {
  return (
    <div>
      <div className="container">
        <HomeBanner />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SideBar />
          <ListPlants />
        </div>
      </div>
    </div>
  );
};

export default Home;
