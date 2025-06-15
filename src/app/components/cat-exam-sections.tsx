import { DataTable } from "./data-table";

const CatExamSections = () => {
  // VARC section data
  const varcHeaders = ["CAT-VARC Section"];
  const varcData = [
    ["Jumbled paragraph"],
    ["Reading Comprehension"],
    ["Para summary"],
    ["Para completion"]
  ];

  // DILR section data
  const dilrHeaders = ["Data Interpretation", "Logical Reasoning"];
  const dilrData = [
    ["Tables", "Calendars"],
    ["Caselets", "Blood Relations"],
    ["Logical Sequence", "Numbers, Letters, series"],
    ["Bar Graphs", "Clocks"],
    ["Line Charts", "Binary Logic"],
    ["Syllogism", "Cubes"],
    ["Column Graphs", "Seating Arrangement"],
    ["Venn Diagrams", "Logical Matching"],
    ["Logical Connectives", "Pie Charts"]
  ];

  return (
    <div className="space-y-8">
      {/* VARC Section */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">CAT-VARC Section</h2>
        <DataTable
          headers={varcHeaders}
          data={varcData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item[0]}</td>
            </>
          )}
          className="max-w-md"
        />
      </div>

      {/* DILR Section */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">CAT-DILR Section</h2>
        <DataTable
          headers={dilrHeaders}
          data={dilrData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item[0]}</td>
              <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{item[1]}</td>
            </>
          )}
        />
      </div>
    </div>
  );
};

export default CatExamSections;