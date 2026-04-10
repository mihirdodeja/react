import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amazon text-white mt-auto pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold mb-3">Get to Know Us</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 opacity-75">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press Releases</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold mb-3">Connect with Us</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 opacity-75">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold mb-3">Make Money with Us</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 opacity-75">
              <li><a href="#">Sell on ShopZon</a></li>
              <li><a href="#">Affiliate Marketing</a></li>
              <li><a href="#">Advertise Your Products</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5 className="fw-bold mb-3">Let Us Help You</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 opacity-75">
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Returns Centre</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-4 opacity-25" />
        <div className="text-center opacity-75 small">
          &copy; {new Date().getFullYear()} ShopZon. Built for demo purposes.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
