import { DataTable } from "./data-table"

const IbpsSbiClerkMains = () => {
  return (
    <div className="space-y-8">
      {/* Exam Pattern Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          IBPS/SBI Clerk Mains Exam Pattern
        </h2>
        
        <DataTable
          headers={["S.No", "Subjects", "Qns", "Marks", "Time allotted"]}
          data={[
            [1, "Reasoning Ability & Computer Aptitude", 50, 60, "45 minutes"],
            [2, "English Language", 40, 40, "35 minutes"],
            [3, "Quantitative Aptitude", 50, 50, "45 minutes"],
            [4, "General/Financial Awareness", 50, 50, "35 minutes"],
            ["", "Negative marking: 0.25", "Total", "190", "160 mins"]
          ]}
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
            </>
          )}
          className="mt-4"
        />

        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          <p>Note: The total marks of 190 is reduced to 100 after normalization for IBPS Clerk.</p>
        </div>
      </div>

      {/* Cut-off Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* IBPS Clerk Cut-off */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            IBPS Clerk Mains 2022 Cut-off (Andhra Pradesh)
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Normalized to 100 marks
          </p>
          <DataTable
            headers={["Category", "Cut-off"]}
            data={[
              ["General", 61.13],
              ["EWS", 41.63],
              ["OBC", 47.13],
              ["SC", 48.75],
              ["ST", 36.25]
            ]}
            renderRow={(item) => (
              <>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
                  {item[0]}
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {item[1]}
                </td>
              </>
            )}
            className="max-w-xs"
          />
        </div>

        {/* SBI Clerk Cut-off */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            SBI Clerk Mains 2022 Cut-off (Telangana)
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Out of 200 marks
          </p>
          <DataTable
            headers={["Category", "Cut-off"]}
            data={[
              ["General", 78.25],
              ["EWS", 78.25],
              ["OBC", 78.25],
              ["SC & ST", 78.25]
            ]}
            renderRow={(item) => (
              <>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
                  {item[0]}
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {item[1]}
                </td>
              </>
            )}
            className="max-w-xs"
          />
        </div>
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400 mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded">
        <p><strong>Note:</strong> Cut-off marks vary by state and category. The values shown are for reference only.</p>
        <p>Negative marking of 0.25 marks for each wrong answer in all sections.</p>
      </div>
    </div>
  );
};

export default IbpsSbiClerkMains;