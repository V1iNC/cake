import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container">
      <h1 className="logo">Сладкий Чек</h1>
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/contact">Контакты</Link>
      </nav>
    </div>
  </header>
);

export default Header;
