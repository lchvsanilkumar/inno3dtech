// src/app/api/products/route.js

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Product from "@/models/Product";
import { getToken } from "next-auth/jwt";

export async function POST(request) {
  await connect();

  const { name, description, price, imageUrl } = await request.json();

  const newProduct = new Product({
    name,
    description,
    price,
    imageUrl,
  });

  try {
    await newProduct.save();
    return NextResponse.json(
      { message: "Product created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
export async function DELETE(request) {
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json(
      { message: "Product ID is required" },
      { status: 400 }
    );
  }

  await connect();

  try {
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connect();

  try {
    const products = await Product.find();
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
export async function GET_PRODUCT(request) {
  await connect();

  const { id } = request.url.split("/").pop();

  if (!id) {
    return NextResponse.json(
      { message: "Product ID is required" },
      { status: 400 }
    );
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
