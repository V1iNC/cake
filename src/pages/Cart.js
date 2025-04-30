import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <section className="page cart">
      <div className="container">
        <h1>Корзина</h1>
        {cartItems.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.price} ₽ × {item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <p><strong>Итого: {totalPrice.toFixed(2)} ₽</strong></p>
              <button className="checkout-button">Оформить заказ</button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
