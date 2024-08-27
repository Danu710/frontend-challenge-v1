import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "@/context/cart-context";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>

      <ToastContainer />
    </div>
  );
}
