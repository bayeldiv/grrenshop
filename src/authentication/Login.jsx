import React from "react";
import scss from "./Login.module.scss";
import { LogoDev } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className={scss.loginbox}>
        <div className={scss.login}>
          <div className={scss.register}>
            <h1>
              Login <span>|</span>
            </h1>
            <h2 onClick={() => navigate(`/register`)}>Register</h2>
          </div>
          <h3>Enter your username and password to login.</h3>
          <div className={scss.inputs}>
            <input type="text" placeholder="enter your email" />
            <div className={scss.inputpas}>
              <input type="text" placeholder="enter your password" />
            </div>
            <p>Forgot Password?</p>
          </div>
          <button>Login</button>
          <h4>Or login with</h4>
          <div className={scss.google}>
            <h5>
              <FcGoogle />
              Login with Google
            </h5>
            <h5>
              <FaFacebookF />
              Login with Facebook
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
