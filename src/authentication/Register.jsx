import React from "react";
import scss from "./Register.module.scss";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className={scss.loginbox}>
          <div className={scss.login}>
            <div className={scss.register}>
              <h1 onClick={() => navigate(`/login`)}>
                Login <span>|</span>
              </h1>
              <h2>Register</h2>
            </div>
            <h3>Enter your username and password to register.</h3>
            <div className={scss.inputs}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="userName" />
              <input type="text" placeholder="enter your email" />
              <div className={scss.inputpas}>
                <input type="text" placeholder="enter your password" />
              </div>
            </div>
            <button>Register</button>
            <h4>Or register with</h4>
            <div className={scss.google}>
              <h5>
                <FcGoogle />
                Continue with Google
              </h5>
              <h5>
                <FaFacebookF />
                Continue with Facebook
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
