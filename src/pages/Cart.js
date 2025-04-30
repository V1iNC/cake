import React from 'react';

const Cart = () => {
  return (
    <section className="page cart">
      <div className="container">
        <h1>Корзина</h1>
        <div className="cart-items">
          {/* Здесь будет список товаров */}
        </div>
        <div className="cart-summary">
          <input type="text" placeholder="Промокод" />
          <button>Применить</button>
          <div className="total">
            <span>Итого:</span>
            <span>₽0.00</span>
          </div>
          <button className="checkout-button">Оформить заказ</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
