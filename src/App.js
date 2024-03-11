// App.js
import React from 'react';
import './App.css';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';

function App() {
  return (
    <div className="App">
      <div className="side-by-side">
        <ProductsManagement />
        <OrdersManagement />
      </div>
    </div>
  );
}

export default App;
