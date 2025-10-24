// src/app/cart/page.js
"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

const containerStyle = {
  padding: "1rem",
  backgroundColor: "#f9f9f9",
};

const emptyCartStyle = {
  textAlign: "center",
};

const cartItemStyle = {
  borderBottom: "1px solid #ddd",
  padding: "1rem 0",
  display: "flex",
  alignItems: "center",
};

const itemNameStyle = {
  fontSize: "1.2rem",
  fontWeight: "bold",
};

const itemPriceStyle = {
  color: "#555",
};

const itemQuantityStyle = {
  color: "#777",
};

const buttonStyle = {
  backgroundColor: "#ff4d4d",
  color: "#fff",
  border: "none",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  borderRadius: "5px",
  marginTop: "0.5rem",
};

const linkStyle = {
  display: "inline-block",
  marginTop: "1rem",
  color: "#004aac",
  textDecoration: "none",
};

const imageStyle = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
  marginRight: "1rem",
};

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("/api/cart", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setCartItems(data.items || []);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };

    fetchCartItems();
  }, []);

  if (cartItems.length === 0) {
    return (
      <div style={containerStyle}>
        <h1>Your Cart</h1>
        <p style={emptyCartStyle}>Your cart is empty.</p>
        <Link href="/" style={linkStyle}>
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.productId} style={cartItemStyle}>
            <img src={item.image} alt={item.name} style={imageStyle} />
            <div style={{ display: "inline-block" }}>
              <h2 style={itemNameStyle}>{item.name}</h2>
              <p style={itemPriceStyle}>Unit Price: ₹{item.price}</p>
              <p style={itemQuantityStyle}>Quantity: {item.quantity}</p>
              <p style={itemPriceStyle}>
                Total Price: ₹{item.price * item.quantity}
              </p>
              <button
                style={buttonStyle}
                onClick={() => removeFromCart(item.productId)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/" style={linkStyle}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default CartPage;
