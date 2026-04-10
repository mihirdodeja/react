import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    // Simulate fetch
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    }, 500);
  }, [id, products]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const renderStars = (rating) => {
    // Rating could be undefined if a new product is added without validation, fallback to 0
    const validRating = rating || 0;
    const stars = [];
    const fullStars = Math.floor(validRating);
    const hasHalfStar = validRating % 1 !== 0;

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

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-amazon-yellow" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>
        <Link to="/" className="btn btn-outline-dark mt-3">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/">{product.category}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{product.title}</li>
        </ol>
      </nav>

      <div className="row g-5 mt-2 bg-white p-4 rounded-4 shadow-sm">
        {/* Product Image */}
        <div className="col-md-5 d-flex align-items-center justify-content-center p-4" style={{ height: '500px', backgroundColor: '#fdfdfd', borderRadius: '12px', border: '1px solid #efefef' }}>
          <img 
            src={product.image} 
            alt={product.title} 
            className="img-fluid" 
            style={{ maxHeight: '100%', objectFit: 'contain' }}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=No+Image'; }}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-7 d-flex flex-column">
          <h2 className="fw-bold mb-3">{product.title}</h2>
          
          <div className="mb-3 fs-5">
            {renderStars(product.rating)}
            <span className="ms-2 text-primary">{product.rating || 0} rating</span>
          </div>

          <hr className="opacity-25 my-3" />

          <div className="mb-4">
            <span className="fs-5 align-top opacity-75">$</span>
            <span className="display-5 fw-bold">{Number(product.price).toFixed(2)}</span>
          </div>

          <div className="mb-4 flex-grow-1">
            <h5 className="fw-bold mb-2 pt-2">About this item</h5>
            <p className="fs-5 text-muted lh-base">{product.description}</p>
          </div>

          <div className="p-4 border rounded-3 bg-light shadow-sm">
            <div className="mb-4 d-flex align-items-center">
              <label className="fw-bold me-3">Quantity:</label>
              <select 
                className="form-select w-auto fw-bold" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </div>

            <div className="d-grid gap-3">
              <button 
                className="btn btn-amazon btn-lg rounded-pill fw-bold shadow-sm"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button 
                className="btn btn-lg rounded-pill fw-bold shadow-sm text-white"
                style={{ backgroundColor: '#ffa41c' }}
                onClick={handleAddToCart}
              >
                Buy Now
              </button>
            </div>
            
            <div className="mt-4 small text-muted d-flex gap-4 border-top pt-3">
              <div><i className="bi bi-shield-check fs-5 text-success d-block text-center mb-1"></i>Secure transaction</div>
              <div><i className="bi bi-box-seam fs-5 text-primary d-block text-center mb-1"></i>Fast Delivery</div>
              <div><i className="bi bi-arrow-return-left fs-5 text-info d-block text-center mb-1"></i>Free Returns</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
