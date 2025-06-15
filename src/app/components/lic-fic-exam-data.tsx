import { DataTable } from "./data-table";
export const LicFciExamData = () => {
  // LIC ADO Mains Pattern
  const licAdoMainsHeaders = ["S. No", "Subjects", "Qns", "Marks", "Time allotted"];
  const licAdoMainsData = [
    { no: "1", subject: "Reasoning & Numerical Ability", qns: "50", marks: "50", time: "2 hours" },
    { no: "2", subject: "General Knowledge, Current Affairs and English Language with Special Emphasis on Grammar and vocabulary", qns: "50", marks: "50", time: "2 hours" },
    { no: "3", subject: "Insurance and Financial Marketing Awareness with special emphasis on knowledge of Life Insurance and Financial Sector", qns: "60", marks: "60", time: "2 hours" },
    { no: "Total", subject: "Total", qns: "160", marks: "160", time: "" },
  ];

  // LIC ADO Mains Expected Cutoff
  const licAdoMainsCutoffHeaders = ["Category", "Cut-off (out of 160)"];
  const licAdoMainsCutoffData = [
    { category: "General", cutoff: "125" },
    { category: "EWS", cutoff: "120" },
    { category: "OBC", cutoff: "115" },
    { category: "SC", cutoff: "110" },
    { category: "ST", cutoff: "105" },
  ];

  // FCI Assistant Grade III Phase-1
  const fciPhase1Headers = ["S. No", "Subjects", "Qns", "Marks", "Duration"];
  const fciPhase1Data = [
    { no: "1", subject: "English Language", qns: "25", marks: "25", duration: "15 mins" },
    { no: "2", subject: "Reasoning Ability", qns: "25", marks: "25", duration: "15 mins" },
    { no: "3", subject: "Numerical Ability", qns: "25", marks: "25", duration: "15 mins" },
    { no: "4", subject: "General Studies", qns: "25", marks: "25", duration: "15 mins" },
    { no: "Total", subject: "Total", qns: "100", marks: "100", duration: "1 hour" },
  ];

  // FCI Phase-1 Expected Cutoff
  const fciPhase1CutoffHeaders = ["Post", "Category", "Cut-offs"];
  const fciPhase1CutoffData = [
    { post: "Assistant Grade III posts for 'General & Depot' posts", category: "General", cutoff: "63-67" },
    { post: "", category: "OBC", cutoff: "61-65" },
    { post: "", category: "SC", cutoff: "53-58" },
    { post: "", category: "ST", cutoff: "47-51" },
  ];

  // FCI Phase-2 Paper-1 Pattern
  const fciPhase2Headers = ["S. No", "Subjects", "Qns", "Marks", "Duration"];
  const fciPhase2Data = [
    { no: "1", subject: "English Language", qns: "25", marks: "25", duration: "20 mins" },
    { no: "2", subject: "Reasoning Ability", qns: "25", marks: "25", duration: "20 mins" },
    { no: "3", subject: "Numerical Ability", qns: "25", marks: "25", duration: "20 mins" },
    { no: "4", subject: "General Studies", qns: "45", marks: "45", duration: "20 mins" },
    { no: "Total", subject: "Total", qns: "120", marks: "120", duration: "1 ½ hours" },
  ];

  // FCI Phase-2 Expected Cutoff
  const fciPhase2CutoffHeaders = ["Post", "Cut-offs"];
  const fciPhase2CutoffData = [
    { post: "AG-III General", cutoff: "61.75" },
    { post: "AG-III Depot", cutoff: "61.75" },
  ];

  return (
    <div className="space-y-8">
      {/* LIC ADO Mains Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">LIC – ADO- Mains: Pattern</h3>
        <DataTable
          headers={licAdoMainsHeaders}
          data={licAdoMainsData}
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
      </div>

      {/* LIC ADO Mains Expected Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">LIC ADO- Mains: Expected cut-off</h3>
        <DataTable
          headers={licAdoMainsCutoffHeaders}
          data={licAdoMainsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>

      {/* FCI Assistant Grade III Phase-1 */}
      <div>
        <h3 className="text-lg font-semibold mb-4">FCI Assistant Grade III – 2023: Phase-1</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Posts in General & Depot (Eligibility: any degree/B.Tech)
        </p>
        <DataTable
          headers={fciPhase1Headers}
          data={fciPhase1Data}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3">{item.subject}</td>
              <td className="px-4 py-3">{item.qns}</td>
              <td className="px-4 py-3">{item.marks}</td>
              <td className="px-4 py-3">{item.duration}</td>
            </>
          )}
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Negative marking: ¼
        </p>
        <p className="mt-1 text-sm italic text-gray-600 dark:text-gray-400">
          NOTE: The marks obtained in Phase-I will not be reckoned in the final merit ranking.
        </p>
      </div>

      {/* FCI Phase-1 Expected Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">FCI Assistant Grade III – 2023: Phase-1 Expected cut-off (out of 100 marks) – South Zone</h3>
        <DataTable
          headers={fciPhase1CutoffHeaders}
          data={fciPhase1CutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.post}</td>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>

      {/* FCI Phase-2 Paper-1 Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">FCI Assistant Grade III – 2023: Phase-2 Paper-1 - Pattern</h3>
        <DataTable
          headers={fciPhase2Headers}
          data={fciPhase2Data}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3">{item.subject}</td>
              <td className="px-4 py-3">{item.qns}</td>
              <td className="px-4 py-3">{item.marks}</td>
              <td className="px-4 py-3">{item.duration}</td>
            </>
          )}
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Negative marking: ¼
        </p>
      </div>

      {/* FCI Phase-2 Expected Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">FCI Assistant Grade III – 2023: Phase-2 Paper-1 Expected cut-off (out of 120 marks) – South Zone</h3>
        <DataTable
          headers={fciPhase2CutoffHeaders}
          data={fciPhase2CutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.post}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>
    </div>
  );
};