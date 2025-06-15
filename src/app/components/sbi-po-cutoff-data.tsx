import { DataTable } from "./data-table";
export const SbiPoCutoffData = () => {
  const prelimsPatternHeaders = ["Name of Tests (Objective)", "No. of Questions", "Maximum Marks", "Duration"];
  const prelimsPatternData = [
    { test: "English Language", questions: "30", marks: "30", duration: "20 minutes" },
    { test: "Quantitative Aptitude", questions: "35", marks: "35", duration: "20 minutes" },
    { test: "Reasoning Ability", questions: "35", marks: "35", duration: "20 minutes" },
    { test: "Total", questions: "100", marks: "100", duration: "1 hour" },
  ];

  const prelimsCutoffHeaders = ["Category", "Cut-off (out of 100)"];
  const prelimsCutoffData = [
    { category: "General", cutoff: "59.50" },
    { category: "EWS", cutoff: "59.50" },
    { category: "OBC", cutoff: "58.25" },
    { category: "SC", cutoff: "52.50" },
    { category: "ST", cutoff: "47.75" },
  ];

  const mainsPatternHeaders = ["S. No", "Subjects", "Qns", "Marks", "Time allotted"];
  const mainsPatternData = [
    { no: "1", subject: "Reasoning & Computers Aptitude", qns: "40", marks: "50", time: "50 minutes" },
    { no: "2", subject: "Data analysis & Interpretation", qns: "30", marks: "50", time: "45 minutes" },
    { no: "3", subject: "General, Economy / Banking Awareness", qns: "50", marks: "60", time: "45 minutes" },
    { no: "4", subject: "English language", qns: "35", marks: "40", time: "40 minutes" },
    { no: "Total", subject: "Total Questions", qns: "155", marks: "200", time: "3 hrs" },
    { no: "5", subject: "Descriptive writing (Letter Writing & Essay)", qns: "2", marks: "50", time: "30 mins" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">SBI PO Prelims: Pattern</h3>
        <DataTable
          headers={prelimsPatternHeaders}
          data={prelimsPatternData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.test}</td>
              <td className="px-4 py-3">{item.questions}</td>
              <td className="px-4 py-3">{item.marks}</td>
              <td className="px-4 py-3">{item.duration}</td>
            </>
          )}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">SBI PO Prelims -2022: Cut-off (out of 100 marks)</h3>
        <DataTable
          headers={prelimsCutoffHeaders}
          data={prelimsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">SBI PO Mains: Pattern</h3>
        <DataTable
          headers={mainsPatternHeaders}
          data={mainsPatternData}
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
          Negative marking: 0.25 | Total: 157 Questions, 250 Marks, 3 hr 30 mins
        </p>
      </div>
    </div>
  );
};