import React from "react";
import { useCart } from "@/context/cart-context";

const Navbar: React.FC = () => {
  const {} = useCart();

  return <nav className="bg-blue-600 p-4 shadow-md"></nav>;
};

export default Navbar;
