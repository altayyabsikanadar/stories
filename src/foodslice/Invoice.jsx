import React from 'react';
import './Invoice.css'; // Import your CSS file

const Invoice = () => {
  const burgerItems = [
    { name: 'Vegetable Burger', price: 25, image: '/images/meat-burger.png' }, // Replace with your image paths
    { name: 'Meat Burger', price: 28, image: '/images/meat-burger.png' },
    { name: 'Cheese Burger', price: 32, image: '/images/cheese_burger.jpg' },
  ];

  const subTotal = burgerItems.reduce((sum, item) => sum + item.price, 0);
  const tax = 6; // You might want to calculate tax dynamically
  const total = subTotal + tax;

  return (
    <div className="burger-order">
      <h2 className="invoice-title">Invoice</h2>

      <ul className="burger-list">
        {burgerItems.map((item, index) => (
          <li key={index} className="burger-item">
            <img src={item.image} alt={item.name} className="burger-image" />
            <div className="burger-details">
              <span className="burger-name">{item.name}</span>
              <span className="burger-price">${item.price}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="payment-summary">
        <div className="summary-item">
          <span>Sub Total</span>
          <span>${subTotal}</span>
        </div>
        <div className="summary-item">
          <span>Tax</span>
          <span>${tax}</span>
        </div>
        <div className="summary-item total"> {/* Highlight the total */}
          <span>Total Payment</span>
          <span>${total}</span>
        </div>
      </div>

      <div className="payment-method">
        <h3>Payment Method</h3>
        <div className="payment-options"> {/* Use a wrapping div */}
          <img src="/images/mastercard.png" alt="Mastercard" /> {/* Replace with your image paths */}
          <img src="/images/visa.png" alt="Visa" />
          <img src="/images/paypal.png" alt="PayPal" />
        </div>
      </div>

      <button className="order-button">Place An Order Now</button>
    </div>
  );
};

export default Invoice;
