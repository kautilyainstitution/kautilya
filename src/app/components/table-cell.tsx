"use client";

import { TableHTMLAttributes } from "react";

interface TableCellProps extends TableHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export const TableCell = ({ children, ...props }: TableCellProps) => {
  return (
    <td 
      {...props}
      className={`px-4 py-3 text-gray-600 dark:text-gray-400 ${props.className || ''}`}
    >
      {children}
    </td>
  );
};