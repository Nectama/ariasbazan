import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navmenu.css';
import CursosMenu from './Cursosmenu';

const Navmenu = ({ courseType, setselectedCourseType }) => {

  const sucursales = [
    {
      localizacion: "Sucursal Central",
      direccion: "Obispo Trejo 331 3E | Córdoba, Argentina",
      telefono: "+54 9 351-6526268",
      correo: "info@ariasbazan.com"
    },
  ]

  /* Handling opening and closing the mobile menu */

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ----------------------------------------------- */


  /* Handling location so the current location is displayed in bold letters in the menu */



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

  const NavItemMobile = ({ path, label }) => {
    const active = isActive(path);

    return (
      <li className={active ? 'active' : ''}>
        <Link to={path}>{label}</Link>
        {location.pathname === '/cursos' && path === '/cursos' && <div className="sub-nav"> <CursosMenu courseType={courseType} setselectedCourseType={setselectedCourseType} /> </div>}
      </li>
    );
  };

  /* ----------------------------------------------- */

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
    <>

      {/* There's 2 headers, CSS classes control which one shows (desktop or mobile) */}

      <header className='navMenu desktop'>
        <Link className='logo' to={'/'}><img src='./resources/ariasbazanlogo.png' alt='logo' /></Link>
        <div>
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

      <div id="menuOverlay" onClick={closeMenu} style={{ display: menuOpen ? 'block' : 'none' }}></div>
      <header className='navMenu mobile'>
        <Link className='logo' to={'/'}><img src='./resources/ariasbazanlogo.png' alt='logo' /></Link>
        <button className="menuButton" onClick={toggleMenu}>Menu</button>
        <div id="menuLinks" className={menuOpen ? 'show' : ''}>
          <ul>
            <NavItemMobile path="/" label="Inicio" />
            <NavItemMobile path="/cursos" label="Cursos" />
            <NavItem path="/servicios" label="Servicios" />
            <NavItemMobile path="/galeria" label="Galería" />
            <NavItem path="/bio" label="Bio" />
          </ul>
          <button className='contact' onClick={handleOpenModal}>Contacto</button>
        </div>

      </header>

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
            <div className="whatsapp-button-wrapper">
              <a
                href="https://www.instagram.com/ariasbazan.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <img src="./resources/iconmonstr-instagram-11.svg" alt="WhatsApp" />
                @ariasbazan.oficial
              </a>
            </div>
            <div className="whatsapp-button-wrapper">
              <a
                href="https://www.instagram.com/aleariasbazan/"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <img src="./resources/iconmonstr-instagram-11.svg" alt="WhatsApp" />
                @aleariasbazan
              </a>
            </div>
            <div className='sucursales'>
              <div className='sucursalesContainer'>
                {sucursales.map((sucursal, index) => (
                  <div className="sucursal" key={index}>
                    <p className="sucursalLocalizacion">{sucursal.localizacion}</p>
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

    </>

  );
};

export default Navmenu;
