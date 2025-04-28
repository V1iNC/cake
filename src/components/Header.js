import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <Link to="/">Sweet Treats</Link>
        </div>

        <div className="burger" onClick={toggleMenu}>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </div>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <div className="dropdown" onClick={toggleDropdown}>
            <span>Каталог</span>
            <div className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
              <Link to="/catalog/cakes" className="dropdown-item" onClick={() => setMenuOpen(false)}>Торты</Link>
              <Link to="/catalog/pastries" className="dropdown-item" onClick={() => setMenuOpen(false)}>Пирожные</Link>
              <Link to="/catalog/baking" className="dropdown-item" onClick={() => setMenuOpen(false)}>Выпечка</Link>
            </div>
          </div>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Оплата</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Блог</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Акции</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Отзывы</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
