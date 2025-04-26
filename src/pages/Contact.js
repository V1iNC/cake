import React from 'react';

const Contact = () => (
  <section className="contact">
    <div className="container">
      <h2>Оставьте заявку на заказ</h2>
      <form className="contact-form">
        <label>
          Ваше имя:
          <input type="text" name="name" required />
        </label>
        <label>
          Телефон:
          <input type="tel" name="phone" required />
        </label>
        <label>
          Сообщение:
          <textarea name="message" rows="5" />
        </label>
        <button type="submit" className="btn">Отправить</button>
      </form>
    </div>
  </section>
);

export default Contact;
