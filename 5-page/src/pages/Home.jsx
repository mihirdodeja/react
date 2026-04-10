import React, { useState, useEffect, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductContext';

const Home = ({ searchQuery }) => {
  const { products } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  useEffect(() => {
    // Simulate network delay to show loading state
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-5">
      {/* Hero Banner */}
      <div 
        className="position-relative text-center d-flex align-items-center justify-content-center" 
        style={{
          height: '400px',
          backgroundImage: 'linear-gradient(to right, #232f3e, #131921)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white'
        }}
      >
        <div className="z-1 px-4">
          <h1 className="display-4 fw-bold mb-3">Welcome to ShopZon</h1>
          <p className="lead fw-light">Discover the best products at unbeatable prices.</p>
          <button className="btn btn-amazon btn-lg mt-3 px-5 rounded-pill shadow">Shop Now</button>
        </div>
        {/* Subtle overlay gradient */}
        <div className="position-absolute bottom-0 w-100" style={{ height: '100px', background: 'linear-gradient(to top, var(--background-light), transparent)' }}></div>
      </div>

      <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 2 }}>
        
        {/* Category Filters */}
        <div className="bg-white p-3 rounded-3 shadow-sm mb-4 d-flex justify-content-center flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn rounded-pill px-4 ${activeCategory === category ? 'btn-amazon' : 'btn-outline-secondary'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '400px' }}>
            <div className="spinner-border text-amazon-yellow" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pt-3">
            {filteredProducts.map(product => (
              <div className="col" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
            <h3>No products found</h3>
            <p className="text-muted">Try adjusting your search or category filter.</p>
            <button className="btn btn-outline-dark mt-3" onClick={() => { setActiveCategory("All"); }}>Reset Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
