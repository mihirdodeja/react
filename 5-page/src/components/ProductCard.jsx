import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="bi bi-star-fill text-amazon-yellow"></i>);
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="bi bi-star-half text-amazon-yellow"></i>);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star text-amazon-yellow"></i>);
    }
    return stars;
  };

  return (
    <div className="card h-100 product-card shadow-sm">
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark d-block">
        <div className="product-image-container p-3">
          <img 
            src={product.image} 
            className="card-img-top" 
            alt={product.title} 
          />
        </div>
      </Link>
      <div className="card-body d-flex flex-column bg-light rounded-bottom pb-3">
        <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
          <h5 className="card-title text-truncate" title={product.title} style={{ fontSize: '1.1rem' }}>
            {product.title}
          </h5>
        </Link>
        <div className="mb-2 fs-5">
          {renderStars(product.rating)}
          <span className="ms-2 text-muted fs-6">{product.rating}</span>
        </div>
        <div className="fs-3 fw-bold mb-3 mt-auto">
          <span className="fs-5 align-top opacity-75">$</span>
          {product.price.toFixed(2)}
        </div>
        <button 
          className="btn btn-amazon w-100 rounded-pill py-2 shadow-sm"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
