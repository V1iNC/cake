import React from 'react';

const Contact = () => (
  <section className="page contact" id="contact">
    <div className="container" data-aos="fade-up">
      <h1>Связаться с нами</h1>
      <p>Заполните форму, и мы вам ответим!</p>
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
