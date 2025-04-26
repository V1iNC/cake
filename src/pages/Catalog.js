import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Catalog = () => (
  <section className="catalog">
    <div className="container">
      <h2>Каталог тортов</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default Catalog;
