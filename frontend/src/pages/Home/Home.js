import React from 'react'

import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/home_gif.gif";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";
import { MdLocalHospital } from "react-icons/md";
import Logo from "../../assets/logo.png"


const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <MdLocalHospital size={45} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      
        {/* HERO SECTION */}
      <section className="container hero">
      <img src={Logo} alt="Inventory" width="300px" height="300px" style={{
    paddingRight: '50px',
   
  }} /> 
        <div className="hero-text">
          <h1>Live Care Pharmacy</h1>
          <p align="justify">
          The pharmacy information  system to control store and manage Pharmaceuticals products in the pharmacy in
            real time and integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Access Now</Link>
            </button>
          </div>
          
        {/*  <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" /> 
  </div> */}
        </div>

        <div className="hero-image">
            <img src={heroImg} alt="Inventory" width= "700px" height= "525px" />
            
        </div>
      </section>
    </div>
        
  )
}

const NumberText = ({ num, text }) => {
    return (
      <div className="--mr">
        <h3 className="--color-white">{num}</h3>
        <p className="--color-white">{text}</p>
      </div>
    );
  };

export default Home; 