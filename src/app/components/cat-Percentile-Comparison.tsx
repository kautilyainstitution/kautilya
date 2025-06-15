import { DataTable } from "./data-table";

const CatPercentileComparison = () => {
  // QA Section Data
  const qaHeaders = ["CAT-2022 Percentile", "Net Questions"];
  const qaData = [
    [99.5, 31],
    [99, 27],
    [97, 22],
    [95, 19],
    [90, 16],
    [85, 13],
    [80, 12],
    [75, 10],
    [70, 9],
    [60, 7],
    [50, 5]
  ];

  // Overall Section Data
  const overallHeaders = ["Overall Percentile", "Overall Score", "Net Qns"];
  const overallData = [
    [100, 145, 48],
    [99.9, 109, 36],
    [99.5, 92, 30],
    [99, 83, 27],
    [98, 73, 24],
    [95, 59, 19],
    [90, 48, 16],
    [85, 41, 13],
    [80, 36, 12]
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        CAT-2022 & 2021: QA (Quant) %ile vs Score/Qns
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - QA Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Quantitative Ability Section
          </h3>
          <DataTable
            headers={qaHeaders}
            data={qaData}
            renderRow={(item) => (
              <>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
                  {item[0]}%
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {item[1]}
                </td>
              </>
            )}
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Number of correct answers needed in QA section to achieve percentile
          </p>
        </div>

        {/* Right Side - Overall Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Overall CAT Performance
          </h3>
          <DataTable
            headers={overallHeaders}
            data={overallData}
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
              </>
            )}
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Total score and correct answers needed across all sections
          </p>
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
        <p>Note: Data based on CAT 2022 and 2021 analysis</p>
        <p>Net Qns = Total correct answers across all sections</p>
      </div>
    </div>
  );
};

export default CatPercentileComparison;