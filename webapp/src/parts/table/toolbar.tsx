import { FilterWrapper, ToolbarContainer } from "@/ui-kit/table";
import { ReactElement, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./search-input";
import { useProductStore } from "@/hooks/useProductStore";

export const Toolbar = (): ReactElement => {
  const { filters, setFilters, isSearchPresent } = useProductStore();

  const handleSortChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilters({ ...filters, sortBy: e.target.value });
    },
    [filters, setFilters]
  );

  const toggleSortOrder = useCallback(() => {
    const newSortOrder = filters.order === "asc" ? "desc" : "asc";
    setFilters({ ...filters, order: newSortOrder });
  }, [filters, setFilters]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({ ...filters, q: e.target.value });
    },
    [filters, setFilters]
  );

  return (
    <ToolbarContainer>
      <SearchInput
        id="search"
        placeholder="Search product..."
        aria-label="Search through product"
        aria-describedby="search-description"
        value={filters.q}
        onChange={handleSearchChange}
      />
      <FilterWrapper>
        {!isSearchPresent && (
          <div className="flex items-center space-x-2">
            <span>Sort by:</span>
            <select
              value={filters.sortBy}
              onChange={handleSortChange}
              className="border border-gray-300 rounded p-2"
            >
              <option value="title">Title</option>
              <option value="price">Price</option>
            </select>
            <button onClick={toggleSortOrder} className="ml-2">
              <FontAwesomeIcon
                icon={filters?.order === "asc" ? faSortUp : faSortDown}
              />
            </button>
          </div>
        )}
      </FilterWrapper>
    </ToolbarContainer>
  );
};
