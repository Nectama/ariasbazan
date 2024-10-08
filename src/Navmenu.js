import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navmenu.css';
import CursosMenu from './Cursosmenu';

const Navmenu = () => {

  /* Handling opening and closing the mobile menu */

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ----------------------------------------------- */

  const [marcello, helloMarcello] = useState("tradicionales");


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
        {location.pathname === '/cursos' && path === '/cursos' && <div className="sub-nav"> <CursosMenu algo={marcello} setAlgo={helloMarcello} /> </div>}
      </li>
    );
  };

  /* ----------------------------------------------- */

  return (
    <>

      {/* There's 2 headers, CSS classes control which one shows (desktop or mobile) */}

      <header className='navMenu desktop'>
        <Link className='logo' to={'/'}><img src='./resources/ariasbazanlogo.png' alt='logo' /></Link>
        <div>
          <ul>
            <NavItem path="/" label="Inicio" />
            <NavItem path="/cursos" label="Cursos" />
            <NavItem path="/galeria" label="Galería" />
            <NavItem path="/nosotros" label="Nosotros" />
          </ul>
          <a className='contact' href='#'>Contacto</a>
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
            <NavItemMobile path="/galeria" label="Galería" />
            <NavItemMobile path="/nosotros" label="Nosotros" />
          </ul>
          <a className='contact' href='#'>Contacto</a>
        </div>

      </header>
    </>

  );
};

export default Navmenu;
