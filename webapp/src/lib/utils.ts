type FilterValue = string | number | boolean | (string | number | boolean)[];

/**
 * Cleans the filters object by removing empty or null values and joining array values with a pipe delimiter.
 *
 * @param filters - The filters object to be cleaned.
 * @returns A new object with cleaned filters.
 */
export const cleanFilters = (
  filters: Record<string, FilterValue>
): Record<string, FilterValue> => {
  return Object.entries(filters).reduce(
    (acc, [key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        acc[key] = value;
      } else if (value) {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, FilterValue>
  );
};

export const isDev = () => import.meta.env.MODE === "development";
