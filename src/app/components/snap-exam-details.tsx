import { DataTable } from "./data-table";

const SnapExamDetails = () => {
  // SNAP Pattern Data
  const patternHeaders = ["S.No.", "Sections", "No. of Questions", "Total Marks"];
  const patternData = [
    [1, "General English: Reading Comprehension, Verbal Reasoning, Verbal Ability", 15, 15],
    [2, "Analytical & Logical Reasoning", 25, 25],
    [3, "Quantitative, Data Interpretation & Data Sufficiency", 20, 20],
    ["", "Negative marking: 25%", "Total", "60"]
  ];

  // SNAP Cut-off Data
  const cutoffHeaders = ["Institute", "Percentile", "Score"];
  const cutoffData = [
    ["SIBM, Pune", 97, "39-41"],
    ["SCMHRD, Pune", 96, "38-40"],
    ["SIIB, Pune", 93, "36-39"],
    ["SIBM, Bangalore", 90, 31],
    ["SIBM, Hyderabad", 58, 20]
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          SNAP Exam Pattern
        </h2>
        <div className="flex space-x-4 mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Symbiosis National Aptitude Test (Exam date: December)
          </span>
        </div>
        
        <DataTable
          headers={patternHeaders}
          data={patternData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                {item[0]}
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
            </>
          )}
          className="mt-4"
        />

        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          <p>Note: Total duration of the exam is 60 minutes.</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          SNAP 2023 Cut-offs
        </h2>
        <div className="flex space-x-4 mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            For SIBM-Pune, Bengaluru & Hyderabad and other Symbiosis institutes
          </span>
        </div>
        
        <DataTable
          headers={cutoffHeaders}
          data={cutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
                {item[0]}
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                {item[1]}
              </td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                {item[2]}
              </td>
            </>
          )}
          className="mt-4 max-w-2xl"
        />

        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          <p>Note: Cut-offs are approximate and may vary slightly each year.</p>
          <p>Score range indicates variation across categories.</p>
        </div>
      </div>
    </div>
  );
};

export default SnapExamDetails;