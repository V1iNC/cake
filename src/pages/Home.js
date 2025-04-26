import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section className="home">
    <div className="container home-content">
      <h2>Индивидуальные торты на заказ в Москве</h2>
      <p>Создаём сладкие шедевры на любое событие: свадьбы, дни рождения, корпоративы и просто к чаю.</p>
      <Link to="/catalog" className="btn">Перейти в каталог</Link>
    </div>
  </section>
);

export default Home;
