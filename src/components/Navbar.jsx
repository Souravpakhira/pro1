import React, { useRef, useState } from "react";
import Lightning from "../resources/lightning.png";
import Check from "../resources/awesome-check-circle.svg";
import Logo from "../resources/WhatsApp_Image_2020-08-13_at_2.42.29_PM-removebg-preview.png";
import Hero from "./Hero";

const Navbar = () => {
  const [trigger, setTigger] = useState(true);

  const dropDownRef = useRef();

  const ModelBg = useRef();
  const ModelLogin = useRef();
  const ModalSignup = useRef();

  const ModalOtp = useRef();

  const ModalThanks = useRef();

  const login = () => {
    ModelLogin.current.style.display = "block";
    ModelBg.current.style.display = "block";
  };

  const closeLogin = () => {
    ModelLogin.current.style.display = "none";
    ModelBg.current.style.display = "none";
  };

  const signUp = () => {
    if (ModelLogin.current.style.display === "block") {
      ModelLogin.current.style.display = "none";
    }

    ModalSignup.current.style.display = "block";
    ModelBg.current.style.display = "block";
  };

  const closeSignup = () => {
    ModalSignup.current.style.display = "none";
    ModelBg.current.style.display = "none";
  };

  const otp = () => {
    ModalSignup.current.style.display = "none";
    ModalOtp.current.style.display = "block";
  };

  const closeOtp = () => {
    ModalOtp.current.style.display = "none";
    ModalSignup.current.style.display = "block";
  };

  const thanks = () => {
    ModalOtp.current.style.display = "none";
    ModalThanks.current.style.display = "flex";
  };

  const closeAll = () => {
    ModelLogin.current.style.display = "none";
    ModelBg.current.style.display = "none";
    ModalOtp.current.style.display = "none";
    ModalSignup.current.style.display = "none";
    ModalThanks.current.style.display = "none";
  };

  const onDropDown = () => {
    console.log("click");
    if (trigger) {
      dropDownRef.current.style.display = "flex";
      setTigger(false);
    } else {
      dropDownRef.current.style.display = "none";
      setTigger(true);
    }
  };

  return (
    <>
      <nav className="navbar__main">
        <div className="header__logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="nav__links">
          <li className="link" onClick={onDropDown}>
            <a href="#" className="link__forYou">
              For You
            </a>
            <div className="dropDown" ref={dropDownRef}>
              <a href="#">Find matching interships</a>
              <a href="">Hire right talent</a>
              <a href="">Work from Home</a>
            </div>
          </li>
          <li className="link link__lighting">
            <div className="link__instantApply">
              <img src={Lightning} alt="" />
            </div>
            <a href="#">Instant Apply</a>
          </li>
          <li className="link">
            <a href="#">Pricing</a>
          </li>
          <li className="link">
            <a href="#">About Us</a>
          </li>
          <li className="link">
            <a href="#" className="signUp" onClick={signUp}>
              SIGN UP
            </a>
          </li>
          <button className="header__loginButton" onClick={login}>
            <p className="buttonText">LOGIN</p>
          </button>
        </ul>
      </nav>
      <Hero />
      <div className="modal__background" ref={ModelBg} onClick={closeAll}></div>

      <div className="model__login" ref={ModelLogin}>
        <div className="model__login__header">
          <h2 className="loginText">Login</h2>
          <div className="loginCross" onClick={closeLogin}>
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </div>
        <div className="modal__login__body">
          <h2>Student</h2>
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <p className="forgetPassword">Forget Password?</p>
            <button className="Login">Login</button>
          </form>
          <p className="newSignWay" onClick={signUp}>
            New to MyWays? Sign Up here
          </p>
        </div>
      </div>

      <div className="signUp__model" ref={ModalSignup}>
        <div className="cross__button" onClick={closeSignup}>
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
        <h2 className="signUp__header">Sign Up</h2>
        <p className="signUp__headline">It's quick and easy</p>
        <form className="signUp__form">
          <div className="name">
            <input type="text" placeholder="First Name" className="firstName" />
            <input type="text" placeholder="Last Name" className="lastName" />
          </div>
          <input type="text" placeholder="Email" className="email" />
          <input type="password" placeholder="Password" className="password" />
          <button className="signUp__button" onClick={otp}>
            Sign Up
          </button>
        </form>
      </div>

      <div className="otp__model" ref={ModalOtp}>
        <div className="left__button" onClick={closeOtp}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <h3 className="otp__header">OTP sent!</h3>
        <form className="otp__form">
          <input
            type="text"
            className="otp__input"
            placeholder="Enter your OTP"
          />
          <p className="otp__message">
            One time Passcode sent to your email ID- abc@gmail.com
          </p>
          <button className="otp__button" onClick={thanks}>
            Enter
          </button>
        </form>
      </div>

      <div className="thanks__model" ref={ModalThanks}>
        <div className="thanks__model__image">
          <img src={Check} alt="" className="rightTick__image" />
        </div>
        <p className="thanks__model__message">Thanks. Successful!</p>
      </div>
    </>
  );
};

export default Navbar;
