import { useDebounce } from "@/hooks/useDebounce";
import { useProduct } from "@/hooks/useProduct";
import { ProductFilters, ProductResponse } from "@/types/product";
import { createContext, useState, ReactNode, useMemo } from "react";

type TContext = {
  data: ProductResponse | undefined;
  error: Error | null;
  isLoading: boolean;
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
  isSearchPresent: boolean;
};

type TContextProviderProps = {
  children: ReactNode;
};

const ProductContext = createContext<TContext | undefined>(undefined);

export function ProductContextStore({ children }: TContextProviderProps) {
  const [filters, setFilters] = useState<ProductFilters>({
    limit: 12,
    skip: 0,
  } as ProductFilters);
  const debounceFilters = useDebounce(filters, 500);
  const { data, error, isLoading } = useProduct(debounceFilters);
  const isSearchPresent = filters.q !== undefined && filters.q !== "";

  const value = useMemo(
    () => ({
      data,
      error,
      isLoading,
      filters,
      setFilters,
      isSearchPresent,
    }),
    [data, error, isLoading, filters, setFilters, isSearchPresent]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductContext;
