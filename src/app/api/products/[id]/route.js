import { connect } from "@/utils/db"; // Adjust the path according to your project structure
import Product from "@/models/Product"; // Adjust the path according to your project structure
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await connect();

  const { id } = params;

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
