import React from 'react';
import ordersData from '../data/orders.json';

const OrdersManagement = () => {
  return (
    <div>
      <h2 className='h2'>Orders Management</h2>
      <ul>
        {ordersData.map(order => (
          <li key={order.id}>
            <div>Order ID: {order.id}</div>
            <div>Customer Name: {order.customer_name}</div>
            <div>Order Date: {order.order_date}</div>
            <div>Status: {order.status}</div>
            {/* Add functionalities to view order details, update status, delete orders */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersManagement;
