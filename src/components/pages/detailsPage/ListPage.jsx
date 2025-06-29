import { useEffect } from "react";
import scss from "./ListPage.module.scss";
import { useShop } from "../../../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsStarFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Review from "../../../ui/reviews/Review";
const ListPage = () => {
  const { oneShop, getOneShop } = useShop();
  const { id } = useParams();
  useEffect(() => {
    getOneShop(id);
  }, []);
  return (
    <div id={scss.listPage}>
      <div className="container">
        <div className={scss.list}>
          <div className={scss.plantbox}>
            <div className={scss.plantimg}>
              <img src={oneShop.image} alt="" />
              <img src={oneShop.image} alt="" />
              <img src={oneShop.image} alt="" />
              <img src={oneShop.image} alt="" />
            </div>
            <div className={scss.plantimg2}>
              <p>
                <FiSearch />
              </p>
              <img src={oneShop.image} alt="" />
            </div>
          </div>
          <div className={scss.daisy}>
            <h1>{oneShop.name}</h1>
            <div className={scss.price}>
              <h2>{`${oneShop.price} $`}</h2>
              <div className={scss.rating}>
                <div className={scss.ratingbox}>
                  <p>
                    <BsStarFill />
                  </p>
                  <p>
                    <BsStarFill />
                  </p>
                  <p>
                    <BsStarFill />
                  </p>
                  <p>
                    <BsStarFill />
                  </p>
                  <p>
                    <BsStarFill />
                  </p>
                </div>
                <p>19 Customer Review</p>
              </div>
            </div>
            <div className={scss.tittle}>
              <h1>Short Description:</h1>
              <p>
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.
              </p>
            </div>
            <div className={scss.size}>
              <h2>Size:</h2>
              <div className={scss.sizeicon}>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
            </div>
            <div className={scss.countblock}>
              <div className={scss.count}>
                <p>-</p>
                <h1>1</h1>
                <p>+</p>
              </div>
              <button>BUY NOW</button>
              <Link to={`/card/${oneShop._id}`}>
                <button className={scss.btn1}>ADD TO CARD</button>
              </Link>
              <button className={scss.btn2}>
                <FaRegHeart />
              </button>
            </div>
            <div className={scss.sku}>
              <p>
                <span>SKU:</span> 1995751877966
              </p>
              <p>
                <span>Categories:</span> {oneShop.category}
              </p>
              <p>
                <span>Tags:</span> Home, Garden, Plants
              </p>
              <h4>
                Share this products:
                <span>
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <MdOutlineEmail />
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className={scss.description}>
          <h1>
            Product Description{" "}
            <span>
              <Review />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
