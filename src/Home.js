import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import { Link, useLocation } from 'react-router-dom';
import './Home.css';
import Navmenu from './Navmenu.js';

function Homepage() {

  /* var containing paths to all images displayed in the homepage grid */

  const homeGallery1 = [];
  const homeGallery2 = [];
  const homeGallery3 = [];
  for (let i = 1; i <= 10; i++) {
    homeGallery1.push(`./resources/gallery/${i}.jpg`);
    homeGallery2.push(`./resources/gallery/${10 + i}.jpg`);
    homeGallery3.push(`./resources/gallery/${20 + i}.jpg`);
  }

  /* Settings for the react-slick slider */

  const settings = {

    className: "sliderColumn",
    vertical: true,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: "linear"
  };


  /* Settings variation for the middle column's inverse sliding direction*/

  const settings2 = {

    className: "sliderColumn",
    vertical: true,
    pauseOnHover: false,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: -1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 8000,
    cssEase: "linear"
  };

  // --------------------------------------------------------------------

  /* Modal handling for Mobile Menu */

  const [openMenu, setMenuOpen] = useState(null);

  const openModal = (index) => {
    setMenuOpen(index);
    document.body.style.overflow = 'hidden'; // Disable body scrolling
  };

  const closeModal = () => {
    setMenuOpen(null);
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';// Enable body scrolling
  };

  // Cleanup effect to re-enable scrolling when the component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden'; // Enable scrolling on component unmount
    };
  }, []);

  // --------------------------------------------------------------------

  /* determine in which page the user is currently and display said location in bold letters inside the nav menu*/

  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const NavItem = ({ path, label }) => {
    const active = isActive(path);

    return (
      <li className={active ? 'active' : ''}>
        <Link to={path}>{label}</Link>
      </li>
    );
  };

  /*-----------------------------------------------------------------------------------*/

  return (
    <div className="homePage">
      <img className='backgroundDecoration' src='./resources/backgroundimg.webp' alt='' />
      <div className="mobile">
        <Navmenu />
      </div>
      <header className='homeMenu'>
        <Link to={'/'}><img src='./resources/ariasbazanlogo.png' alt='logo' className="desktop" /></Link>
        <h2 className="welcomeMessage">Bienvenido a <br /><span>Arias Bazán</span></h2>
        <Link to={'/cursos'} className="verCursos mobile">Ver cursos</Link>
        <div className="desktop">
          <ul>
            <NavItem path="/" label="Inicio" />
            <NavItem path="/cursos" label="Cursos" />
            <NavItem path="/galeria" label="Galería" />
            <NavItem path="/nosotros" label="Nosotros" />
          </ul>
          <a className='contact' href='#'>Contacto</a>
        </div>
      </header>


      <div className='homeGalleryContainer'>
        <div className="homeGallery">

          <div className="slider-container">

            <Slider {...settings}>
              {homeGallery1.map((image, index) => (
                <div className="imageContainer">
                  <img key={index} src={image} alt="" />
                </div>
              ))}
            </Slider>

          </div>

          <div className="slider-container">

            <Slider {...settings2}>
              {homeGallery2.map((image, index) => (
                <div className="imageContainer">
                  <img key={index} src={image} alt="" />
                </div>
              ))}
            </Slider>

          </div>

          <div className="slider-container">

            <Slider {...settings}>
              {homeGallery3.map((image, index) => (
                <div className="imageContainer">
                  <img key={index} src={image} alt="" />
                </div>
              ))}
            </Slider>

          </div>

        </div>
      </div>

    </div>

  );
}

export default Homepage;