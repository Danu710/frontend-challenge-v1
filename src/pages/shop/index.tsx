import React, { useEffect } from "react";
import { useCart } from "@/context/cart-context";

const ProductList: React.FC = () => {
  const {} = useCart();

  useEffect(() => {}, []);

  return <div className="max-w-6xl mx-auto mt-6"></div>;
};

export default ProductList;
