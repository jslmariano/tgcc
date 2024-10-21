import { getProduct, searchProduct } from "@/api/product";
import { ProductFilters, ProductResponse } from "@/types/product";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";

export const useProduct = (
  filters: ProductFilters
): UseQueryResult<ProductResponse, Error> => {
  const queryFn = ({ signal }: { signal: AbortSignal }) => {
    if (filters.q) {
      return searchProduct(filters, signal);
    }
    return getProduct(filters, signal);
  };

  const queryKey = useMemo(() => ["product", filters], [filters]);

  return useQuery({
    queryKey,
    queryFn,
    retry: false,
  });
};
