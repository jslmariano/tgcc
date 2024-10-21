import { useState, useEffect, useMemo } from "react";

/**
 * Custom hook that debounces a value.
 *
 * @template T - The type of the value being debounced.
 * @param {T} value - The value to be debounced.
 * @param {number} delay - The delay in milliseconds before the debounced value is updated.
 * @returns {T} - The debounced value.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  const memoizedValue = useMemo(() => value, [value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(memoizedValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [memoizedValue, delay]);

  return debouncedValue;
}
