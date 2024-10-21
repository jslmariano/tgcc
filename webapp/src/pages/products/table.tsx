import React from "react";
import { ProductCard } from "./product-card";
import { TableContainer } from "@/ui-kit/table";
import { Toolbar } from "@/parts/table/toolbar";
import { useProductStore } from "@/hooks/useProductStore";
import { Product } from "@/types/product";
import { Pagination } from "./pagination";
import CardLoader from "./card-loader";

interface ProductTableProps {}

export const ProductTable: React.FC<ProductTableProps> = () => {
  const { data, isLoading, isSearchPresent } = useProductStore();

  if (isLoading) {
    return (
      <TableContainer>
        <Toolbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12">
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </div>
      </TableContainer>
    );
  }

  if (data?.products?.length === 0) {
    return (
      <TableContainer>
        <Toolbar />
        <div className="text-center text-gray-500 mt-8">No products found</div>
      </TableContainer>
    );
  }

  const products = data?.products || [];

  return (
    <TableContainer>
      <Toolbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!isLoading && !isSearchPresent && <Pagination />}
    </TableContainer>
  );
};
