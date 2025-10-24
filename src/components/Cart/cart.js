"use client";
import React from "react";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import "./cart.css";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        <Link href="/products" className="shop-now">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-image">
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              objectFit="cover"
            />
          </div>
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ₹{item.price * item.quantity}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="checkout-section">
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
