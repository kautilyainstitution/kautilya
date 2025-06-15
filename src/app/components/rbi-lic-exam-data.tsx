import { DataTable } from "./data-table";
export const RbiLicExamData = () => {
  // RBI Assistants Prelims Cutoff (100 marks)
  const rbiPrelims100Headers = ["Categories", "Cut Off (out of 100)"];
  const rbiPrelims100Data = [
    { category: "Gen", cutoff: "90.25" },
    { category: "EWS", cutoff: "88.00" },
    { category: "OBC", cutoff: "88.50" },
    { category: "SC", cutoff: "84.00" },
    { category: "ST", cutoff: "80.75" },
  ];

  // RBI Assistants Prelims Cutoff (200 marks)
  const rbiPrelims200Headers = ["Categories", "Cut Off (out of 200)"];
  const rbiPrelims200Data = [
    { category: "Gen", cutoff: "118.75" },
    { category: "EWS", cutoff: "103.75" },
    { category: "OBC", cutoff: "112.00" },
    { category: "SC", cutoff: "99.25" },
    { category: "ST", cutoff: "92.25" },
  ];

  // LIC ADO Prelims Pattern
  const licAdoPatternHeaders = ["S. No", "Subjects", "Qns", "Marks", "Time allotted"];
  const licAdoPatternData = [
    { no: "1", subject: "Reasoning", qns: "35", marks: "35", time: "20 minutes" },
    { no: "2", subject: "Numerical Ability", qns: "35", marks: "35", time: "20 minutes" },
    { no: "3", subject: "English Language", qns: "30", marks: "30", time: "20 minutes" },
    { no: "Total", subject: "Total", qns: "100", marks: "70", time: "1 hour" },
  ];

  // LIC ADO Prelims Expected Cutoff
  const licAdoCutoffHeaders = ["Category", "Expected Cut-off (out of 70)"];
  const licAdoCutoffData = [
    { category: "General", cutoff: "58-63" },
    { category: "EWS", cutoff: "55-60" },
    { category: "OBC", cutoff: "56-61" },
    { category: "SC", cutoff: "50-55" },
    { category: "ST", cutoff: "47-54" },
  ];

  return (
    <div className="space-y-8">
      {/* RBI Assistants Prelims Cutoff (100 marks) */}
      <div>
        <h3 className="text-lg font-semibold mb-4">RBI Assistants- 2022: Prelims Cut-off (out of 100 marks) - Hyderabad zone</h3>
        <DataTable
          headers={rbiPrelims100Headers}
          data={rbiPrelims100Data}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>

      {/* RBI Assistants Prelims Cutoff (200 marks) */}
      <div>
        <h3 className="text-lg font-semibold mb-4">RBI Assistants- 2022: Prelims Cut-off (out of 200 marks) - Hyderabad zone</h3>
        <DataTable
          headers={rbiPrelims200Headers}
          data={rbiPrelims200Data}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>

      {/* LIC ADO Prelims Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">LIC ADO – Prelims: Pattern (ADO- Apprentice Development Officer)</h3>
        <DataTable
          headers={licAdoPatternHeaders}
          data={licAdoPatternData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3">{item.subject}</td>
              <td className="px-4 py-3">{item.qns}</td>
              <td className="px-4 py-3">{item.marks}</td>
              <td className="px-4 py-3">{item.time}</td>
            </>
          )}
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          NO Negative marking
        </p>
        <p className="mt-1 text-sm italic text-gray-600 dark:text-gray-400">
          Note: English Language test will be of qualifying nature and the marks in the English Language will not be counted for ranking.
        </p>
      </div>

      {/* LIC ADO Prelims Expected Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">LIC ADO Prelims – 2023: Expected cut-off marks</h3>
        <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-4">
          (English is not considered for cut-off as it is only qualifying section)
        </p>
        <DataTable
          headers={licAdoCutoffHeaders}
          data={licAdoCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>
    </div>
  );
};