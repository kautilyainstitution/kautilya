import { DataTable } from "./data-table";
const CatVarcPercentileData = () => {
  const varcHeaders = [
    "CAT-VARC Percentile",
    "CAT-2022 Score",
    "Net Questions (2022)",
    "CAT-2021 Score",
    "Net Questions (2021)"
  ];

  const varcData = [
    [99.5, 43, 14, 50, 17],
    [99, 39, 13, 45, 15],
    [97, 32, 11, 39, 13],
    [95, 28, 9, 35, 12],
    [90, 24, 8, 29, 10],
    [85, 20, 7, 24, 8],
    [80, 17, 6, 21, 7],
    [75, 16, 5, 15, 5],
    [70, 13, 4, 18, 6],
    [60, 10, 3, 15, 5]
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        CAT-2022 & 2021: VARC %ile vs Score/Qns
      </h2>
      <div className="flex space-x-4 mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Verbal Ability & Reading Comprehension Section Analysis
        </span>
      </div>
      
      <DataTable
        headers={varcHeaders}
        data={varcData}
        renderRow={(item) => (
          <>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
              {item[0]}%
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
              {item[1]}
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
              {item[2]}
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
              {item[3]}
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
              {item[4]}
            </td>
          </>
        )}
        className="mt-4"
      />

      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        <p>Note: Data represents Verbal Ability & Reading Comprehension section performance</p>
        <p>Net Questions = Number of correct answers needed to achieve the percentile</p>
      </div>
    </div>
  );
};

export default CatVarcPercentileData;