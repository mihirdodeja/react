import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Admin = () => {
  const { products, addProduct, editProduct, deleteProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    image: '',
    rating: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price || !formData.image) {
      toast.warning('Please fill in at least title, price, and image address.');
      return;
    }

    const payload = {
      ...formData,
      price: parseFloat(formData.price),
      rating: formData.rating ? parseFloat(formData.rating) : 0
    };

    if (isEditing) {
      editProduct(currentId, payload);
    } else {
      addProduct(payload);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({ title: '', price: '', category: '', image: '', rating: '', description: '' });
    setIsEditing(false);
    setCurrentId(null);
  };

  const handleEditClick = (product) => {
    setIsEditing(true);
    setCurrentId(product.id);
    setFormData({
      title: product.title,
      price: product.price,
      category: product.category || '',
      image: product.image,
      rating: product.rating || '',
      description: product.description || ''
    });
    // Scroll to top to see the form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
    }
  };

  // Simplistic admin guard: require login. (In real-world, check user.role)
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Admin Dashboard (Product CRUD)</h2>
      
      <div className="row">
        <div className="col-12 col-md-5 mb-4">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: '80px' }}>
            <div className="card-header bg-amazon text-white">
              <h5 className="mb-0">{isEditing ? 'Edit Product' : 'Add New Product'}</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Title</label>
                  <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label fw-bold">Price ($)</label>
                    <input type="number" step="0.01" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
                  </div>
                  <div className="col">
                    <label className="form-label fw-bold">Rating</label>
                    <input type="number" step="0.1" min="0" max="5" className="form-control" name="rating" value={formData.rating} onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Category</label>
                  <input type="text" className="form-control" name="category" value={formData.category} onChange={handleChange} placeholder="e.g. Electronics, Fashion" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Image URL</label>
                  <input type="text" className="form-control" name="image" value={formData.image} onChange={handleChange} placeholder="https://..." required />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold">Description</label>
                  <textarea className="form-control" name="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
                </div>
                
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-amazon flex-grow-1">
                    {isEditing ? 'Save Changes' : 'Add Product'}
                  </button>
                  {isEditing && (
                    <button type="button" className="btn btn-outline-secondary" onClick={resetForm}>
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-light">
              <h5 className="mb-0 fw-bold">Current Products ({products.length})</h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" className="ps-3">Item</th>
                      <th scope="col">Price</th>
                      <th scope="col">Category</th>
                      <th scope="col" className="text-end pe-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(p => (
                      <tr key={p.id}>
                        <td className="ps-3">
                          <div className="d-flex align-items-center gap-2">
                            <img src={p.image} alt={p.title} width="40" height="40" style={{ objectFit: 'contain' }} onError={(e) => { e.target.src = 'https://via.placeholder.com/40'; }} />
                            <span className="text-truncate d-inline-block" style={{ maxWidth: '150px' }} title={p.title}>{p.title}</span>
                          </div>
                        </td>
                        <td>${Number(p.price).toFixed(2)}</td>
                        <td><span className="badge bg-secondary">{p.category}</span></td>
                        <td className="text-end pe-3">
                          <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEditClick(p)}>
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteClick(p.id)}>
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
