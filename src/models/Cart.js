
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, // Associate cart with a user
    items: [
      {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String }, // Optional, for product images
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);

export default Cart;
