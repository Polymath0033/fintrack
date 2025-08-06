"use client";
import { useTransactions } from "@/context/transactions-context";

const SearchInput: React.FC = () => {
  const { searchQuery, filterTransactions } = useTransactions();

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    filterTransactions(query);
  };

  const clearSearch = () => {
    filterTransactions('');
  };

  return (
    <div className="relative flex items-center w-full max-w-md">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchQuery} // Use global state directly
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
        />
        {/* Search Icon */}
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        
        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;