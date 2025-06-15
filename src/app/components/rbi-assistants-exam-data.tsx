import { DataTable } from "./data-table";
export const RbiAssistantsExamData = () => {
  // RBI Grade B Mains Cutoff
  const gradeBMainsCutoffHeaders = ["Category", "Cut-Off (out of 300)"];
  const gradeBMainsCutoffData = [
    { category: "General", cutoff: "234.50" },
    { category: "EWS", cutoff: "187.50" },
    { category: "OBC", cutoff: "223.00" },
    { category: "SC", cutoff: "202.50" },
    { category: "ST", cutoff: "179.00" },
  ];

  // RBI Assistants Prelims Pattern
  const assistantsPrelimsHeaders = ["Subjects", "Questions", "Marks", "Duration"];
  const assistantsPrelimsData = [
    { subject: "English Language", questions: "30", marks: "30", duration: "20 Minutes" },
    { subject: "Numerical ability (Arithmetic)", questions: "35", marks: "35", duration: "20 Minutes" },
    { subject: "Reasoning ability", questions: "35", marks: "35", duration: "20 Minutes" },
    { subject: "Total Questions", questions: "100", marks: "100", duration: "60 Minutes" },
  ];

  // RRB Assistants Mains Pattern
  const assistantsMainsHeaders = ["S.No.", "Section Asked", "No. of qns", "Maximum Marks", "Duration"];
  const assistantsMainsData = [
    { no: "1", section: "English Language", qns: "40", marks: "40", duration: "30 minutes" },
    { no: "2", section: "Quantitative Aptitude", qns: "40", marks: "40", duration: "30 minutes" },
    { no: "3", section: "Reasoning Ability", qns: "40", marks: "40", duration: "30 minutes" },
    { no: "4", section: "Computer Knowledge", qns: "40", marks: "40", duration: "25 minutes" },
    { no: "5", section: "General Awareness", qns: "40", marks: "40", duration: "25 minutes" },
    { no: "Total", section: "Total", qns: "200", marks: "200", duration: "135 minutes" },
  ];

  return (
    <div className="space-y-8">
      {/* RBI Grade B Mains Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">RBI Grade B Mains- 2022: Cut off marks (out of 300)</h3>
        <DataTable
          headers={gradeBMainsCutoffHeaders}
          data={gradeBMainsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>

      {/* RBI Assistants Prelims Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">RBI Assistants Prelims Exam Pattern</h3>
        <DataTable
          headers={assistantsPrelimsHeaders}
          data={assistantsPrelimsData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.subject}</td>
              <td className="px-4 py-3">{item.questions}</td>
              <td className="px-4 py-3">{item.marks}</td>
              <td className="px-4 py-3">{item.duration}</td>
            </>
          )}
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Negative Marking: 0.25 marks
        </p>
      </div>

      {/* RRB Assistants Mains Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">RRB Assistants Mains Pattern</h3>
        <DataTable
          headers={assistantsMainsHeaders}
          data={assistantsMainsData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3">{item.section}</td>
              <td className="px-4 py-3">{item.qns}</td>
              <td className="px-4 py-3">{item.marks}</td>
              <td className="px-4 py-3">{item.duration}</td>
            </>
          )}
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Negative marking: 0.25 marks
        </p>
        <p className="mt-2 text-sm italic text-gray-600 dark:text-gray-400">
          NOTE: Language Proficiency Test (LPT) - The candidates provisionally shortlisted from the main online examination will have to undergo a language proficiency test (LPT).
        </p>
      </div>
    </div>
  );
};