import { cleanFilters } from "@/lib/utils";
import axios from "axios";
import { ProductFilters, ProductResponse } from "types/product";

/**
 * Fetches products data based on provided filters.
 * @param filters - The filters to apply to the products data.
 * @param signal - The AbortSignal to cancel the request if needed.
 * @returns A promise that resolves to an array of Product objects.
 */
export const getProduct = async (
  filters: ProductFilters,
  signal: AbortSignal
): Promise<ProductResponse> => {
  try {
    const params = cleanFilters(filters);
    const response = await axios.get(
      `${import.meta.env.VITE_PRODUCTS_LIST_ENDPOINT}`,
      {
        params: params,
        signal,
      }
    );
    return response?.data ?? { products: [], total: 0, skip: 0, limit: 0 };
  } catch (error) {
    if (axios.isCancel(error)) {
      return { products: [], total: 0, skip: 0, limit: 0 };
    } else {
      throw error;
    }
  }
};

/**
 * Searches products data based on provided filters.
 * @param filters - The filters to apply to the products data.
 * @param signal - The AbortSignal to cancel the request if needed.
 * @returns A promise that resolves to a ProductResponse object.
 */
export const searchProduct = async (
  filters: ProductFilters,
  signal: AbortSignal
): Promise<ProductResponse> => {
  try {
    const params = cleanFilters(filters);
    const response = await axios.get(
      `${import.meta.env.VITE_PRODUCTS_SEARCH_ENDPOINT}`,
      {
        params: params,
        signal,
      }
    );
    return response?.data ?? { products: [], total: 0, skip: 0, limit: 0 };
  } catch (error) {
    if (axios.isCancel(error)) {
      return { products: [], total: 0, skip: 0, limit: 0 };
    } else {
      throw error;
    }
  }
};
