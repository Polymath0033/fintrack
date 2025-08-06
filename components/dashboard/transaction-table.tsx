"use client";
import Badge from "../badge";
import { useState, useMemo} from "react";
import { useTransactions } from "@/context/transactions-context";
import type { SortColumn, SortDirection } from "../../types";

const TransactionTable: React.FC = () => {
  const { transactions } = useTransactions();
  const [activeDropdown, setActiveDropdown] = useState<SortColumn | null>(null);
  const [sortColumn, setSortColumn] = useState<SortColumn>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const toggleDropdown = (column: SortColumn) => {
    setActiveDropdown(activeDropdown === column ? null : column);
  };

  const handleSort = (column: SortColumn, direction: SortDirection) => {
    setSortColumn(column);
    setSortDirection(direction);
    setActiveDropdown(null);
  };

  const sortedTransactions = useMemo(() => {
    if (!transactions.length) return [];
    
    return [...transactions].sort((a, b) => {
      let aValue: any = a[sortColumn];
      let bValue: any = b[sortColumn];

      if (sortColumn === 'date') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (sortColumn === 'amount') {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }


      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  }, [transactions, sortColumn, sortDirection]);

  const formatAmount = (amount: number): string => {
    const absAmount = Math.abs(amount);
    const formattedAmount = absAmount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return amount >= 0 ? `$${formattedAmount}` : `-$${formattedAmount}`;
  };

  const renderDropdown = (column: SortColumn) => {
    if (activeDropdown !== column) return null;

    return (
      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[120px]">
        <button
          type="button"
          onClick={() => handleSort(column, 'asc')}
          className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
        >
          <span>↑</span> Sort A-Z
        </button>
        <button
          type="button"
          onClick={() => handleSort(column, 'desc')}
          className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
        >
          <span>↓</span> Sort Z-A
        </button>
      </div>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-separate [border-spacing:18px_0] min-w-[600px]">
        <thead>
          <tr>
            <th className="text-[13px] py-2 border-b-[1.5px] border-b-[#49656E33] leading-[123.007%] font-medium text-[#15272D9E] w-[30%]">
            <div className="flex items-center relative">
              <p>Date</p>
              <button 
                type="button" 
                className="ml-2"
                onClick={() => toggleDropdown('date')}
                aria-label="Sort date column"
                title="Sort date column"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className={`transition-transform ${activeDropdown === 'date' ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M9.86274 9.25C8.65111 9.25 8.04529 9.25 7.76477 9.48959C7.52136 9.69749 7.39218 10.0093 7.4173 10.3285C7.44624 10.6962 7.87462 11.1246 8.73137 11.9814L10.8686 14.1186C11.2646 14.5146 11.4627 14.7127 11.691 14.7868C11.8918 14.8521 12.1082 14.8521 12.309 14.7868C12.5373 14.7127 12.7354 14.5146 13.1314 14.1186L15.2686 11.9814C16.1254 11.1246 16.5538 10.6962 16.5827 10.3285C16.6078 10.0093 16.4786 9.69749 16.2352 9.48959C15.9547 9.25 15.3489 9.25 14.1373 9.25H9.86274Z"
                    fill="#15272D"
                    fillOpacity="0.62"
                  />
                </svg>
              </button>
              {renderDropdown('date')}
            </div>
          </th>
          <th className="text-[13px] py-2 border-b-[1.5px] border-b-[#49656E33] leading-[123.007%] font-medium text-[#15272D9E] w-[20%]">
            <div className="flex items-center relative">
              <p>Remark</p>
              <button 
                type="button" 
                className="ml-2"
                onClick={() => toggleDropdown('remark')}
                aria-label="Sort remark column"
                title="Sort remark column"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className={`transition-transform ${activeDropdown === 'remark' ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M9.86274 9.25C8.65111 9.25 8.04529 9.25 7.76477 9.48959C7.52136 9.69749 7.39218 10.0093 7.4173 10.3285C7.44624 10.6962 7.87462 11.1246 8.73137 11.9814L10.8686 14.1186C11.2646 14.5146 11.4627 14.7127 11.691 14.7868C11.8918 14.8521 12.1082 14.8521 12.309 14.7868C12.5373 14.7127 12.7354 14.5146 13.1314 14.1186L15.2686 11.9814C16.1254 11.1246 16.5538 10.6962 16.5827 10.3285C16.6078 10.0093 16.4786 9.69749 16.2352 9.48959C15.9547 9.25 15.3489 9.25 14.1373 9.25H9.86274Z"
                    fill="#15272D"
                    fillOpacity="0.62"
                  />
                </svg>
              </button>
              {renderDropdown('remark')}
            </div>
          </th>
          <th className="py-2 border-b-[1.5px] border-b-[#49656E33] text-[13px] leading-[123.007%] font-medium text-[#15272D9E] w-[20%]">
            <div className="flex items-center relative">
              <p>Amount</p>
              <button 
                type="button" 
                className="ml-2"
                onClick={() => toggleDropdown('amount')}
                aria-label="Sort amount column"
                title="Sort amount column"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className={`transition-transform ${activeDropdown === 'amount' ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M9.86274 9.25C8.65111 9.25 8.04529 9.25 7.76477 9.48959C7.52136 9.69749 7.39218 10.0093 7.4173 10.3285C7.44624 10.6962 7.87462 11.1246 8.73137 11.9814L10.8686 14.1186C11.2646 14.5146 11.4627 14.7127 11.691 14.7868C11.8918 14.8521 12.1082 14.8521 12.309 14.7868C12.5373 14.7127 12.7354 14.5146 13.1314 14.1186L15.2686 11.9814C16.1254 11.1246 16.5538 10.6962 16.5827 10.3285C16.6078 10.0093 16.4786 9.69749 16.2352 9.48959C15.9547 9.25 15.3489 9.25 14.1373 9.25H9.86274Z"
                    fill="#15272D"
                    fillOpacity="0.62"
                  />
                </svg>
              </button>
              {renderDropdown('amount')}
            </div>
          </th>
          <th className="py-2 border-b-[1.5px] border-b-[#49656E33] text-[13px] leading-[123.007%] font-medium text-[#15272D9E] w-[15%]">
            <div className="flex items-center relative">
              <p>Currency</p>
              <button 
                type="button" 
                className="ml-2"
                onClick={() => toggleDropdown('currency')}
                aria-label="Sort currency column"
                title="Sort currency column"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className={`transition-transform ${activeDropdown === 'currency' ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M9.86274 9.25C8.65111 9.25 8.04529 9.25 7.76477 9.48959C7.52136 9.69749 7.39218 10.0093 7.4173 10.3285C7.44624 10.6962 7.87462 11.1246 8.73137 11.9814L10.8686 14.1186C11.2646 14.5146 11.4627 14.7127 11.691 14.7868C11.8918 14.8521 12.1082 14.8521 12.309 14.7868C12.5373 14.7127 12.7354 14.5146 13.1314 14.1186L15.2686 11.9814C16.1254 11.1246 16.5538 10.6962 16.5827 10.3285C16.6078 10.0093 16.4786 9.69749 16.2352 9.48959C15.9547 9.25 15.3489 9.25 14.1373 9.25H9.86274Z"
                    fill="#15272D"
                    fillOpacity="0.62"
                  />
                </svg>
              </button>
              {renderDropdown('currency')}
            </div>
          </th>
          <th className="py-2 border-b-[1.5px] border-b-[#49656E33] text-[13px] leading-[123.007%] font-medium text-[#15272D9E] w-[15%]">
            <div className="flex items-center relative">
              <p>Type</p>
              <button 
                type="button" 
                className="ml-2"
                onClick={() => toggleDropdown('type')}
                aria-label="Sort type column"
                title="Sort type column"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className={`transition-transform ${activeDropdown === 'type' ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M9.86274 9.25C8.65111 9.25 8.04529 9.25 7.76477 9.48959C7.52136 9.69749 7.39218 10.0093 7.4173 10.3285C7.44624 10.6962 7.87462 11.1246 8.73137 11.9814L10.8686 14.1186C11.2646 14.5146 11.4627 14.7127 11.691 14.7868C11.8918 14.8521 12.1082 14.8521 12.309 14.7868C12.5373 14.7127 12.7354 14.5146 13.1314 14.1186L15.2686 11.9814C16.1254 11.1246 16.5538 10.6962 16.5827 10.3285C16.6078 10.0093 16.4786 9.69749 16.2352 9.48959C15.9547 9.25 15.3489 9.25 14.1373 9.25H9.86274Z"
                    fill="#15272D"
                    fillOpacity="0.62"
                  />
                </svg>
              </button>
              {renderDropdown('type')}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map((transaction) => (
          <tr key={transaction.id} className="border-b border-[#E0E0E0]">
            <td className="py-4.5 border-b-[1.5px] border-b-[#49656E33] text-[15px] leading-[133.333%] -tracking-[0.075px] text-secondary w-[30%]">{transaction.date}</td>
            <td className="py-4.5 border-b-[1.5px] border-b-[#49656E33] text-[15px] leading-[133.333%] -tracking-[0.075px] text-secondary w-[20%]">{transaction.remark}</td>
            <td className="py-4.5 border-b-[1.5px] border-b-[#49656E33] text-[15px] leading-[133.333%] -tracking-[0.075px] text-secondary w-[20%]">{formatAmount(transaction.amount)}</td>
            <td className="py-4.5 border-b-[1.5px] border-b-[#49656E33] text-[15px] leading-[133.333%] -tracking-[0.075px] text-secondary w-[15%]">{transaction.currency}</td>
            <td className="py-4.5 border-b-[1.5px] border-b-[#49656E33] text-[15px] leading-[133.333%] -tracking-[0.075px] text-secondary w-[15%]">
              <div className="flex items-center gap-2">
                <Badge status={transaction.type === 'Credit' ? 'positive' : 'negative'} title={transaction.type} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TransactionTable;
