import { DataTable } from "./data-table";

const IimCutoffData = () => {
  const cutoffHeaders = [
    "S.No",
    "IIM",
    "VARC Cut-off",
    "DILR Cut-off",
    "QA Cut-off",
    "Overall cut-off"
  ];

  const cutoffData = [
    [1, "IIM Ahmedabad", 70, 70, 70, 80],
    [2, "IIM Bangalore", 80, 75, 75, 85],
    [3, "IIM Calcutta", 80, 80, 75, 85],
    [4, "IIM Lucknow", 85, 85, 85, 90],
    [5, "IIM Kozhikode", 75, 75, 75, 85],
    [6, "IIM Indore", 80, 80, 80, 90],
    [7, "IIM Shillong", 75, 75, 75, 85],
    [8, "IIM Udaipur", 70, 70, 70, 92],
    [9, "IIM Ranchi", 70, 70, 70, 92],
    [10, "IIM Raipur", 70, 70, 70, 92],
    [11, "IIM Rohtak", "-", "-", "-", 95],
    [12, "IIM Trichy", "≥70", "≥70", "≥70", "≥92"],
    [13, "IIM Kashipur", 70, 70, 70, 92],
    [14, "IIM Sirmaur", 70, 70, 70, 92],
    [15, "IIM Bodhgaya", 70, 70, 70, 92],
    [16, "IIM Vizag", 70, 70, 70, 80],
    [17, "IIM Amritsar", 75, 75, 80, 85],
    [18, "IIM Jammu", 65, 65, 65, 90],
    [19, "IIM Nagpur", 65, 65, 65, 90],
    [20, "IIM Sambalpur", 70, 70, 70, 92]
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        CAT-2022: Sectional Cut-offs for All IIMs
      </h2>
      <div className="flex space-x-4 mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Minimum percentile requirements across IIMs
        </span>
      </div>
      
      <DataTable
        headers={cutoffHeaders}
        data={cutoffData}
        renderRow={(item) => (
          <>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
              {item[0]}
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
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
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
              {item[5]}
            </td>
          </>
        )}
        className="mt-4"
      />

      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        <p>Note: All cut-off values are in percentile.  indicates no specific sectional cut-off.</p>
        <p>Data represents minimum requirements for general category candidates.</p>
      </div>
    </div>
  );
};

export default IimCutoffData;