mport React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Товар не найден</h2>;
  }

  return (
    <section className="product-details">
      <div className="container">
        <img src={product.image} alt={product.title} className="details-image" />
        <div className="details-content">
          <h2>{product.title}</h2>
          <p className="price">{product.price} ₽</p>
          <p>{product.description}</p>
          <button className="btn">Заказать</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
