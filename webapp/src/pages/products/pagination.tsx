import { useProductStore } from "@/hooks/useProductStore";
import { useCallback, useMemo } from "react";

/**
 * Pagination component
 *
 * @returns {JSX.Element}
 */
export function Pagination() {
  const { data, filters, setFilters } = useProductStore();

  const total = data?.total || 0;
  const limit = filters?.limit || 1;
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor((filters.skip || 0) / limit) + 1;

  /**
   * Handles page change
   * @param {number} page - The page number
   */
  const handlePageChange = useCallback(
    (page: number) => {
      setFilters({
        ...filters,
        skip: (page - 1) * limit,
      });
    },
    [filters, limit, setFilters]
  );

  const pageNumbers = useMemo(() => {
    const maxPageNumbersToShow = 5;
    const halfPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);
    let startPage = Math.max(currentPage - halfPageNumbersToShow, 1);
    const endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

    // Adjust startPage if we don't have enough pages at the end
    if (endPage - startPage + 1 < maxPageNumbersToShow) {
      startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="flex justify-center mt-8">
      <nav>
        <ul className="inline-flex -space-x-px">
          {/* Previous Button */}
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-2 leading-tight border ${
                  currentPage === pageNumber
                    ? "text-blue-600 border-blue-300 bg-blue-50"
                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                {pageNumber}
              </button>
            </li>
          ))}

          {/* Next Button */}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
