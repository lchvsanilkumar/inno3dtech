// src/app/display/page.jsx
import React from "react";
import Image from "next/image";

async function fetchProducts() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      console.error("Response not OK:", response.status, response.statusText);
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    console.log("Fetched products:", data);
    return data;
  } catch (error) {
    console.error("Error in fetchProducts:", error);
    throw error;
  }
}

const ProductsPage = async () => {
  const { products } = await fetchProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
