import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (user) {
      navigate('/checkout');
    } else {
      navigate('/login?redirect=checkout');
    }
  };

  if (cartCount === 0) {
    return (
      <div className="container py-5 mt-4 bg-white rounded-3 shadow-sm text-center" style={{ minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="Empty Cart" style={{ width: '300px', marginBottom: '20px' }} />
        <h2 className="mb-3">Your ShopZon Cart is empty</h2>
        <Link to="/" className="btn btn-amazon fs-5 px-4 shadow">Shop today's deals</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row g-4">
        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="bg-white p-4 rounded-3 shadow-sm">
            <h2 className="border-bottom pb-3 mb-4 fw-bold">Shopping Cart</h2>
            
            {cart.map(item => (
              <div key={item.id} className="row border-bottom py-4 align-items-center">
                <div className="col-4 col-sm-3 col-md-2 p-2">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.title} className="img-fluid rounded" style={{ maxHeight: '120px', objectFit: 'contain' }} />
                  </Link>
                </div>
                <div className="col-8 col-sm-9 col-md-10">
                  <div className="d-flex justify-content-between flex-wrap">
                    <div className="mb-2 pe-3" style={{ maxWidth: '70%' }}>
                      <Link to={`/product/${item.id}`} className="text-decoration-none text-dark fs-5 fw-bold d-block mb-1">
                        {item.title}
                      </Link>
                      <span className="text-success small fw-bold d-block mb-2">In Stock</span>
                    </div>
                    <div className="fw-bold fs-4">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mt-3 flex-wrap gap-3">
                    <div className="btn-group bg-light rounded-pill shadow-sm border" role="group">
                      <button 
                        type="button" 
                        className="btn btn-sm btn-light px-3 rounded-start-pill"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <span className="btn btn-sm btn-light disabled px-3 fw-bold text-dark">{item.quantity}</span>
                      <button 
                        type="button" 
                        className="btn btn-sm btn-light px-3 rounded-end-pill"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                    
                    <span className="text-muted mx-2">|</span>
                    
                    <button 
                      className="btn btn-link text-danger p-0 text-decoration-none"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-end pt-4">
              <span className="fs-5">Subtotal ({cartCount} items): </span>
              <span className="fs-4 fw-bold">${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="bg-white p-4 rounded-3 shadow-sm sticky-top" style={{ top: '80px' }}>
            <h4 className="border-bottom pb-3 mb-4 fw-bold">Order Summary</h4>
            
            <div className="d-flex justify-content-between mb-2 fs-5">
              <span>Items:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-3 fs-5 text-muted">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            
            <hr />
            
            <div className="d-flex justify-content-between mb-4 fs-4 fw-bold text-danger">
              <span>Order Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            
            <button 
              className="btn btn-amazon btn-lg w-100 rounded-pill shadow-sm"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
