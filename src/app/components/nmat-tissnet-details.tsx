import { DataTable } from "./data-table"

const NmatTissnetDetails = () => {
  return (
    <div className="space-y-8">
      {/* NMAT Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          NMAT Exam Pattern
        </h2>
        <div className="flex space-x-4 mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Narsee Monjee Institute of Management Aptitude Test (For NMIMS Mumbai, Bangalore, Hyderabad, etc.)
          </span>
        </div>
        
        <DataTable
          headers={["Section", "No. of qns", "Sectional time limit", "Score range"]}
          data={[
            ["Quantitative skills", 36, "52 mins", "12-120"],
            ["Logical Reasoning", 36, "40 mins", "12-120"],
            ["Language Skills", 36, "28 mins", "12-120"],
            ["Total", 108, "120 mins", "36-360"],
            ["", "NO Negative Marking", "", ""]
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
          className="mt-4"
        />

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">
          NMIMS Cutoff 2023 (out of 360 marks)
        </h3>
        <DataTable
          headers={["NMIMS Locations", "NMAT Cut-off percentile", "NMAT Cut-off Score"]}
          data={[
            ["NMIMS, Mumbai", "98-99", "235+"],
            ["NMIMS, Bangalore", "91-94", "220+"],
            ["NMIMS, Hyderabad", "90-92", "210+"],
            ["NMIMS, Indore", "85-90", "200+"],
            ["NMIMS, Navi Mumbai", "80-85", "180+"]
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
            </>
          )}
          className="mt-2 max-w-2xl"
        />
      </div>

      {/* TISSNET Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          TISS Selection Process (Exam date: February)
        </h2>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <p>Offers M.A.-HRM & LR and M.A. - ODCL at Mumbai & M.A.- HRM at Hyderabad</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Selection Components Weightage
            </h3>
            <DataTable
              headers={["Test", "Weightage"]}
              data={[
                ["TISSNET", "30%"],
                ["TISS-MAT", "40%"],
                ["On-line PI", "30%"],
                ["Total", "100%"]
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

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              TISSNET 2022 Cut-off (out of 100)
            </h3>
            <DataTable
              headers={["Category", "Marks"]}
              data={[
                ["General", 71.31],
                ["EWS", 64.15],
                ["OBC", 64.18],
                ["SC", 64.09],
                ["ST", 55.54]
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

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            TISSNET Pattern: Stage-I
          </h3>
          <DataTable
            headers={["Section", "No. of qns", "Marks"]}
            data={[
              ["English Proficiency", 30, 30],
              ["Mathematics and Logical Reasoning", 30, 30],
              ["General Awareness", 40, 40],
              ["NO Negative Marking Total", 100, 100]
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
              </>
            )}
            className="mt-2"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            TISS-MAT: Stage-II
          </h3>
          <DataTable
            headers={["Section", "No. of qns", "Marks"]}
            data={[
              ["Comprehension", 15, 15],
              ["Management Data Interpretation", 15, 15],
              ["Business Awareness", 15, 15],
              ["NO Sectional cut-off Total", 45, 45]
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
              </>
            )}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default NmatTissnetDetails;