import React, { createContext, useState, useEffect } from 'react';
import { productsData as initialData } from '../data/products';
import { toast } from 'react-toastify';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      // Merge saved products with the new image URLs from initialData
      let parsedProducts = JSON.parse(savedProducts);
      parsedProducts = parsedProducts.map(p => {
        const defaultProduct = initialData.find(initP => initP.id === p.id);
        if (defaultProduct) {
          return { ...p, image: defaultProduct.image };
        }
        return p;
      });
      setProducts(parsedProducts);
      localStorage.setItem('products', JSON.stringify(parsedProducts));
    } else {
      setProducts(initialData);
      localStorage.setItem('products', JSON.stringify(initialData));
    }
  }, []);

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    toast.success('Product added successfully!');
  };

  const editProduct = (id, updatedData) => {
    const updatedProducts = products.map(p => p.id === id ? { ...p, ...updatedData } : p);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    toast.success('Product updated successfully!');
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    toast.success('Product deleted successfully!');
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, editProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
