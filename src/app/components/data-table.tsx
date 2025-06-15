"use client";
import { motion } from "framer-motion";

interface DataTableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
  className?: string;
}

export const DataTable = <T,>({ 
  headers, 
  data, 
  renderRow,
  className = ""
}: DataTableProps<T>) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-800 text-left">
            <tr>
              {headers.map((header, index) => (
                <th 
                  key={index}
                  className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((item, index) => (
              <tr 
                key={index}
                className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {renderRow(item)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};