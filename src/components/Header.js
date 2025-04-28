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
          <Link to="/payment" onClick={() => setMenuOpen(false)}>Оплата</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Блог</Link>
          <Link to="/sales" onClick={() => setMenuOpen(false)}>Акции</Link>
          <Link to="/reviews" onClick={() => setMenuOpen(false)}>Отзывы</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Контакты</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
