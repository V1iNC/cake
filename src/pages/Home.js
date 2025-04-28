import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section className="home">
    <div className="container home-content">
      <h2>Индивидуальные торты на заказ в Воронеже</h2>
      <p>Создаём сладкие шедевры на любое событие: свадьбы, дни рождения, корпоративы и просто к чаю.</p>
      <Link to="/catalog" className="btn">Перейти в каталог</Link>
    </div>
  </section>
);
<section className="page home">
  <div className="container" data-aos="fade-up">
    <h1>Добро пожаловать в Sweet Treats!</h1>
    <p>Лучшие торты и пирожные в Воронеже!</p>
  </div>
</section>

export default Home;
