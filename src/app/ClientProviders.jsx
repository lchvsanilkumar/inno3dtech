// src/ClientOnlyProviders.js
"use client";

import { SessionProvider } from "next-auth/react";

import { CartProvider } from "../context/CartContext";

const ClientOnlyProviders = ({ children }) => {
  return (
    <SessionProvider>
        <CartProvider>
          {children}
        </CartProvider>
    </SessionProvider>
  );
};

export default ClientOnlyProviders;
