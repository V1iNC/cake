import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">Сладкий Чек</Link>
        <nav className="nav">
          <div 
            className="nav-item dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="nav-link">Каталог</span>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/catalog/cakes" className="dropdown-item">Торты</Link>
                <Link to="/catalog/pastries" className="dropdown-item">Пирожные</Link>
                <Link to="/catalog/baking" className="dropdown-item">Выпечка</Link>
              </div>
            )}
          </div>
          <Link to="/payment" className="nav-link">Оплата</Link>
          <Link to="/blog" className="nav-link">Блог</Link>
          <Link to="/sales" className="nav-link">Акции</Link>
          <Link to="/reviews" className="nav-link">Отзывы</Link>
          <Link to="/contact" className="nav-link">Контакты</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
