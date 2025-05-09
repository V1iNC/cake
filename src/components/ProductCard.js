import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} ₽</p>
      <button onClick={() => addToCart(product)}>В корзину</button>
    </div>
  );
};

export default ProductCard;
