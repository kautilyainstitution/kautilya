import { DataTable } from "./data-table";

const Cat2022PercentileData = () => {
  const percentileHeaders = [
    "CAT-QA Percentile",
    "CAT-2022 Score",
    "Net Questions (2022)",
    "CAT-2021 Score",
    "Net Questions (2021)"
  ];

  const percentileData = [
    [99.5, 37, 12, 40, 13],
    [99, 33, 11, 36, 12],
    [95, 22, 7, 24, 8],
    [90, 17, 6, 17, 6],
    [80, 11, 4, 12, 4]
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        CAT Percentile vs Score Analysis
      </h2>
      <div className="flex space-x-4 mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Comparison between 2022 and 2021 data
        </span>
      </div>
      
      <DataTable
        headers={percentileHeaders}
        data={percentileData}
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
        <p>Note: Data represents Quantitative Ability section performance</p>
        <p>Net Questions = Number of correct answers needed to achieve the percentile</p>
      </div>
    </div>
  );
};

export default Cat2022PercentileData;