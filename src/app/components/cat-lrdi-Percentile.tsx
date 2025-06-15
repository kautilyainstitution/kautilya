import { DataTable } from "./data-table";

const CatLrdiPercentileData = () => {
  const lrdiHeaders = [
    "CAT-LRDI Percentile",
    "CAT-2022 Score",
    "Net Questions (2022)",
    "CAT-2021 Score", 
    "Net Questions (2021)"
  ];

  const lrdiData = [
    [99.5, 32, 11, 38, 13],
    [99, 29, 10, 33, 11],
    [95, 19, 6, 25, 8],
    [90, 15, 5, 20, 7],
    [80, 10, 3, 15, 5]
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        CAT-2022 & 2021: LRDI %ile vs Score/Qns
      </h2>
      <div className="flex space-x-4 mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Logical Reasoning & Data Interpretation Section Analysis
        </span>
      </div>
      
      <DataTable
        headers={lrdiHeaders}
        data={lrdiData}
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
        <p>Note: Data represents Logical Reasoning & Data Interpretation section performance</p>
        <p>Net Questions = Number of correct answers needed to achieve the percentile</p>
      </div>
    </div>
  );
};

export default CatLrdiPercentileData;