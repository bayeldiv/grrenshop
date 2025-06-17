import React from "react";
import scss from "./Footer.module.scss";
import footerImg from "../../../assets/footer2.svg";
import footerimg from "../../../assets/tuz.svg";
import logo from "../../../assets/Vector.svg";
import { BsGeoAlt } from "react-icons/bs";
import { BiMessageAlt } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import pay from "../../../assets/paypal.svg";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.gardenbox}>
            <div className={scss.garden}>
              <img src={footerImg} alt="" />
              <h1>Garden Care</h1>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className={scss.garden}>
              <img src={footerimg} alt="" />
              <h1>Garden Care</h1>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className={scss.garden}>
              <img src={footerimg} alt="" />
              <h1>Garden Care</h1>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className={scss.email}>
            <h1>Would you like to join newsletters?</h1>
            <div className={scss.inputbox}>
              <input type="text" placeholder="enter your email address..." />
              <button>Join</button>
            </div>
            <p>
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
        <div className={scss.greenshop}>
          <div className={scss.logo}>
            <img src={logo} alt="" />
            <h1>GREENSHOP</h1>
          </div>
          <div className={scss.contacts}>
            <div className={scss.geo}>
              <BsGeoAlt />
              <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
            </div>
            <div className={scss.message}>
              <BiMessageAlt />
              <p>contact@greenshop.com</p>
            </div>
            <div className={scss.contact}>
              <FaPhoneVolume />
              <p>+88 01911 717 490</p>
            </div>
          </div>
        </div>
        <div className={scss.grenaccount}>
          <div className={scss.account}>
            <h3>My Account</h3>
            <li>My Account</li>
            <li>Our stories</li>
            <li>Contact us</li>
            <li>Career</li>
            <li>Specials</li>
          </div>
          <div className={scss.account}>
            <h3>Help & Guide</h3>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>Product Policy</li>
            <li>How to Return</li>
          </div>
          <div className={scss.account}>
            <h3>Categories</h3>
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </div>
          <div className={scss.greenMedia}>
            <h2>Social Media</h2>
            <div className={scss.internet}>
              <p>
                <FaFacebookF
                  style={{
                    fontSize: "clamp(0.75rem, 0.567rem + 0.7vw, 1.125rem)",
                  }}
                />
              </p>
              <p>
                <FaInstagram
                  style={{
                    fontSize: "clamp(0.75rem, 0.567rem + 0.7vw, 1.125rem)",
                  }}
                />
              </p>
              <p>
                <FaTwitter
                  style={{
                    fontSize: "clamp(0.75rem, 0.567rem + 0.7vw, 1.125rem)",
                  }}
                />
              </p>
              <p>
                <FaLinkedinIn
                  style={{
                    fontSize: "clamp(0.75rem, 0.567rem + 0.7vw, 1.125rem)",
                  }}
                />
              </p>
              <p>
                <CiYoutube
                  style={{
                    fontSize: "clamp(0.75rem, 0.567rem + 0.7vw, 1.125rem)",
                  }}
                />
              </p>
            </div>
            <h3>We accept</h3>
            <img src={pay} alt="" />
          </div>
        </div>
        <h5 className={scss.endtext}>© 2021 GreenShop. All Rights Reserved.</h5>
      </div>
    </footer>
  );
};

export default Footer;
