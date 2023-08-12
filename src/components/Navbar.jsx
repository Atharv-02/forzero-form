import React, { useEffect, useState } from "react";
import navImage from "../assets/12th Project/Logo Files/PNGs & SVGs/1x/Asset 3.png";
import navNewImg from "../assets/12th Project/Logo Files/PNGs & SVGs/1x/Asset 2.png";
import "../Navbar.css";
import co2 from "../assets/orange-co2-icon.avif";
import forest from "../assets/green-forest-icon.avif";
// import aboutIcon from "../assets/blue-icon.avif";
import { useNavigate } from "react-router-dom";

const Navbar = ({ params }) => {
  const [navShow, setNavShow] = useState(false);
  const [newImg, setNewImg] = useState();
  const navigate = useNavigate();

  return (
    <div className='navbar-full' id='navbar-full'>
      <nav className={`navbar bl-nav `} id='navbar'>
        <div className='img-nav'>
          <img src={navNewImg} alt='' />
        </div>
        <ul className='nav-items'>
          <li className='item' onClick={() => navigate("/our-projects")}>
            Our Projects
          </li>
          <li className='item' onClick={() => navigate("/our-approach")}>
            Our Approach
          </li>
          {/* <li className='item'>Contact Us</li> */}
          <li className='btn-item item'>
            <a href='https://dancing-frangipane-786e1e.netlify.app/'>
              <button className='btn nav-btn'>Get Started</button>
            </a>
          </li>
        </ul>
        <div className='btn-lines'>
          <div className='btn-cont'>
            <a href='https://dancing-frangipane-786e1e.netlify.app/'>
              <button className='btn nav-btn'>Get Started</button>
            </a>
          </div>
          <div
            className={`lines `}
            onClick={() => {
              setNavShow(!navShow);
            }}
          >
            <div
              className={`line line-1 black ${navShow ? "cross-nav" : null}`}
            ></div>
            <div
              className={`line line-2 black ${navShow ? "rev-cross" : null}`}
            ></div>
          </div>
        </div>
      </nav>
      {navShow && (
        <nav className={`sm-nav ${navShow ? "wh " : null}`} id='sm-nav'>
          <ul className='sm-nav-items'>
            <li className='sm-item'>
              <div className='sm-img' onClick={() => navigate("/our-approach")}>
                <img src={co2} alt='' />
              </div>
              <div
                className='sm-img-text'
                onClick={() => navigate("/our-approach")}
              >
                Our Approach
                <p>Understanding the impact of offsets</p>
              </div>
            </li>
            <li className='sm-item'>
              <div className='sm-img' onClick={() => navigate("/our-projects")}>
                <img src={forest} alt='' />
              </div>
              <div
                className='sm-img-text'
                onClick={() => navigate("/our-projects")}
              >
                Our Projects
                <p>See how offset carbon works</p>
              </div>
            </li>

            {/* <li className='sm-item'>
              <div className='sm-img'>
                <img src={aboutIcon} alt='' />
              </div>
              <div className='sm-img-text'>
                Contact Us
                <br />
                Understanding the impact of offsets
              </div>
            </li> */}

            <li className='sm-btn-item sm-item'>
              <button className='btn sm-nav-btn'>Get Started</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
