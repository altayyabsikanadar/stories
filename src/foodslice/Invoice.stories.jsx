import React from "react";
import Invoice from "./Invoice";
import './Invoice.css';

export default {
  title: "Components/Invoice",
  component: Invoice,
};

const Template = (args) => <Invoice {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { name: "Vegetable Burger", price: 25 },
    { name: "Meat Burger", price: 28 },
    { name: "Cheese Burger", price: 32 },
  ],
  subTotal: 85,
  tax: 6,
  paymentMethods: [
    { name: "MasterCard", icon: "https://via.placeholder.com/40?text=MC" },
    { name: "PayPal", icon: "https://via.placeholder.com/40?text=PP" },
    { name: "Visa", icon: "https://via.placeholder.com/40?text=Visa" },
  ],
  onOrder: () => alert("Order placed!"),
};
