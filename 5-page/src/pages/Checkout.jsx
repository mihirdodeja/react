import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cartTotal, cartCount, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // Simulate order processing
    toast.success('Processing your order...');
    setTimeout(() => {
      clearCart();
      setPlaced(true);
    }, 1500);
  };

  if (placed) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '5rem' }}></i>
        <h1 className="mt-4 fw-bold">Order Placed Successfully!</h1>
        <p className="lead text-muted mb-4">Thank you for shopping with ShopZon, {user?.name}. Your order will be delivered soon.</p>
        <Link to="/" className="btn btn-amazon fs-5 px-5 py-2 rounded-pill shadow">Continue Shopping</Link>
      </div>
    );
  }

  if (cartCount === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>No items to checkout</h2>
        <Link to="/" className="btn btn-amazon mt-3">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Checkout</h2>
      
      <div className="row g-4">
        <div className="col-lg-8">
          {/* Shipping Address */}
          <div className="card shadow-sm mb-4 border-0">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0 fw-bold">1. Shipping Address</h5>
            </div>
            <div className="card-body">
              <p className="mb-1 fw-bold">{user?.name}</p>
              <p className="mb-1">123 Amazon Way</p>
              <p className="mb-1">Seattle, WA 98109</p>
              <p className="mb-0">United States</p>
              <a href="#" className="text-decoration-none small mt-2 d-inline-block">Add delivery instructions</a>
            </div>
          </div>

          {/* Payment Method */}
          <div className="card shadow-sm mb-4 border-0">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0 fw-bold">2. Payment Method</h5>
            </div>
            <div className="card-body">
              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="paymentMethod" id="card" defaultChecked />
                <label className="form-check-label fw-bold d-flex align-items-center" htmlFor="card">
                  <i className="bi bi-credit-card mx-2 text-primary"></i> Credit or debit card
                </label>
                <div className="mt-2 text-muted small ms-4">
                  ShopZon accepts all major credit and debit cards.
                </div>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="paymentMethod" id="cod" />
                <label className="form-check-label fw-bold d-flex align-items-center" htmlFor="cod">
                  <i className="bi bi-cash mx-2 text-success"></i> Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: '80px' }}>
            <div className="card-body">
              <button 
                className="btn btn-amazon btn-lg w-100 rounded-pill shadow-sm mb-3"
                onClick={handlePlaceOrder}
              >
                Place your order
              </button>
              <p className="small text-center text-muted mb-4 border-bottom pb-3">
                By placing your order, you agree to ShopZon's privacy notice and conditions of use.
              </p>
              
              <h5 className="fw-bold mb-3">Order Summary</h5>
              
              <div className="d-flex justify-content-between mb-2 small">
                <span>Items ({cartCount}):</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2 small">
                <span>Shipping & handling:</span>
                <span>$0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2 small">
                <span>Total before tax:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 small border-bottom pb-3">
                <span>Estimated tax to be collected:</span>
                <span>${(cartTotal * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-1 fs-5 fw-bold text-danger">
                <span>Order total:</span>
                <span>${(cartTotal * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
