"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../components/ProductPage/main.css";

const ProductDetailsPage = () => {
  const { addToCart } = useCart();
  const [count, setCount] = useState(1);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const imageUrl = searchParams.get("imageUrl");
  const description = searchParams.get("description");

  const product = { name, price, imageUrl, description };

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = async () => {
    if (product && count > 0) {
      try {
        await addToCart({ ...product, quantity: count });
        toast.success(`${product.name} added to cart!`);
      } catch (error) {
        toast.error("Failed to add item to cart.");
      }
    } else {
      toast.error("Please select at least 1 item.");
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <section className="main">
        <div
          className="main-img"
          style={{ position: "relative", width: "100%", height: "300px" }}
        >
          <Image
            className="active"
            src={product.imageUrl}
            alt="product-img"
            height={400}
            width={400}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="content">
          <h3>INNO3DTECH</h3>
          <h2 className="product-name">{product.name}</h2>
          <p className="product-desc">{product.description}</p>
          <div className="price-info">
            <div className="price">
              <span className="current-price">₹{product.price}</span>
            </div>
          </div>
          <div className="add-to-cart-container">
            <div className="counter">
              <button className="minus" onClick={handleDecrease}>
                <svg width="12" height="4" viewBox="0 0 12 4">
                  <path
                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                    fill="#ffffff"
                  />
                </svg>
              </button>
              <span className="count">{count}</span>
              <button className="plus" onClick={handleIncrease}>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.69c0 .357.287.643.643.643h2.045a.641.641 0 0 0 .643-.643v-3.69h3.69A.641.641 0 0 0 12 7.022Z"
                    fill="#ffffff"
                  />
                </svg>
              </button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </section>
      <Link href="/">
        <button className="back-button">Back to Products</button>
      </Link>
    </div>
  );
};

export default ProductDetailsPage;
