import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import { Link, useLocation } from 'react-router-dom';
import './Home.css';
import Navmenu from './Navmenu.js';

function Homepage() {

  const sucursales = [
    {
      localizacion: "Mina Clavero",
      director: "Rocío Badillo",
      direccion: "Intendente Urquiza 1131 | Mina Clavero, Córdoba (5889)",
      telefono: "03544-15646060",
      correo: "ariasbazanminaciavero@gmail.com"
    },
    {
      localizacion: "Villa Carlos Paz",
      director: "Silvana Sintora",
      direccion: "Florida 173 | Villa Carlos Paz, Córdoba (5152)",
      telefono: "03541-15577386",
      correo: "ariasbazancarlospaz@gmail.com"
    },
    {
      localizacion: "Río Tercero",
      director: "Alejandro Arias Bazan",
      direccion: "General Paz 227 (sede AGEC) | Río Tercero, Córdoba (5850)",
      telefono: "03571-414000 (int. 105)",
      correo: "info@ariasbazan.com"
    },
    {
      localizacion: "Beauty Store",
      director: "Alejandro Arias Bazan",
      direccion: "Obispo Trejo 331 3C | Capital, Córdoba (5000)",
      telefono: "03571-414000 (int. 105)",
      correo: "info@ariasbazan.com"
    },
    {
      localizacion: "Jesús María",
      director: "Ana Torres",
      direccion: "Torre Boulevard piso 1 | Jesús María, Córdoba (5220)",
      telefono: "03525-15518298",
      correo: "ariasbazanjm@gmail.com"
    },
    {
      localizacion: "Alta Gracia",
      director: "Guadalupe Sanchez",
      direccion: "Belgrano 77 piso 2 | Alta Gracia, Córdoba (5186)",
      telefono: "03547-15516077",
      correo: "ariasbazanag@gmail.com"
    },
    {
      localizacion: "Villa María",
      director: "Romina Bruera",
      direccion: "Santa Fe 598 1 piso Of. 3 | Villa María, Córdoba (5900)",
      telefono: "0353-154272068",
      correo: "ariasbazanvm@gmail.com"
    },
    {
      localizacion: "Pilar",
      director: "Paola Peralta",
      direccion: "Rafael Nuñez 1364 | Pilar, Córdoba (5972)",
      telefono: "03572-15407629",
      correo: "ariasbazanpilar@gmail.com"
    },
    {
      localizacion: "B° General Paz",
      director: "Romina Oga",
      direccion: "Ovidio Lagos 154 | Capital, Córdoba (5000)",
      telefono: "0351-153333001",
      correo: "ariasbazangeneralpaz@gmail.com"
    },
    {
      localizacion: "Arroyito",
      director: "Marianela Almada",
      direccion: "José A. Voco 470 | Arroyito, Córdoba (2434)",
      telefono: "03576-15414336",
      correo: "arroyito@ariasbazan.com"
    },
    {
      localizacion: "Villa Dolores",
      director: "Silvia Buzarquis",
      direccion: "Carcano esq. Presidente Perón | Villa Dolores, Córdoba (5870)",
      telefono: "03544-15639873",
      correo: "ariasbazanvilladol@gmail.com"
    },
    {
      localizacion: "Salta",
      director: "Juan Migel Murillo",
      direccion: "Edificio Palermo Bs.As 135. Tercer piso oficina 306 | Salta (4400)",
      telefono: "0387-4312314 / 0387-5445613",
      correo: "ariasbazansaltanew@gmail.com"
    }
  ]

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

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Optional cleanup in case modal is unmounted directly
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

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
            <NavItem path="/servicios" label="Servicios" />
            <NavItem path="/galeria" label="Galería" />
            <NavItem path="/bio" label="Bio" />
          </ul>
          <button className='contact' onClick={handleOpenModal}>Contacto</button>
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

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>×</button>
            <div className="whatsapp-button-wrapper">
              <a
                href="https://wa.me/5493516526268?text=Hola!%20Quisiera%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <img src="./resources/whatsapp-svgrepo-com.svg" alt="WhatsApp" />
                Enviar mensaje por WhatsApp
              </a>
            </div>
            <div className='sucursales'>
              <p className='sucursalesTitle'>Nuestras sucursales</p>
              <div className='sucursalesContainer'>
                {sucursales.map((sucursal, index) => (
                  <div className="sucursal" key={index}>
                    <p className="sucursalLocalizacion">{sucursal.localizacion}</p>
                    <p className="sucursalDirector">Director/a: <span className='bold'>{sucursal.director}</span></p>
                    <p className="sucursalDireccion">{sucursal.direccion}</p>
                    <p className="sucursaltelefono">Tel: {sucursal.telefono}</p>
                    <p className="sucursalCorreo">{sucursal.correo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>

  );
}

export default Homepage;