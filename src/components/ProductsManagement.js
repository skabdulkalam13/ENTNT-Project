// ProductsManagement.js
import React, { useState } from 'react';
import productsData from '../data/products.json';

const ProductsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredProducts = productsData.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    
    <div className="App-content">
      <h2 className='h2'>Products Management</h2>
      <div className="product-search">
        <input 
          type="text" 
          placeholder="Search by name or category" 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
      </div>
      {filteredProducts.length > 0 ? (
        <ul className="product-list">
          {filteredProducts.map(product => (
            <li key={product.id} className="product-list-item">
              <div>Name: {product.name}</div>
              <div>Category: {product.category}</div>
              <div>Price: ${product.price}</div>
              <div>Stock Quantity: {product.stock_quantity}</div>
              {/* Add edit and delete functionalities */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products match the search criteria.</p>
      )}
    </div>
    
  );
};

export default ProductsManagement;
