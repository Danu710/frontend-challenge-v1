import React from "react";
import { useCart } from "@/context/cart-context";

const Cart: React.FC = () => {
  const {} = useCart();

  return <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg"></div>;
};

export default Cart;
