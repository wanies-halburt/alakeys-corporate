"use client";

import { useEffect } from "react";
import shopStore from "@/store/shopStore";

export const useInitializeProducts = () => {
  const getAllProducts = shopStore((state) => state.getAllProducts);
  const getCart = shopStore((state) => state.getCart);
  const products = shopStore((state) => state.products);

  useEffect(() => {
    // Only fetch if products is empty (to prevent duplicate fetches across pages)
    if (!products || products.length === 0) {
      getAllProducts();
    }
    if (localStorage.getItem("alakeys-token")) {
      getCart();
    }
  }, []);
};
