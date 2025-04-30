import React from 'react';

const Profile = () => {
  return (
    <section className="page profile">
      <div className="container">
        <h1>Личный кабинет</h1>
        <div className="user-info">
          <p><strong>Имя:</strong> Иван Иванов</p>
          <p><strong>Email:</strong> ivan@example.com</p>
          <p><strong>Телефон:</strong> +7 900 000-00-00</p>
        </div>
        <div className="order-history">
          <h2>История заказов</h2>
          {/* Здесь будет список заказов */}
        </div>
        <div className="settings">
          <h2>Настройки</h2>
          {/* Здесь будут формы для изменения данных */}
        </div>
        <button className="logout-button">Выйти</button>
      </div>
    </section>
  );
};

export default Profile;
