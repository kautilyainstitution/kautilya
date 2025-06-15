import { DataTable } from "./data-table"

const IbpsExamDetails = () => {
  return (
    <div className="space-y-8">
      {/* Syllabus Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          IBPS Bank Exams Syllabus
        </h2>
        <div className="flex space-x-4 mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Common syllabus for PO, Clerk, and Specialist Officer exams
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Quantitative Ability */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
              Quantitative Ability
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="px-2 py-1">Simplification</li>
              <li className="px-2 py-1">Profit & Loss</li>
              <li className="px-2 py-1">Mixtures & Allegations</li>
              <li className="px-2 py-1">Simple & Compound Interest</li>
              <li className="px-2 py-1">Time & Work</li>
              <li className="px-2 py-1">Time, Speed & Distance</li>
              <li className="px-2 py-1">Mensuration</li>
              <li className="px-2 py-1">Data Interpretation</li>
              <li className="px-2 py-1">Ratio & Proportion</li>
              <li className="px-2 py-1">Number Systems</li>
              <li className="px-2 py-1">Sequence & Series</li>
              <li className="px-2 py-1">Permutation & Probability</li>
            </ul>
          </div>

          {/* Reasoning */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
              Reasoning
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="px-2 py-1">Logical Reasoning</li>
              <li className="px-2 py-1">Alphanumeric Series</li>
              <li className="px-2 py-1">Ranking/Direction Test</li>
              <li className="px-2 py-1">Data Sufficiency</li>
              <li className="px-2 py-1">Inequalities</li>
              <li className="px-2 py-1">Seating Arrangement</li>
              <li className="px-2 py-1">Puzzle</li>
              <li className="px-2 py-1">Tabulation</li>
              <li className="px-2 py-1">Syllogism</li>
              <li className="px-2 py-1">Input-output</li>
              <li className="px-2 py-1">Coding-decoding</li>
            </ul>
          </div>

          {/* English Language */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
              English Language
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="px-2 py-1">Reading Comprehension</li>
              <li className="px-2 py-1">Cloze Test</li>
              <li className="px-2 py-1">Para jumbles</li>
              <li className="px-2 py-1">Word usage/Word-swap</li>
              <li className="px-2 py-1">Fill in the blanks</li>
              <li className="px-2 py-1">Error detection</li>
              <li className="px-2 py-1">Paragraph completion</li>
              <li className="px-2 py-1">One word substitution</li>
              <li className="px-2 py-1">Grammar-based questions</li>
            </ul>
          </div>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400 mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded">
          <p><strong>NOTE:</strong> IBPS (Institute of Banking Personnel Selection) is for 11 Govt. Banks: UBI, Canara Bank, Bank of Baroda, Bank of India, Indian Bank, PNB, CBI, UCO, Bank of Maharashtra, Punjab & Sindh Bank, Indian Bank. SBI conducts its own recruitment for SBI PO and clerks.</p>
        </div>
      </div>

      {/* Exam Pattern Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          IBPS & SBI Recruitment Pattern
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Selection Stages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Selection Process
            </h3>
            <DataTable
              headers={["Stage", "Exam", "Mode"]}
              data={[
                ["1.", "Preliminary", "Online"],
                ["2.", "Mains", "Online"],
                ["3.", "Interview", "Face to Face"]
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
                </>
              )}
              className="max-w-md"
            />
          </div>

          {/* Prelims Pattern */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Prelims Exam Pattern (PO & Clerk)
            </h3>
            <DataTable
              headers={["Subjects", "Questions", "Marks", "Duration"]}
              data={[
                ["English Language", 30, 30, "20 Minutes"],
                ["Numerical Ability", 35, 35, "20 Minutes"],
                ["Reasoning Ability", 35, 35, "20 Minutes"],
                ["Total", 100, 100, "60 Minutes"]
              ]}
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
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    {item[3]}
                  </td>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IbpsExamDetails;