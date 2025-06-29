import React, { useEffect } from "react";
import scss from "./CartTotals.module.scss";
import { MdOutlineDelete } from "react-icons/md";
import { useShop } from "../../context/ProductContext";
import { useParams } from "react-router-dom";
const CartTotals = () => {
  const { oneShop, getOneShop } = useShop();
  const { id } = useParams();
  useEffect(() => {
    getOneShop(id);
  }, []);
  return (
    <div id={scss.card}>
      <div className="container">
        <div className={scss.products}>
          <h1>Products</h1>
          <div className={scss.nav}>
            <li>Price</li>
            <li>Quantity</li>
            <li>Total</li>
          </div>
          <h2>Cart Totals</h2>
        </div>
        <div className={scss.cartTotals}>
          <div className={scss.productblock}>
            <div className={scss.imgbox}>
              <img src={oneShop.image} alt="" />
              <div className={scss.title}>
                <h1>{oneShop.name}</h1>
                <p>
                  SKU: <span> 1995751877966</span>
                </p>
              </div>
            </div>
            <div className={scss.countbox}>
              <h2>{`${oneShop.price}$`}</h2>
              <div className={scss.count}>
                <p>-</p>
                <h3>1</h3>
                <p>+</p>
              </div>
              <h4>$238.00</h4>
            </div>
            <h5>
              <MdOutlineDelete />
            </h5>
          </div>
          <div className={scss.totalsblock}>
            <h1>Coupon Apply</h1>
            <div className={scss.inputbox}>
              <input type="text" placeholder="Enter coupon code here..." />
              <button>Apply</button>
            </div>
            <div className={scss.titlePrice}>
              <div className={scss.totalstitle}>
                <h2>Subtotal</h2>
                <h2>Coupon Discount</h2>
                <h2>Shiping</h2>
              </div>
              <div className={scss.totalsprice}>
                <p>$2,683.00</p>
                <p>(-) 00.00</p>
                <p>$16.00</p>
                <h3>View shipping charge</h3>
              </div>
            </div>
            <div className={scss.total}>
              <h4>Total</h4>
              <p>$2,699.00</p>
            </div>
            <button>Proceed To Checkout</button>
            <h5>Continue Shopping</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
