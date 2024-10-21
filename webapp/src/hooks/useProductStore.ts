import ProductContext from "@/contexts/product-store";
import { useContext } from "react";

export function useProductStore() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductStore must be used within a ProductProvider");
  }
  return context;
}
