import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="page notfound">
      <div className="container">
        <h1>404</h1>
        <h2>Страница не найдена</h2>
        <p>К сожалению, запрашиваемая страница отсутствует или была удалена.</p>
        <Link to="/" className="btn">Вернуться на главную</Link>
      </div>
    </section>
  );
};

export default NotFound;
